import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

export const load = (async ({ url, locals: { getSession, db } }) => {
  const session = await getSession();

  if (!session) {
    throw redirect(303, "/auth/login");
  }

  // test get users tables
  // const users = await db.from('User').select('*');
  // console.log(users);

  return { session };
}) satisfies LayoutServerLoad;
