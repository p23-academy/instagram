import {Link, Outlet, useLoaderData} from "react-router-dom";
import {Masonry} from "@mui/lab";
import {findUserById} from "../../data/user/userRepo.js";
import {findImagesByUserId} from "../../data/images/imagesRepo.js";

export const profileLoader = async ({params}) => {
  const id = params.id;
  const user = await findUserById(id)
  const images = await findImagesByUserId(id)
  return {user, images}
}

const Profile = () => {
  const {user, images} = useLoaderData()

  return (
    <div className={"h-screen w-screen flex flex-col items-center"}>
      <div className={"fixed w-screen h-screen z-50 pointer-events-none"}>
        <Outlet/>
      </div>
      <h1 className={"text-6xl my-12"}>{user.name}</h1>
      <div className={"w-8/12"}>
        <Masonry columns={3} spacing={2}>
          {images.map((image, index) => (
            <Link to={image.id} key={index}>
              <div className={"hover:scale-110 transition"}>
                <img src={image.url}/>
              </div>
            </Link>
          ))}
        </Masonry>
      </div>
    </div>
  )
}

export default Profile