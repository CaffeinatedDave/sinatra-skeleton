class Skeleton < Sinatra::Base
  # 'easy' modules
  get '/modules/structure' do erb :structure end
  get '/modules/html' do erb :html end
  get '/modules/js' do erb :js end

  # 'medium' modules
  get '/modules/ruby' do erb :ruby end
  get '/modules/erb' do erb :erb end
  get '/modules/db' do erb :db end

  # 'hard' modules
  get '/modules/rake' do erb :rake end
end
