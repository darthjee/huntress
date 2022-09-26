class Route
  include Arstotzka

  attr_reader :json
  expose :path
  expose :content
  
  def initialize(json = {})
    @json = json
  end

  def apply
    Endpoint.build(self)
  end
end
