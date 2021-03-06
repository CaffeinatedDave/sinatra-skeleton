Skeleton Sinatra app
====================

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/1a7d214d7d6643fea801dcfa17afb1d0)](https://www.codacy.com/app/CaffeinatedDave/sinatra-skeleton?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=CaffeinatedDave/sinatra-skeleton&amp;utm_campaign=Badge_Grade)

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
PORT=9393

DATABASE_URL="postgres://skeleton@localhost:5432/skeleton"
DATABASE_PASS="skeleton"

COOKIE_NAME=rack.cookie
DOMAIN=local.testing.com
COOKIE_SECRET=changeMe
```

Edit your /etc/hosts file to contain the following line (you'll need to use sudo to write to this file):  
`127.0.0.1   local.testing.com`

Run with either `rackup -p 9393` (requires restart on each change), `shotgun` (automatically picks up changes without restarting the app) or `heroku local` (runs via Procfile, and runs as it will on heroku)

Visit `http://local.testing.com:9393` to continue learning


Heroku Deploy
-------------

Install the [Heroku Tookbelt](https://devcenter.heroku.com/articles/heroku-cli)  
Follow the steps below  
  - `heroku create` (optional: `--region=eu` for a European server)
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
