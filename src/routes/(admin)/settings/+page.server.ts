import { db } from "$lib/server/firebase.js";
import type { Vacature } from "$lib/types.js";
import { error } from "@sveltejs/kit";

export const load = async ({ params }) => {
  const ref = await db.collection("settings").doc("website").get();

  if (!ref.exists) {
    throw error(404);
  }

  const value: any = ref.data();

  return {
    settings: {
      name: value.name,
      headline1: value.headline1,
      description1: value.description1,
      image1: value.image1,
      headline2: value.headline2,
      description2: value.description2,
      image2: value.image2,
      headline3: value.headline3,
      description3: value.description3,
      image3: value.image3,
      footer_links: value.footer_links,
    },
  };
};
