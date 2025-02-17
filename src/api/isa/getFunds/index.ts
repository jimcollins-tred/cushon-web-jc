import supabase from '../../supabase/supabase';

export async function getFunds() {
	const { data, error } = await supabase.from('funds').select('*');

	if (error) {
		console.error(error);

		throw new Error('Funds could not be fetched');
	}

	return data;
}
