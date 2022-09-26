require 'sinatra'
require_relative './app/routes_config'

set :port, 80
set :bind, '0.0.0.0'

get '/' do
  'I am up'
end
