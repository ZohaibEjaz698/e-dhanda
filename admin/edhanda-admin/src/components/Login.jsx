import { useState } from "react";
import axios from "axios"
import { backendUrl } from "../App";
import {toast} from "react-toastify"
const Login = ({setToken}) => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const onSubmit = async (e) => {
        try {
            e.preventDefault()
            const response = await axios.post(backendUrl+ "/api/user/admin",{email,password});
            if(response.data.success){
                setToken(response.data.token)
            } else{
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }
  return (
    <div className="flex justify-center items-center h-screen">
        <div className="bg-white px-8 py-6 max-w-md shadow-md shadow-md">
        <h1 className="font-bold text-3xl text-secondary">Admin Panel</h1>
        <form onSubmit={onSubmit}>
            <div className="mb-3 min-w-72">
                <p className="text-sm font-medium mb-2 text-gray-700">Email Address</p>
                <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none" />
            </div>
            <div className="mb-3 min-w-72">
                <p className="text-sm font-medium mb-2 text-gray-700">Password</p>
                <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none" />
            </div>
            <button type="submit" className="bg-accent2 text-primary px-32 mt-5 rounded-md font-medium py-2 hover:bg-transparent hover:text-accent2 hover:border-2 hover:border-accent2 transition-colors duration-200 ease-linear">Login</button>
        </form>
        </div>
    </div>
  )
}

export default Login