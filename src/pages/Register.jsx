import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoURL = e.target.photoURL.value;

    const regInfo = { name, email, password, photoURL };
    console.log(regInfo, createUser);

    //

    createUser(email, password)
      .then((result) => {
        console.log(result.user, email, password);

        updateProfile(result.user, { displayName: name, photoURL: photoURL });
        console.log(name, photoURL, "update");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <h2>this is register page</h2>
      <form onSubmit={handleRegister}>
        <input type="text" name="name" placeholder="Your name" required />
        <input type="email" name="email" placeholder="Your Email" />
        <input type="password" name="password" placeholder="Your password" />
        <input type="text" name="photoURL" placeholder="Your photo url" />
        <button className="btn">Register</button>
      </form>
    </div>
  );
};

export default Register;
