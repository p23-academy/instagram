import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const verifyLogin = async (username, password) => {
  try {
    const userCred = await signInWithEmailAndPassword(getAuth(), `${username}@p23.io`, password)
    return userCred.user.uid
  } catch (e) {
    console.log(e)
  }
}

export const isUserAuthenticated = async () => {
  return getAuth().currentUser !== null
}

export const getCurrentUserId = async () => {
  return getAuth().currentUser.uid
}