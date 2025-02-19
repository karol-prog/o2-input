import type React from 'react'
import { useState, useEffect } from 'react'

type ValidationRule = {
	test: (value: string) => boolean
	message: string
}

type UniversalInputProps = {
	type: string
	name: string
	label: string
	value: string
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	placeholder?: string
	className?: string
	validationRules?: ValidationRule[]
}

const UniversalInput: React.FC<UniversalInputProps> = ({ type, name, label, value, onChange, placeholder = '', className = '', validationRules = [] }) => {
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		validateInput(value)
	}, [value])

	const validateInput = (inputValue: string) => {
		for (const rule of validationRules) {
			if (!rule.test(inputValue)) {
				setError(rule.message)
				return
			}
		}
		setError(null)
	}

	return (
		<div className='universal-input-container'>
			<label htmlFor={name} className='universal-input-label'>
				{label}
			</label>
			<input type={type} id={name} name={name} value={value} onChange={onChange} placeholder={placeholder} className={`universal-input ${className} ${error ? 'universal-input-error' : ''}`} aria-invalid={error ? 'true' : 'false'} aria-describedby={error ? `${name}-error` : undefined} />
			{error && (
				<span id={`${name}-error`} className='universal-input-error-message text-red-500 text-sm mt-1'>
					{error}
				</span>
			)}
		</div>
	)
}

export default UniversalInput
