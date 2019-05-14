module.exports = {
  apps: [{
    name: 'ingestor',
    script: './node_modules/.bin/ts-node',
    args: './ingestor/index.ts',
    watch: true,
    env: {
      NODE_ENV: 'development',
    },
    env_production: {
      NODE_ENV: 'production',
    }
  }]
}