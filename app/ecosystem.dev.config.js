module.exports = {
  apps: [
    {
      name: 'server',
      script: './node_modules/.bin/ts-node',
      args: './server/index.ts',
      watch: ['./server/**/*', './common/**/*'],
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
    {
      name: 'ingestor',
      script: './node_modules/.bin/ts-node',
      args: './ingestor/index.ts',
      watch: ['./ingestor/**/*', './common/**/*'],
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
}
