module.exports = {
  apps: [
    {
      name: 'server',
      script: './node_modules/.bin/ts-node',
      args: '--project tsconfig.json ./server/index.ts',
      watch: './server/**/*',
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
      args: '--project tsconfig.json ./ingestor/index.ts',
      instances: 1,
      exec_mode: 'fork',
      cron_restart: '*/20 * * * * *',
      watch: './ingestor/**/*',
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
