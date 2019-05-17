module.exports = {
  apps: [
    {
      name: 'server',
      script: './node_modules/.bin/ts-node',
      args: './server/index.ts',
      watch: './server/**/*',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
    {
      // instead of running off of a cron_restart trigger like in prod, we'll simple watch for change in dev (at least for now)
      name: 'ingestor',
      script: './node_modules/.bin/ts-node',
      args: './ingestor/index.ts',
      watch: './ingestor/**/*',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
}
