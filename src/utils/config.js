import
	config
from 'config';

export const getConfig = setting => {
	return config.has(setting)
		? config.get(setting)
		: null;
};