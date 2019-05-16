FROM keymetrics/pm2:latest-alpine

WORKDIR /usr/share/gullsense_services

RUN npm i
ENV DATABASE_HOST gullsense-services_app-db_1
ENV NODE_ENV development
ENV PORT 8080

EXPOSE 8080

CMD [ "pm2-runtime", "start", "ecosystem.dev.config.js" ]
