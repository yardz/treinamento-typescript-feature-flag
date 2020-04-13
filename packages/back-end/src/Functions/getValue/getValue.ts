import FeatureFlags from '../../feature-flags.json';

const env: string = process.env.NODE_ENV || 'none';

export const getValue = <T>(flag: string): T | undefined => {
	let envFlag: any = undefined;
	if (env === 'development') {
		const { codeFlags, featureFlags }: { codeFlags: { [index: string]: any }; featureFlags: { [index: string]: any } } = FeatureFlags.dev;
		const code = codeFlags[flag];
		const feature = featureFlags[flag];
		envFlag = code !== undefined ? code : feature;
	} else if (env === 'production') {
		const { codeFlags, featureFlags }: { codeFlags: { [index: string]: any }; featureFlags: { [index: string]: any } } = FeatureFlags.prod;
		const code = codeFlags[flag];
		const feature = featureFlags[flag];
		envFlag = code !== undefined ? code : feature;
	}

	if (envFlag !== undefined) {
		return envFlag;
	}

	const {
		codeFlags,
		featureFlags,
	}: { codeFlags: { [index: string]: any }; featureFlags: { [index: string]: any } } = FeatureFlags.defaultFlags;
	const code = codeFlags[flag];
	const feature = featureFlags[flag];
	return code !== undefined ? code : feature;
};
