import supabase from '../../supabase/supabase';

export async function getUserIsas(userId: number) {
	const { data, error } = await supabase
		.from('isas')
		.select(
			`
			*,
			isas_funds (
					fund_id,
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

	return data;
}
