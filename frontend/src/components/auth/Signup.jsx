import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../firebase/firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fName, setFName] = useState("");
  const [uName, setUName] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!email || !password || !fName || !uName) {
      toast.error("Please fill out all fields.", {
        position: "bottom-center",
        autoClose: 2000,
      });
      return; // Stop form submission if any field is empty
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: fName,
          userName: uName,
        });
      }
      console.log("User Registered Successfully");
      toast.success("User Registered Successfully!!", {
        position: "top-center",
        autoClose: 2000,
      });
      navigate("/login");
    } catch (error) {
      console.log(error.message);
      const errorMessage = error.message.replace(/^Firebase: /, "");
      toast.error(errorMessage, {
        position: "bottom-center",
        autoClose: 2000,
      });
    }
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/stone.mp4"
        autoPlay
        loop
        muted
      />

      <div className="relative z-10 flex justify-center items-center h-full bg-black bg-opacity-50">
        <div className="text-center m-3 md:px-8 md:w-[430px] w-full">
          <div className="md:border bg-white bg-opacity-20 p-6 rounded-lg">
            <Link to="/">
              <img
                src="https://stonepedia.in/wp-content/uploads/2024/10/white-logo.png"
                alt="logo"
                className="w-40 md:w-60 mx-auto"
              />
            </Link>

            <p className="text-lg px-6 mb-4 font-semibold text-gray-200">
              Sign up to see awesome marbles and granites..
            </p>

            <form
              action=""
              onSubmit={handleSignUp}
              className="space-y-2 md:flex flex-col items-center"
            >
              <input
                type="email"
                className="border border-gray-400 outline-none bg-[#FAFAFA] p-2 placeholder-slate-500 text-xs w-60 md:w-72 rounded-sm"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />

              <input
                type="password"
                className="border border-gray-400 outline-none bg-[#FAFAFA] p-2 placeholder-slate-500 text-xs w-60 md:w-72 rounded-sm"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <input
                type="text"
                className="border border-gray-400 outline-none bg-[#FAFAFA] p-2 placeholder-slate-500 text-xs w-60 md:w-72 rounded-sm"
                placeholder="Full Name"
                onChange={(e) => setFName(e.target.value)}
                value={fName}
              />
              <input
                type="text"
                className="border border-gray-400 outline-none bg-[#FAFAFA] p-2 placeholder-slate-500 text-xs w-60 md:w-72 rounded-sm"
                placeholder="Username"
                onChange={(e) => setUName(e.target.value)}
                value={uName}
              />

              <p className="text-xs text-white px-8 py-1">
                By signing up, you agree to our <nbsp />
                <span className="text-gray-300">
                  Terms, Privacy Policy
                </span>{" "}
                <nbsp />
                and <span className="text-gray-300">Cookies Policy.</span>
              </p>
              {/* text-[#00376B] */}

              <div className="md:py-3">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-yellow-300 to-pink-800 hover:bg-gradient-to-r hover:from-pink-800 hover:to-yellow-300 w-60 md:w-72 text-white font-semibold py-1 rounded-md"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
          <div className="md:border mt-3 py-4 bg-white rounded-lg">
            <p>
              Have an account? <nbsp />
              <Link to="/login" className="text-[#0095F6]">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
