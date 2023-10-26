import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export const load = async ({ params, parent }) => {
	const { supabase, session } = await parent();
	if (!session) {
		throw redirect(303, '/');
	}

	const project_id = params.id;
	const { data: projects, error } = await supabase
		.from('projects')
		.select('id, name')
		.eq('id', project_id);

	if (error) {
		// console.log(error);
		return {
			message: error.message,
			success: false,
			projects: []
		};
	}

	// get project
	const project = projects?.at(0) || null;

	return { message: 'success', success: true, project: project ?? [] };
};
