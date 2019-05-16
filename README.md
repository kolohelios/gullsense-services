# gullsense-services


[Link to project](https://github.com/users/kolohelios/projects/1)

## Starting services

### Production

* `docker-compose build`
* `docker-compose up`

### Development

* `docker-compose -f docker-compose.yml -f dev.docker-compose.yml build`
* `docker-compose -f docker-compose.yml -f dev.docker-compose.yml up -d`

To stop services:

`docker-compose stop`
