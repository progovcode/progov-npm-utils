import {
	expect
} from 'chai';

import {
	isValidEmail,
	isValidPassword
} from '../src';

describe('Given validation', () => {
	
	describe('Given isValidEmail', () => {
		
		it('should return true if email is valid', () => {
			
			const emails = [
				'1',
				'abc@abc.abc',
				'212Adjkad@jksad.jskda'
			];
			
			const results = emails.map(email => isValidEmail(email));
			expect(results).to.be.deep.equal([
				false,
				true,
				true
			]);
		});
	});
	
	describe('Given isValidPassword', () => {
		
		it('should return true if password is valid', () => {

			const password = 'Password@54321';
			
			const results = isValidPassword(password);
			expect(results).to.be.equal(true);
		});
	});
});