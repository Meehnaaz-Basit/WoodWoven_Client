import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { logIn, loginWithGoogle, loginWithGithub } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    // console.log("login");
    const form = new FormData(e.currentTarget);

    const email = form.get("email");
    const password = form.get("password");

    console.log(email, password);
    // logIN
    logIn(email, password)
      .then((result) => {
        console.log(result.user);
        console.log(result.user.photoURL);
        // navigate after login
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleLoginWithGoogle = (e) => {
    e.preventDefault();
    console.log("google login");
    loginWithGoogle()
      .then((result) => {
        console.log(result.user);
        // navigate after login
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
  const handleLoginWithGithub = (e) => {
    e.preventDefault();
    console.log("github login");
    loginWithGithub()
      .then((result) => {
        console.log(result.user);
        // navigate after login
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <div className=" min-h-[70%] my-8">
        <div className="hero-content flex-col max-w-full">
          <div className="text-center" data-aos="zoom-in">
            <h1 className="text-3xl font-oregano font-bold text-custom-jute">
              Login your account !
            </h1>
          </div>
          <div
            className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100 mt-6"
            data-aos="zoom-in"
          >
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
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
                  // type={showPassword ? "text" : "password"}
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
                {/* <span
                  className="absolute right-6 bottom-4"
                  // onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaEye className="text-gray-600 cursor-pointer"></FaEye>
                  ) : (
                    <FaEyeSlash className="text-gray-600 cursor-pointer"></FaEyeSlash>
                  )}
                </span> */}
              </div>
              <div className=" mt-6">
                <button className="btn w-full border-2 border-custom-jute bg-custom-jute text-white font-bold hover:bg-transparent hover:border-custom-jute hover:text-custom-jute">
                  Login
                </button>
              </div>
            </form>
            <div className="mx-8 mt-3 mb-8 h-[1px] text-center relative  bg-custom-jute">
              <span className="p-2 px-4 font-semibold absolute top-5 left-50% transform -translate-x-1/2 -translate-y-full bg-white text-custom-jute ">
                OR
              </span>
              <p className="mt-5 font-semibold text-custom-jute ">
                Login with Social media
              </p>
            </div>

            <div className="flex justify-center gap-8 p-8 pt-0 mt-10 text-sm">
              <button
                onClick={handleLoginWithGoogle}
                className="btn bg-transparent border-2 hover:bg-transparent hover:border-custom-jute "
              >
                <img
                  className="w-5"
                  src="https://i.ibb.co/r3Z4M9J/google.png"
                  alt=""
                />{" "}
                <span className="font-bold text-custom-jute">Google</span>
              </button>
              <button
                onClick={handleLoginWithGithub}
                className="btn bg-transparent border-2 hover:bg-transparent hover:border-custom-jute  "
              >
                <img
                  className="w-5"
                  src="https://i.ibb.co/jVWqChS/github.png"
                  alt=""
                />{" "}
                <span className="font-bold text-custom-jute">GitHub</span>
              </button>
            </div>
            <div className="flex justify-between text-custom-jute p-8 pt-0 text-sm">
              <div>
                <p> Do not have any account?</p>
              </div>

              <div>
                <Link
                  to="/register"
                  className="text-orange-500 underline font-bold"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
