import {Form, redirect, useNavigation} from "react-router-dom";
import {uploadImageToStorage} from "../../data/images/imagesRepo.js";
import {getCurrentUserId} from "../../data/auth/authRepo.js";

export const uploadAction = async ({request}) => {
  const userId = await getCurrentUserId()
  const formData = await request.formData()
  const file = formData.get("file")
  await uploadImageToStorage(file)
  return redirect(`/app/profile/${userId}`)
}

const NewImage = () => {
  const navigation = useNavigation();
  const loading = navigation.state !== "idle"

  return (
    <div className={"mt-16 flex flex-col gap-2 bg-gray-300 rounded py-2 px-4"}>
      <Form method="post" encType="multipart/form-data">
        <input name={"file"} type={"file"} accept="image/*"/>
        <button disabled={loading} type={"submit"}>Dodaj</button>
      </Form>
    </div>
  )
}

export default NewImage