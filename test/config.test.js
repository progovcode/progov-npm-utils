import {
	expect
} from 'chai';

import {
	getConfig
} from '../src';

describe('Given getConfig', () => {

	it('should return correct config value given valid setting', () => {
	
		const result = getConfig('config.test');
		expect(result).to.equal('config-test')
	});
	
	it('should return null given invalid setting', () => {
		
		const result = getConfig('config.invalid');
		expect(result).to.be.null;
	});
});