// @ts-nocheck

import { isEmpty } from "$lib/string.js";
import { redirect } from "@sveltejs/kit";

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ cookies }) {
  const uid = cookies.get("uid");

  if (!isEmpty(uid)) throw redirect(302, "/");
}
