import { AuthClient } from '@powerbase/auth-js'
import { PowerbaseAuthClientOptions } from './types'

export class PowerbaseAuthClient extends AuthClient {
  constructor(options: PowerbaseAuthClientOptions) {
    super(options)
  }
}
