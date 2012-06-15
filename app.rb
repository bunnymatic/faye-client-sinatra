require 'rubygems'
require 'sinatra'

configure do
  set :public_folder, Proc.new { File.join(root, "static") }
  enable :sessions
end

get '/' do
  erb :index
end

get '/publish' do
end

post '/publish' do
end

get '/subscribe' do
end

post '/subscribe' do
end
