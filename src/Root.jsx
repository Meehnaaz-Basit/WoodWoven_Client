import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";

const Root = () => {
  return (
    <div className="">
      <Nav></Nav>
      <div className="min-h-[calc(100vh-352px)] ">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Root;
