import { LoginFields, RegisterFields } from './auth.consts'

export type TAuthData = Record<RegisterFields | LoginFields, string>
