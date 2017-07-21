require_relative '../../server'
require_relative '../test_helper'
require 'test/unit'
require 'rack/test'

class MyAppTest < Test::Unit::TestCase
  include Rack::Test::Methods

  def app
    Skeleton.new
  end

  def test_root
    get '/'
    assert_equal true, last_response.body.include?('Hello, World!')
    assert_equal 200, last_response.status
  end

  def test_404
    get '/piauydsftoauygbesd'
    assert_equal true, last_response.body.include?('Sinatra doesn’t know this ditty')
    assert_equal 404, last_response.status
  end

end
