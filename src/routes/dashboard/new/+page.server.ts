import type { Actions } from "@sveltejs/kit";

export const actions = {
  default: async ({ request, url, locals: { db } }) => {
    const formData = await request.formData();
    const name = formData.get("name") as string;

    console.log({ name });

    return {
      message:
        "Please check your email for a magic link to log into the website.",
      success: true,
    };
  },
} satisfies Actions;
