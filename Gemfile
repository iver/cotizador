source 'https://rubygems.org'

ruby '2.0.0'
gem 'sinatra', '>= 1.4.4'
gem 'slim'
gem 'json'

group :development do
  gem 'unicorn'
  gem 'guard'
  gem 'listen'
  gem 'rb-inotify', :require => false
  gem 'rb-fsevent', :require => false
  gem 'guard-unicorn'
end

group :production do
  gem 'unicorn'
end

group :test do
  gem 'rack-test'
  gem 'rspec'
end

