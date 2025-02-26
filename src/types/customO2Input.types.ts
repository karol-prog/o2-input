export type customO2InputTypes = {
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
	hoverColor?: string
	focusColor?: string
	borderColor?: string
}

type ValidationRule = {
	test: (value: string) => boolean
	message: string
}