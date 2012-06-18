require 'rubygems'
require 'sinatra/base'
require 'eventmachine'
require 'faye'

class WebFrontApp < Sinatra::Base
  
  configure do
    set :public_folder, Proc.new { File.join(root, "static") }
    enable :sessions
  end

  get '/' do
    erb :index
  end

end

emthread = Thread.new {
  EM.run {  
    client = Faye::Client.new(FAYE_SERVER_URL)

    client.subscribe('/tweedledee') do |msg|
      puts "[tweedledee] #{msg}"
    end

    client.subscribe('/tweedledum') do |msg|
      puts "[tweedledum] #{msg}"
    end
  }
}
