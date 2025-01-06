import React, { useContext, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaEye, FaEyeSlash, FaHome } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";
import { toast } from "react-toastify";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { AuthContext } from "../../provider/AuthProvider";

const LoginPage = () => {
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const [captchaValidated, setCaptchaValidated] = useState(false);
  const [error, setError] = useState({});
  const { userLogin, user, setUser, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const pathaname = location.state?.form?.pathname || "/";

  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    try {
      loadCaptchaEnginge(6);
    } catch (err) {
      console.error("Captcha Engine Error:", err);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        if (user) {
          toast.success("Login successful!");
          setTimeout(() => {
            navigate(pathaname);
          }, 2000);
        }
      })
      .catch((err) => {
        setError({ ...error, login: err.code });
        toast.error(err.message);
      });
  };

  const handleValidateCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
      setCaptchaValidated(true);
      toast.success("Captcha validated!");
    } else {
      setDisabled(true);
      toast.error("Captcha validation failed.");
    }
  };

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
    });
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('https://i.ibb.co/r3dNFw4/authentication.png')",
      }}
    >
      <Helmet>
        <title>Fusion Fork | Login</title>
      </Helmet>

      {/* Back to Home Button */}
      <Link
        to="/"
        className="absolute top-4 left-4 bg-gray-800 text-white p-3 rounded-full flex items-center justify-center hover:bg-gray-600 transition duration-300 shadow-md transform hover:scale-110"
      >
        <FaHome size={24} />
      </Link>

      <div className="flex bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full">
        {/* Left Side */}
        <div className="hidden md:block w-1/2 h-auto">
          <img
            src="https://i.ibb.co/pnh1J76/authentication2.png"
            alt="Left Illustration"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-center">Login</h2>
          <form onSubmit={handleLogin} className="mt-6">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Type here"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <span
                  className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Captcha
              </label>
              <LoadCanvasTemplate />
              <input
                type="text"
                name="captcha"
                ref={captchaRef}
                placeholder="Type here"
                className="w-full mt-2 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="button"
                onClick={handleValidateCaptcha}
                className="btn mt-5 btn-outline btn-xs px-3 py-1 text-xs font-medium rounded-full border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white shadow-md hover:shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110"
              >
                Validate
              </button>
            </div>
            <input
              disabled={disabled}
              className={`w-full py-2 rounded-lg text-white transition-opacity duration-300 ${
                disabled
                  ? "bg-gray-300 cursor-not-allowed opacity-70"
                  : "bg-blue-600 hover:bg-blue-500 cursor-pointer"
              }`}
              type="submit"
              value="Login"
            />
          </form>
          <div className="text-center mt-4">
            <p>
              New here?{" "}
              <Link className="text-blue-500 hover:underline" to="/signup">
                Create a New Account
              </Link>
            </p>
          </div>
          {/* social login */}

          <div className="mt-6 flex justify-center items-center">
            <p className="text-gray-600 mr-4">Or sign in with</p>
            <SocialLogin></SocialLogin>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
