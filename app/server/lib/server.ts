import * as Hapi from '@hapi/hapi'
import fourOhFour from './plugins/endpoints/index'
import logging from './plugins/logging'

const server = new Hapi.Server({
  port: 8181,
})

fourOhFour(server)
logging(server)

const init = async () => {
  await server.start()
  console.log(`Server running on ${server.info.uri}`)
  server
    .table()
    .forEach((route) => console.log(`${route.method}\t${route.path}`))
}

const stop = async () => {
  await server.stop({ timeout: 20 * 1000 })
}

export { init, server, stop }
