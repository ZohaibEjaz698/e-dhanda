import { useState } from "react"


const Login = () => {

  const [currentState,setCurrentState] = useState("Login");
  return (
    <form onClick={(e) => e.preventDefault()} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="text-3xl font-bold">{currentState}</p>
      </div>
      {currentState === "Login"? '' : <input type="text" className="w-full px-3 py-2 border border-gray-800 outline-none rounded-2xl" placeholder="Name" required /> }
      <input type="email" className="w-full px-3 py-2 border border-gray-800 outline-none rounded-2xl" placeholder="Email" required />
      <input type="password" className="w-full px-3 py-2 border border-gray-800 outline-none rounded-2xl" placeholder="Password" required />
      <div className="flex w-full justify-between text-sm mt-[8px]">
        <p className="cursor-pointer">Forgot your password?</p>
        {currentState === "Login"? <p className="cursor-pointer" onClick={() => setCurrentState("Sign Up")}>Create Account</p>:<p className="cursor-pointer" onClick={() => setCurrentState("Login")}>Login Here</p>}
      </div>
      <button className="bg-accent2 text-primary px-6 font-medium py-2 rounded-full hover:bg-transparent hover:text-accent2 hover:border-2 hover:border-accent2 transition-colors duration-200 ease-linear -md:text-sm mt-8">{currentState === "Login"? "Sign In" : "Sign Up"}</button>
    </form>
  )
}

export default Login