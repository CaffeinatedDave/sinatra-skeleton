class Skeleton < Sinatra::Base
  get '/' do
    erb :home
  end

  not_found do
    flash[:warning] = "File Not Found"
    redirect "/"
  end
end
