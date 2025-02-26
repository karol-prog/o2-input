import type React from 'react'
import { useState, useEffect } from 'react'

import { customO2InputTypes } from '../types/customO2Input.types'

const CustomO2Input: React.FC<customO2InputTypes> = (
	{
		type,
		name,
		label,
		value,
		onChange,
		placeholder,
		className,
		validationRules = [],
		surfaceColor,
		labelStyle,
		radiusSize,
		focusColor = 'initial',
		borderColor = 'initial'
	}) => {
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
		<div className='flex flex-col gap-2'>
			<label htmlFor={name} className={error ? 'text-danger-content' : labelStyle}>
				{label}
			</label>

			<input
				type={type}
				id={name}
				name={name}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				className={`py-2 px-3 w-full outline-none transition-all duration-200 ${className} ${radiusSize}`}
				style={{
					backgroundColor: surfaceColor,
					border: `1px solid ${error ? 'var(--danger-content)' : borderColor}`,
					color: 'var(--high-content)',
				}}
				onFocus={(e) => {
					e.target.style.borderColor = focusColor;
					e.target.style.boxShadow = `0 0 0 2px ${focusColor}`;
				}}
				onBlur={(e) => {
					e.target.style.borderColor = error ? 'var(--danger-content)' : borderColor;
					e.target.style.boxShadow = 'none';
				}}
			/>
			{error && (
				<span id={`${name}-error`} className='body-m text-danger-content mt-1'>
					{error}
				</span>
			)}
		</div>
	)
}

export default CustomO2Input
