require 'sinatra/base'
require 'slim'

class Cotizador < Sinatra::Base
    get '/' do
       slim :home
    end

    post '/cotizar', :provides => :json do
      '{result: "this was json"}'
    end
end

