module Application
  class << self
    def start
     routes.each(&:apply)
    end

    private

    def routes
      @routes ||= config.routes.map do |route|
        Route.new(route)
      end
    end

    def config
      @config ||= Config.load_file('config/routes.yml')
    end
  end
end
