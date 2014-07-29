require 'sinatra/base'
require 'sinatra/json'
require 'slim'
require 'core/cotizador'
require 'core/result'

class CotizadorApp < Sinatra::Base
    helpers Sinatra::JSON
    configure :production, :development do
      enable :logging
    end

    get '/' do
       slim :home
    end

    post '/cotizar', :provides => :json do
      content_type :json
      if request.xhr?
         request.body.rewind
         data = JSON.parse request.body.read

         cotizador = Cotizador.new
         cost = cotizador.calcular  data["extension"], data["tipo"], data["plaga"]
         logger.info cost
         json :cost => cost
      else
         status 422
         logger.info "nada que mostrar"
      end
    end
end

