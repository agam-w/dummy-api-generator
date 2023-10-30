import { type Actions, redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ request, url, locals: { db, getSession } }) => {
		const session = await getSession();
		if (!session) {
			return { message: 'Not allowed', success: false };
		}

		const formData = await request.formData();
		const name = formData.get('name') as string;
		const project_id = formData.get('project_id') as string;
		const schema = formData.get('schema') as object;

		// create new schema
		const { error } = await db.from('user_schemas').insert({
			name: name,
			project_id: project_id,
			schema: schema
		});

		if (error) {
			return {
				message: error.message,
				success: false
			};
		}

		throw redirect(303, '/dashboard/project/' + project_id);

		// return {
		//   message: "Project created",
		//   success: true,
		// };
	}
} satisfies Actions;
