require 'sinatra'
require 'yaml'
require 'sinclair'

require_relative './app/routes_config'
require_relative './app/route'

set :port, 80
set :bind, '0.0.0.0'

config = RoutesConfig.load_file('config/routes.yml')

config.routes.each(&:apply)
