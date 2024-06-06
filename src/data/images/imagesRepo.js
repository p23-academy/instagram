import {collection, doc, getDoc, addDoc, getDocs, query, where} from "firebase/firestore";
import {db, storage} from "../firebase/firebase.js";
import {ref, uploadBytes, getDownloadURL} from "firebase/storage";
import {getCurrentUserId} from "../auth/authRepo.js";

const imagesRef = collection(db, "images");

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
  const q = query(imagesRef, where("user", "==", userId));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }))
}

export const uploadImageToStorage = async (file) => {
  const fileName = file.name
  const storageRef = ref(storage, `images/${fileName}`);
  const snapshot = await uploadBytes(storageRef, file)
  const url = await getDownloadURL(snapshot.ref)
  return saveImage(fileName, url)
}

export const saveImage = async (name, url) => {
  await addDoc(imagesRef, {
    name,
    url,
    user: await getCurrentUserId(),
  })
}