import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { db } from "$lib/server/firebase.js";

export const GET: RequestHandler = async ({ request, cookies }) => {
  try {
    const response = await db.collection("vacatures").get();

    const items = response.docs.map((v) => {
      return { id: v.id, ...v.data() };
    });

    return json({ success: true, data: items });
  } catch (error) {
    return json(
      {
        success: false,
        message: (error as Error).message,
      },
      {
        status: 500,
      }
    );
  }
};
