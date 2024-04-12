import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import Joi from "joi";

export const POST: RequestHandler = async ({ request }) => {
  const body = await request.json();

  const Validator = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });

  const result = Validator.validate(body);

  if (result.error) {
    return json(result.error, {
      status: 422,
    });
  }

  return json(result.value);
};
