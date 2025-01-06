import React, { useContext } from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { AuthContext } from "../../provider/AuthProvider";

const SocialLogin = () => {
  const { userLogin, user, setUser, googleSignIn } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name : result.user?.displayName,
        userImg:result.user?.photoURL 


      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
  };

  return (
    <div className="flex space-x-4">
      <button className="flex justify-center items-center text-blue-600 bg-white rounded-full border border-blue-500 p-3 hover:scale-110 transition-transform duration-200 focus:outline-none">
        <FaFacebook size={24} />
      </button>
      <button
        onClick={handleGoogleSignIn}
        className="flex justify-center items-center text-red-600 bg-white rounded-full border border-red-500 p-3 hover:scale-110 transition-transform duration-200 focus:outline-none"
      >
        <FaGoogle size={24} />
      </button>
      <button className="flex justify-center items-center text-gray-800 bg-white rounded-full border border-gray-700 p-3 hover:scale-110 transition-transform duration-200 focus:outline-none">
        <FaGithub size={24} />
      </button>
    </div>
  );
};

export default SocialLogin;
