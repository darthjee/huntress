require 'sinatra'
require_relative './app/routes_config'

set :port, 80
set :bind, '0.0.0.0'

config = RoutesConfig.load_file('config/routes.yml')

config.routes.each do |route|
  get route.path do
    route.content
  end
end
