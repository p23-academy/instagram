import {Link, useNavigation} from "react-router-dom";
import LinearProgress from '@mui/material/LinearProgress';

const Topbar = () => {
  const navigation = useNavigation();

  return (
    <div className={"w-full flex flex-col"}>
      <div className={"w-full h-16 grid grid-cols-3 items-center text-4xl px-4 py-2"}>
        <div className={"justify-self-start"}></div>
        <div className={"justify-self-center"}>Instać</div>
        <div className={"justify-self-end"}>
          <Link to={"/app/new"}>
            <button className={"text-4xl font-bold"}>Dodaj</button>
          </Link>
        </div>
      </div>
      {navigation.state !== "idle" &&
        <div>
          <LinearProgress/>
        </div>
      }
    </div>
  )
}

export default Topbar