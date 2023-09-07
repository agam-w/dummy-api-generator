import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load = (async ({ params, locals: { getSession, db } }) => {
  const session = await getSession();

  if (!session) {
    throw redirect(303, "/");
  }

  // console.log(params);

  const { data: projects } = await db
    .from("projects")
    .select("id, name, users_projects (user_id, project_id)")
    .eq("id", params.id)
    .eq("users_projects.user_id", session.user.id);

  const project = projects?.at(0) || null;

  return { project: project };
}) satisfies PageServerLoad;
