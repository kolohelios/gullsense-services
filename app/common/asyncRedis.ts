import { createClient } from 'redis'
import { promisify } from 'util'

const redisClient = createClient({
  host: 'gullsense-services_app-redis_1',
})

redisClient.on('error', function(err) {
  console.log('Redis Error ' + err)
})

const get = promisify(redisClient.get).bind(redisClient)
const set = promisify(redisClient.set).bind(redisClient)

const getRedis = async (key: string): Promise<any> => {
  // TODO real error handling
  try {
    const rawResponse = await get(key)
    const parsedResponse = JSON.parse(rawResponse)
    return parsedResponse
  } catch (error) {
    console.error(error)
    return null
  }
}

const setRedis = async (key: string, payload: any): Promise<boolean> => {
  // TODO real error handling
  try {
    const stringifiedPayload = JSON.stringify(payload)

    await set(key, stringifiedPayload)
    return true
  } catch (error) {
    console.error(error)
    return false
  }
}

export { getRedis as get, setRedis as set }
