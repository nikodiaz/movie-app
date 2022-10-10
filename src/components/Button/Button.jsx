import React from 'react';
import './Button.scss';

const Button = ({ text, border, background, onClick, width }) => {
	return (
		<button
			className='button'
			style={{ border: border, background: background, width: width }}
			onClick={onClick}
		>
			{text}
		</button>
	);
};

export default Button;
