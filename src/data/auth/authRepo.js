import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firebase/firebase.js";

export const verifyLogin = async (username, password) => {
  try {
    const userCred = await signInWithEmailAndPassword(auth, `${username}@p23.io`, password)
    return userCred.user.uid
  } catch (e) {
    console.log(e)
  }
}

export const isUserAuthenticated = async () => {
  return auth.currentUser !== null
}

export const getCurrentUserId = async () => {
  return auth.currentUser.uid
}