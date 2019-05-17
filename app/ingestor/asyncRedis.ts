import * as redis from 'redis'
import { promisify } from 'util'

const redisClient = redis.createClient({
  host: 'gullsense-services_app-redis_1',
})

redisClient.on('error', function(err) {
  console.log('Redis Error ' + err)
})

let get: (key: string) => PromiseLike<string> | undefined
let set: (key: string, value: string) => PromiseLike<{}> | undefined

const redisGuard = async (): Promise<any> => {
  // add reconnect logic

  return new Promise((fulfilled) => {
    if (!get || !set) {
      const methodSetter = () => {
        get = promisify(redisClient.get).bind(redisClient)
        set = promisify(redisClient.set).bind(redisClient)
        if (get && set) {
          fulfilled({ get, set })
        }
        redisClient.off('ready', methodSetter)
      }
      redisClient.on('ready', methodSetter)
    } else {
      fulfilled({ get, set })
    }
  })
}

const getRedis = async (key: string): Promise<any> => {
  try {
    const { get } = await redisGuard()
    const rawResponse = await get(key)
    const parsedResponse = JSON.parse(rawResponse)
    return parsedResponse
  } catch {
    return null
  }
}

const setRedis = async (key: string, payload: any): Promise<boolean> => {
  try {
    const { set } = await redisGuard()
    const stringifiedPayload = JSON.stringify(payload)

    await set(key, stringifiedPayload)
    return true
  } catch {
    return false
  }
}

export { getRedis as get, setRedis as set }
