import React from 'react';
import './Button.scss';

const Button = ({ text, onClick, classList, type }) => {
	return (
		<button onClick={onClick} className={`button ${classList}`} type={type}>
			{text}
		</button>
	);
};

export default Button;
