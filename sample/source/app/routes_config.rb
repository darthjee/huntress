require 'yaml'
require 'sinclair'
require_relative './route'

class RoutesConfig < Sinclair::Options
  with_options :routes

  def self.load_file(file_path)
    new(YAML.load_file(file_path))
  end

  def routes
    @routes.map do |route|
      Route.new(route)
    end
  end
end
