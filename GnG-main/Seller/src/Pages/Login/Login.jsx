// import { useState } from "react";
// import { FcGoogle } from "react-icons/fc";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { signInWithPopup, GoogleAuthProvider, getAuth } from "firebase/auth";
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// // Firebase Configuration and Initialization
// const firebaseConfig = {
//   apiKey: "AIzaSyBuAY4UvIFz0iV4Gj_ULlvMbUYtDFZl038",
//   authDomain: "giftngift-8d31d.firebaseapp.com",
//   projectId: "giftngift-8d31d",
//   storageBucket: "giftngift-8d31d.firebasestorage.app",
//   messagingSenderId: "721297810109",
//   appId: "1:721297810109:web:485c04f41b4449af9d4dd4",
//   measurementId: "G-Z9STME92K4"
// };

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const auth = getAuth(app);

// // Main Login Component
// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const handleGoogleSignIn = async () => {
//     try {
//       const provider = new GoogleAuthProvider();
//       const result = await signInWithPopup(auth, provider);
//       console.log("User signed in: ", result.user);
//     } catch (error) {
//       console.error("Google Sign-In Error: ", error);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold text-center mb-6">Welcome Back!</h2>
//         <p className="text-center text-gray-600 mb-4">Sign in with your credentials.</p>

//         <button
//           onClick={handleGoogleSignIn}
//           className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg mb-4 hover:bg-gray-100"
//         >
//           <FcGoogle className="text-xl" /> Sign in with Google
//         </button>

//         <div className="flex items-center my-4">
//           <div className="flex-grow border-t border-gray-300"></div>
//           <span className="mx-3 text-gray-500">Or, sign in with your email</span>
//           <div className="flex-grow border-t border-gray-300"></div>
//         </div>

//         <form>
//           <div className="mb-4">
//             <label className="block text-sm font-medium">Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="admin@admin.com"
//             />
//           </div>

//           <div className="mb-4 relative">
//             <label className="block text-sm font-medium">Password</label>
//             <input
//               type={showPassword ? "text" : "password"}
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="••••••••"
//             />
//             <button
//               type="button"
//               className="absolute right-3 top-9 text-gray-500"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? <FaEyeSlash /> : <FaEye />}
//             </button>
//           </div>

//           <div className="flex justify-between items-center mb-4">
//             <label className="flex items-center text-sm">
//               <input type="checkbox" className="mr-2" /> Remember Me
//             </label>
//             <a href="#" className="text-sm text-blue-500 hover:underline">Forgot Password?</a>
//           </div>

//           <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-900">
//             Sign In
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

import React, { useContext, useState } from 'react';
import { Admincontext } from '../../Components/context/admincontext';
import axios from 'axios';
import {toast} from "react-toastify"
import { useNavigate } from "react-router-dom";

function Login() {
  const [state, setState] = useState('Admin'); // Admin or Seller
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState(''); // For seller registration only
  const {backendurl,setatoken}=useContext(Admincontext)
  const navigate = useNavigate();

  const handleSubmit =async (e) => {
    e.preventDefault();
      try{
      if( state === 'Seller') {
        if (isRegister){
      const {data}=await axios.post(backendurl + '/api/seller/register',{name,email,password})
               
   if(data.success){
       localStorage.setItem('stoken',data.token)
       localStorage.setItem('name',data.name)
       setatoken(data.token)
       console.log("token",data.token)
       toast.success(data.message)
       navigate('/')
   }
   else{
    toast.error(data.message)
   }
        }
      else{
        const {data}=await axios.post(backendurl + '/api/seller/login',{email,password})
                
        if(data.success){
         localStorage.setItem('stoken',data.token)
         localStorage.setItem('name',data.user.name)
         setatoken(data.token)
         console.log(data.token)
         toast.success(data.message)
         navigate('/')
        }
  
        else{
          toast.error(data.message)
         }
      }
      
    }
   
      }
      catch(e){
       toast.error(e.message)
      }
    
  };

  return (
    <form onSubmit={handleSubmit} className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5e5e5e] text-sm shadow-lg">
        <p className="text-2xl font-semibold m-auto">
          <span className="text-[#5f6fff] ">{state}</span>
          &nbsp;{isRegister ? 'Register' : 'Login'}
        </p>

        {isRegister && state === 'Seller' && (
          <div className="w-full">
            <p>Name</p>
            <input
              className="border border-[#dadada] rounded w-full p-2 mt-1"
              type="text"
              required
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        )}

        <div className="w-full">
          <p>Email</p>
          <input
            className="border border-[#dadada] rounded w-full p-2 mt-1"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="w-full">
          <p>Password</p>
          <input
            className="border border-[#dadada] rounded w-full p-2 mt-1"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="bg-[#5f6fff] text-white w-full py-2 rounded-md text-base cursor-pointer">
          {isRegister ? 'Register' : 'Login'}
        </button>

        {/* Switch between Admin and Seller */}
        {state === 'Admin' ? (
          <p>
            Want to login as Seller?{' '}
            <span
              className="text-[#5f6fff] cursor-pointer underline"
              onClick={() => {
                setState('Seller');
                setIsRegister(false);
              }}
            >
              Click here
            </span>
          </p>
        ) : (
          <p>
            Admin Login?{' '}
            <span
              className="text-[#5f6fff] cursor-pointer underline"
              onClick={() => {
                setState('Admin');
                setIsRegister(false);
              }}
            >
              Click here
            </span>
          </p>
        )}

        {/* Register link only for Seller */}
        {state === 'Seller' && (
          <p>
            {isRegister ? 'Already have an account?' : "Don't have an account?"}{' '}
            <span
              className="text-[#5f6fff] cursor-pointer underline"
              onClick={() => setIsRegister((prev) => !prev)}
            >
              {isRegister ? 'Login here' : 'Register here'}
            </span>
          </p>
        )}
      </div>
    </form>
  );
}

export default Login;
// hfnfbf