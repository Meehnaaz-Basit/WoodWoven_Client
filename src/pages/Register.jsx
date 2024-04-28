import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FaEye, FaEyeSlash } from "react-icons/fa6";
// import { Helmet } from "react-helmet-async";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const photoURL = form.get("photoURL");

    console.log(name, email, password, photoURL);

    // Password validation
    if (!containsUppercase(password)) {
      toast.error("Password must contain an uppercase letter");

      return;
    }
    if (!containsLowercase(password)) {
      toast.error("Password must contain a lowercase letter");

      return;
    }
    if (!hasSufficientLength(password)) {
      toast.error("Password must be at least 6 characters long");

      return;
    }

    // create user
    createUser(email, password, photoURL)
      .then((result) => {
        console.log(result.user);

        updateProfile(result.user, { displayName: name, photoURL: photoURL });
        console.log(name, photoURL, "update");

        // navigate after register

        navigate(location?.state ? location.state : "/login");

        toast.success("Registered Successfully ");
      })
      .catch((error) => {
        console.error(error);
        if (error.code === "auth/email-already-in-use") {
          toast.error(
            "Email is already in use. Please use a different email address."
          );
        } else {
          toast.error("Error registering");
        }
      });
  };

  //

  //

  // Function to check if password contains an uppercase letter
  const containsUppercase = (str) => {
    for (let i = 0; i < str.length; i++) {
      if (str[i] >= "A" && str[i] <= "Z") {
        return true;
      }
    }
    return false;
  };

  // Function to check if password contains a lowercase letter
  const containsLowercase = (str) => {
    for (let i = 0; i < str.length; i++) {
      if (str[i] >= "a" && str[i] <= "z") {
        return true;
      }
    }
    return false;
  };

  // Function to check if password has sufficient length
  const hasSufficientLength = (str) => {
    return str.length >= 6;
  };

  //

  return (
    <div>
      {/* <Helmet>
        <title>ResidenceHub - Register </title>
      </Helmet> */}
      <div className=" min-h-[70%] my-8">
        <div className="hero-content flex-col max-w-full ">
          <div className="text-center" data-aos="zoom-in">
            <h1 className="text-3xl font-bold text-custom-jute font-oregano">
              Please Register!
            </h1>
          </div>
          <div
            className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100 mt-6"
            data-aos="zoom-in"
          >
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  // type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
                <span
                  className="absolute right-6 bottom-4"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaEye className="text-gray-600 cursor-pointer"></FaEye>
                  ) : (
                    <FaEyeSlash className="text-gray-600 cursor-pointer"></FaEyeSlash>
                  )}
                </span>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Profile Picture</span>
                </label>
                <input
                  type="text"
                  name="photoURL"
                  placeholder="Picture Url"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn w-full border-2 border-custom-jute bg-custom-jute text-white font-bold hover:bg-transparent hover:border-custom-jute hover:text-custom-jute">
                  Register
                </button>
              </div>
            </form>
            <div className="flex justify-between p-8 pt-0 text-sm text-custom-jute">
              <div>
                <p> Already have an account?</p>
              </div>

              <div>
                <Link to="/login" className=" underline font-bold">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
