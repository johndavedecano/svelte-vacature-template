// @ts-nocheck
// import { isAdminUser } from "$lib/server/admins";
// import { isEmpty } from "$lib/string";
// import { json } from "@sveltejs/kit";

// const isFetchRequest = (headers) => {
//   return headers.get("content-type") === "application/json";
// };

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  const response = await resolve(event);
  return response;
}
