## MeToo

A Sexual Assault and crime prevention app built for the [HackHarvard 2015](hackharvard.org) hackathon.

We used the [FixStart.io](https://github.com/shadylogic/fixstarter) open-source GitHub template to build the backbone of our app. We also had access to public police logs from the Harvard University Police for the past 3 years to populate the data.

## Screen Shots

Incident Map
[<img src="https://www.dropbox.com/s/gz6afgd0vwf3icy/Screenshot%202015-11-15%2009.59.03.png?dl=0"]

## Technologies

**Frontend:**
* HTML + CSS
* JavaScript
* jQuery + Ajax
* React

**Backend:**
* Ruby
* PostgreSQL
* Rails
* Node & Socket.io
* Redis
* Geocoder

**Testing:**
* Rspec

## How it Works

**Models:**
  * **User** - Incorporates Devise for user authentication
  * **UsersVote** - Manages community "up votes" for individual incidents
  * **Incidents**
  * **IssuesWatch** - This model allows users to "watch" or track a given incident over time
  * **Category** - This is our list of categories for a given issue
  * **Communities** - For our Beta version, we only have a "global" or public community, but overtime we are planning on releasing individual and private communities

## Invitation

To setup locally:

* fork + clone
* bundle install
* bundle exec rake db:create db:migrate db:seed
* bundle exec rails s
* browser -> localhost:3000
