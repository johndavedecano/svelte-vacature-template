import { db } from "$lib/server/firebase.js";
import type { Vacature } from "$lib/types.js";
import { error } from "@sveltejs/kit";

export const load = async ({ params }) => {
  const ref = await db.collection("vacatures").doc(params.id).get();

  if (!ref.exists) {
    throw error(404);
  }

  const value = ref.data() as Vacature;

  return {
    vacature: {
      id: ref.id,
      title: value.title,
      type: value.type,
      location: value.location,
      description: value.description,
      href: value.href,
      company: value.company,
    },
  };
};
