require "rubygems"
require "sinatra/base"

require File.expand_path '../server.rb', __FILE__

use Rack::Logger

run Skeleton
