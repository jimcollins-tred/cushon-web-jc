import { Isa, IsaFund } from '@/types/isa';
import supabase from '../../supabase/supabase';

interface IsaFundsDB {
	funds: IsaFund[];
}

export async function getUserIsas(userId: number): Promise<Isa[]> {
	const { data, error } = await supabase
		.from('isas')
		.select(
			`
			*,
			isas_funds (
					funds (
							*
					)
			)
	`,
		)
		.eq('user_id', userId);

	if (error) {
		console.error(error);

		throw new Error("User's ISAs could not be fetched");
	}

	return data.map((isa) => ({
		...isa,
		isas_funds: isa.isas_funds.map((isas_fund: IsaFundsDB) => isas_fund.funds),
	}));
}
