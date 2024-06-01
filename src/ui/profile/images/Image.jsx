import {useLoaderData, useNavigate} from "react-router-dom";
import {findImageById} from "../../../data/images/imagesRepo.js";

export const imageLoader = async ({params}) => {
  const id = params.image;
  const image = await findImageById(id)
  return {image}
}

const Image = () => {
  const {image} = useLoaderData()
  const navigate = useNavigate();
  return (
    <div className={"w-full h-full bg-gray-900 bg-opacity-30 flex justify-center items-center pointer-events-auto"}>
      <button
        className={"fixed right-4 top-4 text-6xl border-0"}
        onClick={() => navigate(-1)}
      >X</button>
      <img className={"w-8/12 h-auto"} src={image.url}/>
    </div>
  )
}

export default Image