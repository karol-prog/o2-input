'use client'

import type React from 'react'
import { useState } from 'react'
import UniversalInput from '../components/UniversalInput'

const HomePage: React.FC = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value)
	}

	const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value)
	}

	const emailValidationRules = [
		{
			test: (value: string) => value.includes('@'),
			message: 'Please enter a valid email address'
		}
	]

	const passwordValidationRules = [
		{
			test: (value: string) => value.length >= 8,
			message: 'Password must be at least 8 characters long'
		},
		{
			test: (value: string) => /[A-Z]/.test(value),
			message: 'Password must contain at least one uppercase letter'
		}
	]

	return (
		<div className='container mx-auto p-4 max-w-md'>
			<h1 className='text-2xl font-bold mb-4'>Universal Input Example</h1>
			<form className='space-y-4'>
				<UniversalInput type='email' name='email' label='Email' value={email} onChange={handleEmailChange} placeholder='Enter your email' className='w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500' validationRules={emailValidationRules} />
				<UniversalInput type='password' name='password' label='Password' value={password} onChange={handlePasswordChange} placeholder='Enter your password' className='w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500' validationRules={passwordValidationRules} />
				<button type='submit' className='w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'>
					Submit
				</button>
			</form>
		</div>
	)
}

export default HomePage
