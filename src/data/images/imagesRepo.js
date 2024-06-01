import {imagesData} from "./imagesData.js";

export const findImageById = async (id) => {
  return imagesData.find(i => i.id === id)
}