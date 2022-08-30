import React from 'react';
import PropTypes from 'prop-types';
import './Login.scss';
import Button from '../Button/Button';
import { createRequestToken } from '../../services/fetchers';

const Login = (props) => {
	const errorMessageStyle = {
		color: 'red',
	};
	let emailErrorMessage = '',
		formErrorMessage = '';

	const handleSubmit = (e) => {
		e.preventDefault();

		const email = e.target.email.value;
		const password = e.target.password.value;

		const regexEmail =
			/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

		if (email === '' || password === '') {
			formErrorMessage = '* Completa los campos del formulario';
			return;
		}
		if (email !== '' && !regexEmail.test(email)) {
			emailErrorMessage = '* Escribe una dirección de correo válida';
			return;
		}
		if (email !== 'nikodiaz56@gmail.com' || password !== 'chester') {
			formErrorMessage = '* Credenciales inválidas!';
			return;
		}
		console.log('success', email, password);
	};

	return (
		<div className='login'>
			<div className='login-header'>
				<h4>Login</h4>
			</div>
			<form className='login-form' onSubmit={handleSubmit}>
				<span style={errorMessageStyle}>{formErrorMessage}</span>
				<label htmlFor='email'>
					<span>Email address</span>
					<span style={errorMessageStyle}>{emailErrorMessage}</span>
					<input
						type='email'
						name='email'
						placeholder='hello@hey.com'
						defaultValue='nikodiaz56@gmail.com'
					/>
				</label>
				<label htmlFor='email'>
					<span>Password</span>
					<input
						type='password'
						name='password'
						placeholder='Password'
						defaultValue='chester'
					/>
				</label>
				<label htmlFor='remember' className='check'>
					<input type='checkbox' name='remember' />
					<span>Remember me</span>
				</label>
				<Button text='Log In' type='submit' classList='login-button' />
			</form>
		</div>
	);
};

Login.propTypes = {};

export default Login;
