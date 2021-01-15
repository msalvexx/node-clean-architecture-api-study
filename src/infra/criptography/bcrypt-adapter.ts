import { Encrypter } from '../../data/protocols/criptography/encrypter'
import bcrypt from 'bcrypt'

export class BCryptAdapter implements Encrypter {
  constructor (private readonly salt: number) {
  }

  async encrypt (value: string): Promise<string> {
    const hash = await bcrypt.hash(value, this.salt)
    return hash
  }
}
