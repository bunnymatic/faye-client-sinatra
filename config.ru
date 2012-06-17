require 'rubygems'
require 'sinatra'
require 'eventmachine'
require 'faye'

disable :run

root = ::File.dirname(__FILE__)
require ::File.join( root, 'app' )

run WebFrontApp.new

