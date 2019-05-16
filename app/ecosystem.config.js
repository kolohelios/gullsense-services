module.exports = {
  apps: [
    {
      name: 'server',
      // script: './node_modules/.bin/ts-node',
      script: './build/compiled/server.js',
      // args: './ingestor/index.ts',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
}
