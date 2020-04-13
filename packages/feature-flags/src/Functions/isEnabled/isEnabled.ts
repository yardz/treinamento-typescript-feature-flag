import { getValue } from '../getValue';

export const isEnabled = (flag: string) => !!getValue(flag);
