import type React from 'react'

interface CustomO2InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	name?: string
	label?: string
	description?: string
	className?: string
	inputClassName?: string
}

const CustomO2Input: React.FC<CustomO2InputProps> = ({ ...props }) => {

	return (
		<input />
	)
}

export default CustomO2Input