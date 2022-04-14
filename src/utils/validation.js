import {
	isEmail,
	isStrongPassword
} from 'validator'

import {
	getConfig
} from './config';

const PASSWORD_OPTIONS = getConfig('progov.validation.password.options');
const EMAIL_OPTIONS = getConfig('progov.validation.email.options');


export const isValidEmail = email => {
	return isEmail(email, EMAIL_OPTIONS);
};

export const isValidPassword = password => {
	return isStrongPassword(password, PASSWORD_OPTIONS);
}