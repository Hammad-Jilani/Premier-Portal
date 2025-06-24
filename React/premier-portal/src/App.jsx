import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Auth from "./pages/Auth/Auth";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./Redux/Auth/ActionType";
import CreateAccessControlForm from "./pages/Forms/CreateAccessControlForm";
import { SidebarProvider } from "./components/ui/sidebar";
import { CirclesWithBar } from "react-loader-spinner";
import Navbar from "./pages/Navbar/Navbar";
import ViewAccessFrom from "./pages/ViewForms/ViewAccessFrom";
import AccessControlFormItem from "./pages/Forms/AccessControlFormItem";
import { Toaster } from "sonner";
import ControlFormHistory from "./pages/History/ControlFormHistory";

function App() {
  const [count, setCount] = useState(0);

  const dispatch = useDispatch();

  const { auth } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getUser());
  }, [auth.jwt]);

  if (auth.loading && auth.user) {
    return (
      <div className="w-full h-screen flex justify-center items-center bg-white">
        <CirclesWithBar
          color="gray"
          width={
            window.innerWidth < 640 ? 60 : window.innerWidth < 1024 ? 150 : 300
          }
          height={
            window.innerWidth < 640 ? 60 : window.innerWidth < 1024 ? 150 : 300
          }
        />
      </div>
    );
  }

  return (
    <>
      {auth.user ? (
        <>
          <Navbar></Navbar>
          <Toaster />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/create-access-control-form"
              element={<CreateAccessControlForm />}
            ></Route>
            <Route
              path="/View-Access-Form-Item/:id"
              element={<AccessControlFormItem />}
            ></Route>
            <Route
              path="/View-Access-Form-History"
              element={<ControlFormHistory />}
            ></Route>
            <Route
              path="/View-Access-Forms"
              element={<ViewAccessFrom />}
            ></Route>
          </Routes>
        </>
      ) : (
        <Auth></Auth>
      )}
    </>
  );
}

export default App;
