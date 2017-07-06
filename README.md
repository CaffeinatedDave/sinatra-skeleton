Skeleton Sinatra app
====================

Setup
-----

**Mac:**  
Assuming you already have git installed, and have forked/cloned this repo:

Install ruby via [rvm](https://rvm.io/)  
  - Install Ruby: `rvm install ruby-2.4.1`
  - Get 'bundler' gem `gem install bundler`
  - Install application gem bundle `bundle install`

Install Postgres via [postgres.app](https://postgresapp.com/)
  - Start postgres via the app
  - Start a terminal, and run `psql`
  - In the psql prompt, run the following:
    - `create database skeleton;`
    - `create user skeleton with password 'skeleton';`
    - `grant all on database skeleton to skeleton;`


**Windows / Linux:**  
Purchase something [here](https://www.apple.com/uk/mac/) and follow steps above.  
(More seriously, I'd love a PR with details)


Running Locally
---------------

Create a `.env` file in this directory, with the following contents:  
```
DATABASE_URL="postgres://skeleton@localhost:5432/skeleton"
DATABASE_PASS="skeleton"

COOKIE_NAME=rack.cookie
DOMAIN=local.testing.com
COOKIE_SECRET=changeMe
```

Edit your /etc/hosts file to contain the following line (you'll need to use sudo to write to this file):  
`127.0.0.1   local.testing.com`

Run with
`rackup`

visit `http://local.testing.com:9292`


####Routes


####Templates



Heroku Deploy
-------------

Install the [Heroku Tookbelt](https://devcenter.heroku.com/articles/heroku-cli)  
Follow the steps below  
  - `heroku create`
  - `git push heroku master`
  - Done!

**TODO**
--------
- Detail how to set up heroku database
- erb detail / examples
- DB setup / examples / usage
- flash messages
- GET/POST routes
- HTTP status codes meanings
- README details in app for further reading
