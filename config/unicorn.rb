# Set the working application directory
# working_directory "/path/to/your/app"
working_directory "/Users/Iver/Workspace/ruby/cotizador"

# Unicorn PID file location
# pid "/path/to/pids/unicorn.pid"
pid "/Users/Iver/Workspace/ruby/cotizador/pids/unicorn.pid"

# Path to logs
# stderr_path "/path/to/log/unicorn.log"
# stdout_path "/path/to/log/unicorn.log"
stderr_path "/Users/Iver/Workspace/ruby/cotizador/log/unicorn.log"
stdout_path "/Users/Iver/Workspace/ruby/cotizador/log/unicorn.log"

# Unicorn socket
# listen "/tmp/unicorn.[cotizador].sock"
listen "/tmp/unicorn.cotizador.sock"

# Number of processes
# worker_processes 4
worker_processes 2

# Time-out
timeout 30

listen 3000
