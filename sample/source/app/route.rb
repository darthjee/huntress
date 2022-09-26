class Route < Sinclair::Options
  with_options :path, :content

  def apply
    Sinatra::Delegator.target.get(path) do
      content
    end
  end
end
