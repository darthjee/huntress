class Config
  include Arstotzka

  def self.load_file(file_path)
    new(YAML.load_file(file_path))
  end

  attr_reader :json
  expose :routes, klass: ::Route
  
  def initialize(json = {})
    @json = json
  end
end
