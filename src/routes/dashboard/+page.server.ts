import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ locals: { getSession, db } }) => {
	const session = await getSession();

	if (!session) {
		throw redirect(303, '/dashboard');
	}

	const { data: projects } = await db
		.from('projects')
		.select('id, name, users_projects (user_id, project_id)')
		.eq('users_projects.user_id', session.user.id);

	return { projects: projects ?? [] };
}) satisfies PageServerLoad;
