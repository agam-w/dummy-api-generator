import { redirect } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const GET = (async ({ url, locals: { supabase, getSession, db } }) => {
  const code = url.searchParams.get("code");

  if (code) {
    await supabase.auth.exchangeCodeForSession(code);
  }

  const session = await getSession();
  if (session) {
    // insert to table user, supabase auth has its own auth.user table
    // console.log({ session });
    const { id, email } = session.user;
    await db.from("users").upsert({
      id: id,
      email: email ?? "",
    });
  }

  throw redirect(303, "/dashboard");
}) satisfies RequestHandler;
