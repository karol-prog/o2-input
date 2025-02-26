# CustomO2Input Component

CustomO2Input is a flexible and customizable input component for React applications. It provides various styling options and built-in validation functionality.

## Props

The CustomO2Input component accepts the following props:

| Prop Name | Type | Default | Description |
|-----------|------|---------|-------------|
| type | string | - | The type of the input (e.g., 'text', 'number', 'email') |
| name | string | - | The name attribute for the input |
| label | string | - | The label text for the input |
| value | string | - | The current value of the input |
| onChange | function | - | Function to handle input changes |
| placeholder | string | - | Placeholder text for the input |
| className | string | - | Additional CSS classes for the input |
| validationRules | array | \[\] | Array of validation rules (each rule should have a `test` function and a `message` string) |
| surfaceColor | string | - | Background color of the input |
| labelStyle | string | - | CSS classes for styling the label |
| radiusSize | string | - | CSS classes for border radius |
| focusColor | string | 'initial' | Color of the input border and shadow when focused |
| borderColor | string | 'initial' | Color of the input border when not focused |

## Usage

Here's a basic example of how to use the CustomO2Input component:

```jsx
import React, { useState } from 'react';
import CustomO2Input from './CustomO2Input';

const MyForm = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const validationRules = [
    {
      test: (value) => value.length >= 3,
      message: 'Input must be at least 3 characters long',
    },
  ];

  return (
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
  );
};

export default MyForm;
```

## Features

- Customizable styling through props
- Built-in validation with custom rules
- Error message display
- Focus and blur effects

