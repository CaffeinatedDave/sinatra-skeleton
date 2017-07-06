require "rubygems"
require "sinatra"

require File.expand_path '../server.rb', __FILE__

use Rack::Logger

run Skeleton
