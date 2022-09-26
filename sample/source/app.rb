require 'sinatra'
require 'yaml'
require 'sinclair'

root_path = File.expand_path('..', __FILE__)
$LOAD_PATH.unshift([root_path, 'app'].join('/'))

require 'application'
require 'config'
require 'route'

set :port, 80
set :bind, '0.0.0.0'

Application.start
