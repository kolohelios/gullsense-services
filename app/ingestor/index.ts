import axios from 'axios'
import { getSecrets } from '../common/secrets'
import { set } from '../common/asyncRedis'
import { scheduleJob } from 'node-schedule'

const updateVesselLocations = async () => {
  const secrets = await getSecrets()
  const apiKey = secrets.wsdot_api_key

  const response = await axios.get(
    `http://www.wsdot.wa.gov/Ferries/API/Vessels/rest/vessellocations?apiaccesscode=${apiKey}`
  )

  const vesselStatusAfterUpdate = response.data
  await set('vesselLocations', vesselStatusAfterUpdate)
}

const everyTwentySeconds = '*/20 * * * * *'

scheduleJob(everyTwentySeconds, updateVesselLocations)
