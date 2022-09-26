require 'sinatra'
require_relative './app/request_handler'

set :port, 80
set :bind, '0.0.0.0'

get '/' do
  'I am up'
end
