require 'sinatra'
require 'yaml'
require 'sinclair'

require_relative './app/application'
require_relative './app/routes_config'
require_relative './app/route'

set :port, 80
set :bind, '0.0.0.0'

Application.start
