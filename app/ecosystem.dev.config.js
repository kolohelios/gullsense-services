module.exports = {
  apps: [{
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
  }]
}
