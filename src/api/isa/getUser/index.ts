import supabase from '../../supabase/supabase';

import { User } from '@/types/user';

export async function getUser(): Promise<User> {
	const { data, error } = await supabase
		.from('users')
		.select('*')
		.eq('email', 'jimwcollins@gmail.com');

	if (error || !data || data.length === 0) {
		console.error(error);

		throw new Error('User details could not be fetched');
	}

	return data[0];
}
