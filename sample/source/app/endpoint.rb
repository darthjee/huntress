class Endpoint
  attr_reader :route

  def self.build(*args)
    new(*args).build
  end

  def initialize(route)
    @route = route
  end

  def build
    content = self.content
    Sinatra::Delegator.target.get(path) do
      content
    end
  end

  private

  delegate :path, :content, to: :route
end
