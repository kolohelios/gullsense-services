import * as Hapi from 'hapi'

const logging = (server: Hapi.Server) => {
  server.events.on('response', (request) => {
    console.log(
      `${new Date().getTime()}:${
        request.info.remoteAddress
      }:${request.method.toUpperCase()}${request.path}`
    )
  })
}

export default logging
