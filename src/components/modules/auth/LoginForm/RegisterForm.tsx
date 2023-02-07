import { FC } from 'react'

import { Input } from '@components/ui/Input'
import { registerFormOptions } from '@components/modules/auth/auth.consts'

export const RegisterForm: FC = () => {
	return (
		<form>
			{
				registerFormOptions.map(options =>
					<Input options={ options } />
				)
			}

			<button>
				Зарегистрироваться
			</button>
		</form>
	)
}
