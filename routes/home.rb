class Skeleton < Sinatra::Base
  get '/' do
    erb :home
  end

  get '/huh' do
    flash[:warning] = "Warning Label"
    redirect '/'
  end
end
