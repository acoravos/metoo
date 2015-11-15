## MeToo

A Sexual Assault and crime prevention app built for the [HackHarvard 2015](hackharvard.org) hackathon.

Here at MeToo, we believe that a community thrives only as much as its people.

Harvard University released troubling statistics earlier this year: 1 in 5 women and 1 in 16 men are [sexually assaulted while in college](http://www.thecrimson.com/article/2015/9/21/sexual-assault-climate-results/). Sexual assaults are the most underreported crime in the US. And most assaults are perpetrated by a small number of individuals, and are much more common the first 3 months of the school year before people get settled. 

We wanted to turn the tables and put information back in the hands of Harvard students. MeToo is an app that allows people to anonymously post information about assaults on a map and other students can search the information so they can make the best informed decisions as they go about their daily lives.

We used the [FixStart.io](https://github.com/shadylogic/fixstarter) open-source GitHub template to build the backbone of our app. We also had access to public police logs from the Harvard University Police for the past 3 years to populate the data.

## Screen Shots

Homepage

![alt text](http://i.imgur.com/BHZMTQ8.jpg)

Incident Map

![alt text](http://i.imgur.com/Kpi01Fn.jpg)

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
