import React from 'react';
import './Avatar.scss';
import avatar from '../../assets/avataaars.svg';

const Avatar = () => {
	return (
		<div className='avatar'>
			<img src={avatar} alt='avatar' />
		</div>
	);
};

export default Avatar;
