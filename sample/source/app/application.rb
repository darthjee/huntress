module Application
  class << self
    def start
     config.routes.each(&:apply)
    end

    private

    def config
      @config ||= Config.load_file('config/routes.yml')
    end
  end
end
