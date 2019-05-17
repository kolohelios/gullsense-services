import * as fs from 'fs'
import { promisify } from 'util'

const readFileAsync = promisify(fs.readFile)

const secrets: { [index: string]: string } = {}

const secretKeys = ['database_name', 'database_password', 'wsdot_api_key']

const getSecrets = async (): Promise<typeof secrets> => {
  return new Promise(async (fulfilled) => {
    if (Object.keys(secrets).length < secretKeys.length) {
      await Promise.all(
        secretKeys.map(async (key) => {
          const secretFromFile = await readFileAsync(`/run/secrets/${key}`, {
            encoding: 'utf8',
          })
          secrets[key] = secretFromFile.replace('\n', '')
        })
      )
    }

    fulfilled(secrets)
  })
}

export { getSecrets }
