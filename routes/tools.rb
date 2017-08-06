class Skeleton < Sinatra::Base
  get '/tools/password' do erb :'tools/password' end
  get '/tools/timer' do erb :'tools/timer' end
end
