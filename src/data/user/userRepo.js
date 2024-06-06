import {doc, getDoc} from "firebase/firestore";
import {db} from "../firebase/firebase.js";

export const findUserById = async (id) => {
  const userRef = doc(db, "users", id)
  const userSnap = await getDoc(userRef);
  if (userSnap.exists()) {
    return userSnap.data()
  } else {
    return null
  }
}