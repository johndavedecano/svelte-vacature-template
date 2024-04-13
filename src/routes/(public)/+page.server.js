import { db } from "$lib/server/firebase";
import { error } from "@sveltejs/kit";

export const load = async ({ params }) => {
  const vacature = await db.collection("vacatures").get();

  const vacatures = vacature.docs.map((v) => {
    let value = { ...v.data() };
    return {
      id: v.id,
      title: value.title,
      type: value.type,
      location: value.location,
      description: value.description,
      href: value.href,
      company: value.company,
    };
  });

  return {
    vacatures,
  };
};
