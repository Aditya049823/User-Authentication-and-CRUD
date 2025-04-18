import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react"
import { useDispatch } from "react-redux";
import { auth } from "../firebase/Firebase";
import { login } from "../redux/userSlice";

export default function Login({switchToRegister}){

    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

    const dispatch=useDispatch();

    const handleVerify=async()=>{
        try{
            const checkLogin=await signInWithEmailAndPassword(auth,email,password);
            dispatch(login({uid:checkLogin.user.uid,email:checkLogin.user.email}))
        }
        catch(error){
            alert('Incorrect Email or Password!');
        }
    }

    return(
        <>
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
                <div className="bg-white p-6 rounded-xl shadow-xl w-80">
                    <h2 className="text-xl font-semibold mb-4">Login</h2>
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
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                    onClick={handleVerify}
                    >
                    Login
                    </button>
                    <p className="mt-4 text-sm text-center">
                        Don't have an account?{' '}
                        <button onClick={switchToRegister} className="text-blue-500 underline">
                            Register
                        </button>
                    </p>
                </div>
            </div>  
        </>
    )
}