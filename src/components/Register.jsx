import { useState } from "react";
import {useDispatch} from 'react-redux'
import { auth } from "../firebase/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { login } from "../redux/userSlice";

export default function Register({switchToLogin}){

    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    
    const dispatch=useDispatch();

    const registerUser=async()=>{
        try{
            const createUser=await createUserWithEmailAndPassword(auth,email,password);
            dispatch(login({uid:createUser.user.uid,email:createUser.user.email}))
        }
        catch(error){
            alert('Failed to Register')
        }
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
          <div className="bg-white p-6 rounded-xl shadow-xl w-80">
            <h2 className="text-xl font-semibold mb-4">Register</h2>
            <input
              type="email"
              className="w-full mb-3 p-2 border rounded"
              placeholder="Email"
              onChange={e => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="w-full mb-3 p-2 border rounded"
              placeholder="Password"
              onChange={e => setPassword(e.target.value)}
            />
            <button
              className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
              onClick={registerUser}
            >
              Register
            </button>
            <p className="mt-4 text-sm text-center">
              Already have an account?{' '}
              <button onClick={switchToLogin} className="text-blue-500 underline">
                Login
              </button>
            </p>
          </div>
        </div>
      );

}