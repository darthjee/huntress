class Config < Sinclair::Options
  with_options :routes

  def self.load_file(file_path)
    new(YAML.load_file(file_path))
  end
end
