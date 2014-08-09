require 'active_record'
require 'sinatra/config_file'

configure :production, :development do
    config_file 'database.yml'

#    ActiveRecord::Base.establish_connection(
#      :adapter  => settings.adapter,
#      :host     => settings.host,
#      :username => settings.username,
#      :password => settings.password,
#      :database => settings.database
#    )
end
