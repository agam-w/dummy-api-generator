import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export const load = async ({ url, parent }) => {
	const { supabase, session } = await parent();
	if (!session) {
		throw redirect(303, '/');
	}

	const project_id = url.pathname.split('/')[3];

	const { data: functions, error } = await supabase
		.from('functions_data')
		.select('function_name, short_name');

	if (error) {
		// console.log(error);
		return {
			message: error.message,
			success: false,
			projects: []
		};
	}

	return {
		message: 'success',
		success: true,
		project_id: project_id,
		functions: functions ?? []
	};
};
