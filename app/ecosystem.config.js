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
      instances: 1,
      exec_mode: 'fork',
      cron_restart: '*/20 * * * * *',
      watch: false,
      autorestart: false,
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
}
