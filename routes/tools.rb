class Skeleton < Sinatra::Base
  get '/tools/password' do
    @tool = "password"
    @js_content = File.read(File.join('public', 'js', "#{@tool}.js"))
    erb :tools
  end

  get '/tools/timer' do
    @tool = "timer"
    @js_content = File.read(File.join('public', 'js', "#{@tool}.js"))
    erb :tools
  end
end
