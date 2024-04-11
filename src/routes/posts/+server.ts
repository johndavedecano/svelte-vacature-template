import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import posts from "./posts.json";

export const GET: RequestHandler = () => {
  return json(posts);
};
