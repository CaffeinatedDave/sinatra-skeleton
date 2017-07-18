require 'dotenv'
require 'erb'
require 'logger'
require 'sinatra'
require 'sinatra/activerecord'
require 'sinatra/base'
require 'sinatra/flash'

require_relative 'routes/init'
require_relative 'models/init'
require_relative 'helpers/init'

Dotenv.load

configure do
  db = URI.parse(ENV['DATABASE_URL'])

  ActiveRecord::Base.establish_connection(
    :adapter  => db.scheme == 'postgres' ? 'postgresql' : db.scheme,
    :host     => db.host,
    :username => db.user,
    :password => ENV['DATABASE_PASS'],
    :database => db.path[1..-1],
    :encoding => 'utf8'
  )
end

class Skeleton < Sinatra::Base
  enable :method_override
  enable :logging
  register Sinatra::Flash

  set :app_file, __FILE__

  use Rack::Session::Cookie, :key => ENV['COOKIE_NAME'],
                             :domain => ENV['DOMAIN'],
                             :path => '/',
                             :expire_after => 24 * 60 * 60, # 1 day.
                             :secret => ENV['COOKIE_SECRET']

  configure :production do
    set :raise_errors, false #false will show nicer error page
    set :show_exceptions, false #true will ignore raise_errors and display backtrace in browser
  end

  before do
    # Before each page load stuff
    @title = "Sinatra Skeleton"
  end


end
