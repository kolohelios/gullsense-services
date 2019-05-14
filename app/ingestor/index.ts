import * as cron from 'node-cron'

const everyTwentySeconds = '*/20 * * * * *'

cron.schedule(everyTwentySeconds, () => {
  console.log('every twenty seconds!')
}, {})
