require 'sinatra/base'
require 'slim'
require 'json'
require 'core/cotizador'

class CotizadorApp < Sinatra::Base
    configure :production, :development do
      enable :logging
    end

    get '/' do
       slim :home
    end

    post '/cotizar', :provides => :json do
      if request.xhr?
         request.body.rewind
         data = JSON.parse request.body.read

         cotizador = Cotizador.new
         ok = cotizador.calcular  data["extension"],  data["plaga"]
         logger.info ok
      else
         logger.info "nada que mostrar"
      end
    end
end

