import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { AuthContext } from "../../provider/AuthProvider";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const SignUp = () => {
  const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const axiosPublic = useAxiosPublic();
  const onSubmit = (data) => {
    console.log(data);

    createNewUser(data.email, data.password).then((result) => {
      const user = result.user;
      setUser(user);
      updateUserProfile({ displayName: data.name, photoURL: data.photoURL })
        .then(() => {
          console.log("user profile info ");
          // create user entrty in databaser
          const userInfo = {
            name: data.name,
            email: data.email,
            userImg: data.photoURL,
          };
          axiosPublic
            .post("/users", userInfo)
            .then((res) => {
              if (res.data.insertedId) {
                console.log("User added to database");
                // reset();
                toast.success("Registered successfully");
                navigate("/");
              } else {
                console.error("User not added, response:", res.data);
                toast.error("Failed to add user.");
              }
            })
            .catch((error) => {
              console.error("Error:", error);
              toast.error("Failed to add user to the database.");
            });
        })
        .catch((error) => {
          const errorMessage = error.message;
          toast.error(errorMessage || "An error occurred during registration.");
        });
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center p-4"
      style={{
        backgroundImage: "url(https://i.ibb.co/r3dNFw4/authentication.png)",
      }}
    >
      <Helmet>
        <title>Fusion Fork |Sign Up</title>
      </Helmet>
      <div
        className="bg-white shadow-lg rounded-lg max-w-4xl w-full p-6 md:p-8 flex flex-col md:flex-row"
        style={{
          backgroundImage: "url(https://i.ibb.co/r3dNFw4/authentication.png)",
        }}
      >
        {/* Left Side Form */}
        <div className="md:w-1/2 md:pr-6">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                name="name"
                placeholder="Type here"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-amber-300"
              />
              {errors.name && (
                <span className="text-sm text-red-500">
                  Name field is required
                </span>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Photo URL
              </label>
              <input
                {...register("photoURL", { required: true })}
                type="text"
                name="photoURL"
                placeholder="Type here"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-amber-300"
              />
              {errors.photoURL && (
                <span className="text-sm text-red-500">
                  photo URL field is required
                </span>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                name="email"
                placeholder="Type here"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-amber-300"
              />
              {errors.email && (
                <span className="text-sm text-red-500">
                  Email field is required
                </span>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                    validate: {
                      hasUppercase: (value) =>
                        /[A-Z]/.test(value) ||
                        "Password must contain at least one uppercase letter",
                      hasLowercase: (value) =>
                        /[a-z]/.test(value) ||
                        "Password must contain at least one lowercase letter",
                    },
                  })}
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-amber-300"
                />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    {errors.password.message}
                  </span>
                )}
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-amber-500 text-white py-3 rounded-lg hover:bg-amber-600 focus:outline-none focus:ring focus:ring-amber-300"
            >
              Sign Up
            </button>
          </form>
          <p className="text-sm text-center mt-4">
            Already registered?{" "}
            <Link to="/login" className="text-amber-500 hover:underline">
              Go to log in
            </Link>
          </p>
          <div className="flex items-center justify-center mt-6">
            <div className="h-px w-1/4 bg-gray-300"></div>
            <p className="px-4 text-sm text-gray-500">Or sign up with</p>
            <div className="h-px w-1/4 bg-gray-300"></div>
          </div>
          <div>
            <SocialLogin></SocialLogin>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="hidden md:block md:w-1/2 md:pl-6">
          <img
            src="https://i.ibb.co/xzcx4xm/authentication2-1.png"
            alt="Illustration"
            className="w-full mt-24 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
