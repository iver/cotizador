task default: %w[test]

task :test do
  ruby "test/unittest.rb"
end

task :run do
  exec "bundle exec unicorn -p 8181 -c config/unicorn.prod.rb"
end
