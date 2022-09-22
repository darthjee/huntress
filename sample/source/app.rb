require 'sinatra'

set :port, 80
set :bind, '0.0.0.0'

get '/' do
  'I am up'
end
