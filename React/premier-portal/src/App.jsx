import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Auth from "./pages/Auth/Auth";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./Redux/Auth/ActionType";
import CreateAccessControlForm from "./pages/Forms/AccessControlForm/CreateAccessControlForm";
import { SidebarProvider } from "./components/ui/sidebar";
import { CirclesWithBar } from "react-loader-spinner";
import Navbar from "./pages/Navbar/Navbar";
import ViewAccessFrom from "./pages/ViewForms/ViewAccessFrom";
import AccessControlFormItem from "./pages/Forms/AccessControlForm/AccessControlFormItem";
import { Toaster } from "sonner";
import ControlFormHistory from "./pages/History/ControlFormHistory";
import CreateMediaDisposalForm from "./pages/Forms/MediaDisposalForm/CreateMediaDisposalForm";
import ViewMediaDisposalForm from "./pages/ViewForms/ViewMediaDisposalForm";
import MediaDisposalFormItem from "./pages/Forms/MediaDisposalForm/MediaDisposalFormItem";
import MediaDisposalFormHistory from "./pages/History/MediaDisposalFormHistory";
import SapForm from "./pages/Forms/SapForm/SapForm";
import ViewSapForm from "./pages/ViewForms/ViewSapForm";
import SapFormItem from "./pages/Forms/SapForm/SapFormItem";
import SapAccessHistory from "./pages/History/SapAccessHistory";
import SecurityIncidentReport from "./pages/Forms/SecurityIncidentReport/SecurityIncidentReport";
import ViewSecurityIncidentReport from "./pages/ViewForms/ViewSecurityIncidentReport";
import SecurityIncidentReportHistory from "./pages/History/SecurityIncidentReportHistory";
import SecurityIncidentReportItem from "./pages/Forms/SecurityIncidentReport/SecurityIncidentReportItem";

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
            <Route
              path="/Create-Media-Disposal-Form"
              element={<CreateMediaDisposalForm />}
            ></Route>
            <Route
              path="/View-Media-Disposal-Form"
              element={<ViewMediaDisposalForm />}
            />
            <Route
              path="/View-Media-Disposal-Form/:id"
              element={<MediaDisposalFormItem />}
            />
            <Route
              path="/View-Media-Disposal-Form-History"
              element={<MediaDisposalFormHistory />}
            />
            <Route path={"/Create-sap-access-form"} element={<SapForm />} />
            <Route path={"/View-SAP-Access-Form"} element={<ViewSapForm />} />
            <Route
              path={"/View-Sap-Access-Form/:id"}
              element={<SapFormItem />}
            />
            <Route
              path={"/Sap-Access-Form-History"}
              element={<SapAccessHistory />}
            />
            <Route
              path={"/Create-Security-Incident-Report"}
              element={<SecurityIncidentReport />}
            />
            <Route
              path={"/View-Security-Incident-Report"}
              element={<ViewSecurityIncidentReport />}
            />
            <Route
              path={"/View-Security-Incident-Report-History"}
              element={<SecurityIncidentReportHistory />}
            />
            <Route
              path={"/View-Security-Incident-Report-History/:id"}
              element={<SecurityIncidentReportItem />}
            />
          </Routes>
        </>
      ) : (
        <Auth></Auth>
      )}
    </>
  );
}

export default App;
