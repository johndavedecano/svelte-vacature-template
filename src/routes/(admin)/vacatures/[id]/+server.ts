import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./../$types";
import { db } from "$lib/server/firebase.js";
import Joi from "joi";

export const DELETE: RequestHandler = async ({ params }) => {
  try {
    await db.collection("vacatures").doc(params.id).delete();

    return json({ success: true });
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

export const PUT: RequestHandler = async ({ request, params }) => {
  try {
    const body = await request.json();

    const Validator = Joi.object({
      title: Joi.string().required(),
      type: Joi.string().required(),
      location: Joi.string().required(),
      description: Joi.string().required(),
      href: Joi.string().uri().required(),
      company: Joi.string().required(),
    });

    const result = Validator.validate(body);

    if (result.error) {
      return json(result.error, {
        status: 422,
      });
    }

    const value = result.value;

    await db.collection("vacatures").doc(params.id).update(value);

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
