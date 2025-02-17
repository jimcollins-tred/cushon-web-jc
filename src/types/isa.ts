import { Fund } from './fund';

export interface IsaFund extends Fund {
	percentage: number;
}

export interface Isa {
	name: string;
	balance: number;
	isa_return: number;
	type: string;
	isas_funds: IsaFund[];
}
