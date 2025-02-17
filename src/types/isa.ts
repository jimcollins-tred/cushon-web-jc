import { Fund } from './fund';

export interface IsaFund extends Fund {
	percentage: number;
}

export interface Isa {
	name: string;
	balance: number;
	return: number;
	type: string;
	funds: IsaFund[];
}
