require 'sinatra'
require 'sinatra/base'
require 'slim'

class Cotizador < Sinatra::Base
    get '/' do
       slim :home
    end
end

