import { LoginFields, RegisterFields } from '@components/modules/auth/auth.consts'

export type TAuthData = Record<RegisterFields | LoginFields, string>
