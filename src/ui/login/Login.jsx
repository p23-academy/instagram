import {Form, redirect} from "react-router-dom";

export const loginAction = async ({ request }) => {
  const formData = await request.formData()
  const username = formData.get("username")
  const password = formData.get("password")
  const id = verifyLogin(username, password)
  if (id) {
    return redirect(`/profile/${id}`)
  } else {
    return redirect(`/`)
  }
}

const verifyLogin = (username, password) => {
  if (username === "admin" && password === "admin") {
    return "admin"
  }
  return null
}

const Login = () => {
  return (
    <div className={"h-screen w-screen flex justify-center items-center"}>
      <Form className={"w-96 flex flex-col gap-2 bg-gray-200 p-6 rounded-2xl"} method="POST">
        <h1 className={"text-2xl mb-2"}>Login</h1>
        <input required className={"border-2 p-2"} type="text" name="username" placeholder="Username" />
        <input required className={"border-2 p-2"} type="password" name="password" placeholder="Password" />
        <input className={"border-2 p-2 bg-white"} type="submit" value="Login" />
      </Form>
    </div>
  )
}

export default Login