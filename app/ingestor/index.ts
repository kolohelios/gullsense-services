import axios from 'axios'
import { getSecrets } from '../common/secrets'

const updateVesselLocations = async () => {
  const secrets = await getSecrets()
  const apiKey = secrets.wsdot_api_key

  const response = await axios.get(
    `http://www.wsdot.wa.gov/Ferries/API/Vessels/rest/vessellocations?apiaccesscode=${apiKey}`
  )

  const vesselStatusAfterUpdate = response.data
  console.log(vesselStatusAfterUpdate)
}
try {
  updateVesselLocations()
} catch (error) {
  throw new Error(error)
}
