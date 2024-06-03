import {collection, doc, getDoc, getDocs, query, where} from "firebase/firestore";
import {db} from "../auth/firebase.js";

export const findImageById = async (id) => {
  const imageRef = doc(db, "images", id)
  const imageSnap = await getDoc(imageRef);
  if (imageSnap.exists()) {
    return imageSnap.data()
  } else {
    return null
  }
}

export const findImagesByUserId = async (userId) => {
  const imagesRef = collection(db, "images");
  const q = query(imagesRef, where("user", "==", userId));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }))
}