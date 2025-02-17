export interface Projection {
	likely: number;
	good: number;
	bad: number;
}

export interface Fund {
	name: string;
	description: string;
	charges: number;
	projectedReturns: Projection;
	projectedValue: Projection;
	provider: string;
}
