import { auth } from "$lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import type { UserLoginField } from "./types";
import axios from "axios";

let currentUser;

const login = async (params: UserLoginField) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      params.email,
      params.password
    );

    currentUser = userCredential.user;

    const idToken = await currentUser.getIdToken();

    await axios.post("/login", {
      idToken,
    });
  } catch (error) {
    auth.signOut();
    console.error(error);
    throw error;
  }
};

export default { login };
