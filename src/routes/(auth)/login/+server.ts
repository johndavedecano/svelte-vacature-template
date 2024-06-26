import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { auth } from "$lib/server/firebase.js";
import Joi from "joi";

export const POST: RequestHandler = async ({ request, cookies }) => {
  try {
    const body = await request.json();

    const Validator = Joi.object({
      idToken: Joi.string().required(),
    });

    const result = Validator.validate(body);

    if (result.error) {
      return json(result.error, {
        status: 422,
      });
    }

    const user = await auth.verifyIdToken(result.value.idToken);

    cookies.set("uid", user.uid, { path: "/" });

    return json(result.value);
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

export const DELETE: RequestHandler = async ({ cookies }) => {
  try {
    cookies.delete("uid", { path: "/" });
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
