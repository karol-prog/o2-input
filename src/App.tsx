'use client'

import type React from 'react'
import { useState } from 'react'
import CustomO2Input from './components/CustomO2Input'

const ExampleForm: React.FC = () => {
	const [username, setUsername] = useState('')

	const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUsername(e.target.value)
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		console.log('Submitted username:', username)
	}

	return (
		<div className='p-6 max-w-md mx-auto'>
			<form onSubmit={handleSubmit} className='space-y-4'>
				<CustomO2Input
					type='text'
					name='username'
					label='Username'
					value={username}
					onChange={handleUsernameChange}
					placeholder='Enter your username'
					labelStyle='label-s text-xx-high-content'
					radiusSize='radius-xs'
					borderColor='var(--brand-surface)'
					surfaceColor='var(--low-content)'
					focusColor='var(--focus-state)'
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
