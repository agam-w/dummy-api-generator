import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export const load = async ({ parent }) => {
	const { supabase, session } = await parent();
	if (!session) {
		throw redirect(303, '/');
	}

	const { data: projects, error } = await supabase.from('projects').select('id, name');

	if (error) {
		// console.log(error);
		return {
			message: error.message,
			success: false,
			projects: []
		};
	}

	return { message: 'success', success: true, projects: projects ?? [] };
};
