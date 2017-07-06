class Skeleton < Sinatra::Base
  get '/' do
    erb :home
  end
end
