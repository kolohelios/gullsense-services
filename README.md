# gullsense-services

[Link to project](https://github.com/users/kolohelios/projects/1)

## Starting services

### Production

- `docker-compose build`
- `docker-compose up`

### Development

- `docker-compose -f docker-compose.yml -f dev.docker-compose.yml build`
- `docker-compose -f docker-compose.yml -f dev.docker-compose.yml up -d`

To stop services:

`docker-compose stop`

### Guiding Principles

- it should only ever take one command to get something done (deploy, run tests, start dev services)
- having an init function that needs to be called is a hack; make things asynchronous and make them safe by calling an init itself when necessary
