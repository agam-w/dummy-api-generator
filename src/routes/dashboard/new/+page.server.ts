import { type Actions, redirect } from "@sveltejs/kit";

export const actions = {
  default: async ({ request, url, locals: { db, getSession } }) => {
    const session = await getSession();
    if (!session) {
      return { message: "Not allowed", success: false };
    }

    const formData = await request.formData();
    const name = formData.get("name") as string;

    const user = session.user;

    // create new project
    const { data, error } = await db.from("projects").insert({ name }).select();
    const project = data?.at(0);
    // create relation
    if (project) {
      await db.from("users_projects").insert({
        project_id: project.id,
        user_id: user.id,
      });
    }

    if (error) {
      return {
        message: error.message,
        success: false,
      };
    }

    throw redirect(303, "/dashboard");

    // return {
    //   message: "Project created",
    //   success: true,
    // };
  },
} satisfies Actions;
