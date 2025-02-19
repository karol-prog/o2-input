import type React from 'react'
import CustomO2Input from './components/customO2Input'

const App: React.FC = () => {
	return (
		<div className='flex items-center justify-center p-4'>
			<CustomO2Input label='Username' placeholder='Enter your username' />
		</div>
	)
}

export default App
