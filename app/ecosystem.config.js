module.exports = {
  apps: [
    {
      name: 'server',
      script: './build/server.js',
      env: {
        NODE_ENV: 'development',
      },
      exec_mode: 'cluster',
      env_production: {
        NODE_ENV: 'production',
      },
    },
    {
      name: 'ingestor',
      script: './build/ingestor.js',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
}
