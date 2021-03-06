require 'sinatra/base'
require 'json'
require 'slim'
require 'core/cotizador'

class CotizadorApp < Sinatra::Base
    configure :development do
      enable :logging
    end

    configure :production do
      disable :logging
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
         { :cost => cost }.to_json
      else
         logger.info "Entra #{params[:nombre]}"
         logger.info "Extension #{params[:extension]}"
      end
    end
end

