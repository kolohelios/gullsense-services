FROM keymetrics/pm2:latest-alpine

RUN mkdir -p /usr/share/gullsense_services
ADD . /usr/share/gullsense_services
WORKDIR /usr/share/gullsense_services

RUN npm i --production
RUN ./node_modules/.bin/ts-node ./fuse.ts build
ENV DATABASE_HOST gullsense-services_app-db_1
ENV NODE_ENV production
ENV PORT 8080

EXPOSE 8080

CMD [ "pm2-runtime", "start", "ecosystem.config.js" ]
