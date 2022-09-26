require 'yaml'

class RoutesConfig
  class << self
    def load(configs)
    end

    def load_file(file_path)
      puts '-' * 80
      YAML.load_file(file_path).tap do |yml|
        puts yml
      end
      puts '-' * 80
    end
  end
end
