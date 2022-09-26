class Route < Sinclair::Options
  with_options :path, :content

  def apply
    Endpoint.build(self)
  end
end
