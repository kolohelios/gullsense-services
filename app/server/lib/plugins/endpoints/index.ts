import chalk from 'chalk'
import * as Hapi from 'hapi'

const route = (server: Hapi.Server) => {
  server.route({
    method: '*',
    path: '/{any*}',
    options: {
      cors: true,
    },
    handler: async (request) => {
      console.log(chalk.red('404: ', request.url.pathname))
      return { error: 'Unknown path' }
    },
  })
}

export default route
