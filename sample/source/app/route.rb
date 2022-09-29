class Route
  include Arstotzka

  attr_reader :json
  expose :path
  expose :content
  expose :http_method, type: :symbol, default: :get
  
  def initialize(json = {})
    @json = json
  end

  def apply
    Endpoint.build(self)
  end
end
