module Application
  class << self
    def start
     routes.each(&:apply)
    end

    private

    def config
      @config ||= Config.load_file('config/routes.yml')
    end

    def routes
      @routes ||= config.routes.map do |route|
        Route.new(route)
      end
    end
  end
end
