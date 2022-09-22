require 'sinatra'

set :port, 3000
set :bind, '0.0.0.0'

get '/' do
  'I am up'
end
