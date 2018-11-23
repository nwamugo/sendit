[![Build Status](https://travis-ci.com/nwamugo/sendit.svg?branch=api)](https://travis-ci.com/nwamugo/sendit)
[![Coverage Status](https://coveralls.io/repos/github/nwamugo/sendit/badge.svg?branch=api)](https://coveralls.io/github/nwamugo/sendit?branch=api)


# SendIT

SendIT is a courier service that helps users deliver parcels to different destinations

## Getting Started

The UI is hosted on Github pages [here](https://nwamugo.github.io/sendit/)
The API is deployed on heroku [here](https://arcane-ravine-70542.herokuapp.com/)

### Prerequisites

In developing this software, I set up

* a Pivotal Tracker Board which you can find [here](https://www.pivotaltracker.com/n/projects/2216035) to manage the project using stories. For example

```
Customer should be able to create a new Parcel Delivery Order
```

### Implemented Features

* Users can signup for an account and login
* Users can create a parcel delivery order
* Users can see all parcel delivery orders made by self
* Users can see details of a parcel delivery order
* Users have their profiles

### API Information

METHOD | DESCRIPTION | ENDPOINTS
-------|-------------|-----------
GET | Get all parcels | api/v1/parcels
GET | Get a specific parcel | api/v1/parcels/:parcelId
GET | Get all parcels by a user | /api/users/:userid/parcels
POST | Create a parcel | /api/v1/parcels
PUT | Cancel order | /api/v1/parcels/:parcelId


## Running tests

Tests were written using [Mocha](https://mochajs.org) and [Chai](https://chaijs.com) dev-dependencies

### end to end tests

Mocha provides the tools for cleaning the state of the software while Chai is an assertion library that is used alongside Mocha in order to ensure that test cases meet expectations. For example

```
describe('GET /parcels', () => {
  it('should fetch all parcels', (done) => {
     api.get('/api/v1/parcels')
     .set('Accept', 'application/json')
     .expect(200)
     .end(done);
    });
  });
```

### And coding style tests too

This project was built with the linter eslint and an [airbnb style guide](https://github.com/airbnb/javascript)

```
"rules": {
      "one-var": 0,
      "one-var-declaration-per-line": 0,
      "new-cap": 0,
      "consistent-return": 0,
      }
```

## Built With

* [HTML5 & CSS3 + Vanilla JavaScript](http://developer.mozilla.org/en-US/docs/) - Web development
* [NodeJs](https://nodejs.org/) - JavaScript runtime environment
* [ExpressJs](https://expressjs.com) - Node RESTful API framework
* [PostgreSQL](https://www.postgresql.org/) - Used as database for the app

## Versioning

I use [Github](http://github.com/) for versioning.

## Authors

* **Duziem Ugoji**


This project is a Duziem and Andela bootcamp project

## Acknowledgments

* Hat tip to Pelumi Longe and Clinton Fidelis. Excellence driven LFAs.
