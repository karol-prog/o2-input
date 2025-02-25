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
	surfaceColor?: string
	labelStyle?: string
	radiusSize?: string
	hoverState?: string
	focusState?: string
}

const CustomO2Input: React.FC<UniversalInputProps> = ({ type, name, label, value, onChange, placeholder, className, validationRules = [], surfaceColor, labelStyle, radiusSize, hoverState, focusState }) => {
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
		<div className='flex flex-col gap-2 text-red-50'>
			<label htmlFor={name} className={`${labelStyle}`}>
				{label}
			</label>
			<input
				type={type}
				id={name}
				name={name}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				className={`
					universal-input
					${surfaceColor}
					${radiusSize}
					${hoverState}
					${focusState}
					${className}
					${error ? 'border-danger-surface bg-danger-variant-surface' : 'border-x-high-surface'}
					text-xx-high-content
					transition-colors
					duration-300
					py-2
					px-3
					w-full
					outline-none`
				}
				aria-invalid={error ? 'true' : 'false'}
				aria-describedby={error ? `${name}-error` : undefined}
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
