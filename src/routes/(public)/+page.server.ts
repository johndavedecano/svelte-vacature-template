import { db } from "$lib/server/firebase";

export const load = async ({ params }) => {
  const vacature = await db.collection("vacatures").get();
  const setting = await db.collection("settings").doc("website").get();
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

  const config: any = setting.data();

  return {
    vacatures,
    settings: {
      name: config.name,
      headline1: config.headline1,
      description1: config.description1,
      image1: config.image1,
      headline2: config.headline2,
      description2: config.description2,
      image2: config.image2,
      headline3: config.headline3,
      description3: config.description3,
      image3: config.image3,
      footer_links: config.footer_links,
    },
  };
};
