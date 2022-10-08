import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import AllForms from "../../components/allforms/AllForms";
import CreateForm from "../../components/createForm/CreateForm";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Fdashboard.css";

const Fdashboard = () => {
  const dispatch = useDispatch();
  const { sideDisabled } = useSelector((state) => state.user);
  useEffect(() => {
    if (window.location.pathname === "/form-dashboard") {
      dispatch({ type: "clearSideDisable" });
    }
  }, [dispatch]);
  return (
    <>
      <Sidebar />
      <div
        className="Fdashboard"
        style={{
          width: !sideDisabled ? "calc(100vw - 240px)" : "calc(100vw - 70px)",
        }}
      >
        <Helmet>
          <title>Gujarat Police | Forms</title>
        </Helmet>
        <CreateForm />
        <AllForms />
        {/* <img src={`data:image/png;base64,${imga}`} alt="asw" /> */}
      </div>
    </>
  );
};

export default Fdashboard;
