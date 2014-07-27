$: << File.dirname(__FILE__)
# require 'logger'
require 'app'

# class SifsaLogger < ::Logger
#  alias :write :<<
# end

# log = SifsaLogger.new('log/sifsa-dev.log')
# use Rack::CommonLogger, log

run Cotizador.new
