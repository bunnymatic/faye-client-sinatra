Faye client server and app
====

Starting from [sinatra-bootstrap](https://github.com/pokle/sinatra-bootstrap) from github.

The index page is a simple chat session whose connection point is a Faye server that is running on heroku.
Additionally, we have the sinatra app setup to listen to one of the test channels as well.

You'll need to update the source code replacing FAYE_SERVER_URL with the full url (with port) to the location 
of your Faye Server.  If you don't have a server, check out the companion project http://github.com/bunnymatic/faye-server-heroku.

Requirements
----

Since we're looking at Heroku for deployment and we need ruby 1.9.3 for threading, we need to use Bundler >= 1.2.0pre .  To install bundler 1.2.0pre, follow these instructions (ripped from [here](http://railsapps.github.com/installing-rails.html]

    $ rvm gemset use global
    $ gem uninstall -ax bundler
    $ gem install bundler --pre
    $ bundle --version


