require 'sinatra'
require_relative './app/routes_config'

set :port, 80
set :bind, '0.0.0.0'

RoutesConfig.load_file('config/routes.yml')

get '/' do
  'I am up'
end
