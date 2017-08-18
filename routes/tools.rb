class Skeleton < Sinatra::Base
  get '/tools/password' do
    @tool = "password"
    @jsContent = File.read(File.join('public', 'js', "#{@tool}.js"))
    erb :tools
  end

  get '/tools/timer' do
    @tool = "timer"
    @jsContent = File.read(File.join('public', 'js', "#{@tool}.js"))
    erb :tools
  end
end
