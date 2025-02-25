'use client'

import type React from 'react'
import { useState } from 'react'
import CustomO2Input from './components/customO2Input'

const ExampleForm: React.FC = () => {
	const [username, setUsername] = useState('')

	const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUsername(e.target.value)
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		console.log('Submitted username:', username)
		// Add your form submission logic here
	}

	return (
		<div>
			<p className="text-(var(--danger-content))">skuska tailwindu</p>
			<form onSubmit={handleSubmit}>
				<CustomO2Input
					type='text'
					name='username'
					label='Username'
					value={username}
					onChange={handleUsernameChange}
					placeholder='Enter your username'
					surfaceColor='bg-x-low-surface'
					labelStyle='label-m'
					radiusSize='radius-s'
					hoverState='hover:bg-hover-state'
					focusState='focus:border-brand-surface focus:shadow-focus-state'
					validationRules={[
						{
							test: (value) => value.length >= 3,
							message: 'Username must be at least 3 characters long'
						}
					]}
				/>

				<button type='submit' className='mt-4 w-full py-2 px-4 bg-brand-surface text-x-low-surface radius-s hover:opacity-90 transition-opacity duration-300'>
					Submit
				</button>
			</form>
		</div>
	)
}

export default ExampleForm
