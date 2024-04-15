import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { db } from "$lib/server/firebase.js";
import Joi from "joi";

export const POST: RequestHandler = async ({ request, cookies }) => {
  try {
    const body = await request.json();

    const Validator = Joi.object({
      name: Joi.string().required(),
      headline1: Joi.string().required(),
      description1: Joi.string().required(),
      image1: Joi.string().uri().required(),
      headline2: Joi.string().required(),
      description2: Joi.string().required(),
      image2: Joi.string().uri().required(),
      headline3: Joi.string().required(),
      description3: Joi.string().required(),
      image3: Joi.string().uri().required(),
      footer_links: Joi.string().required(),
    });

    const result = Validator.validate(body);

    if (result.error) {
      return json(result.error, {
        status: 422,
      });
    }

    const value = result.value;

    await db.collection("settings").doc("website").set(value);

    return json({ success: true, data: value });
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
