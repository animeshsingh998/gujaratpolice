import "./Sidebar.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../actions/userActions";
import {
  Home,
  Drafts,
  Menu,
  ArrowBackIosNew,
  Logout,
  PersonAdd,
  Article,
} from "@mui/icons-material";
import logo from "../../assets/images/police-logo.png";
import { useEffect } from "react";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { sideDisabled, adminDetails } = useSelector((state) => state.user);
  const handleSideBar = () => {
    if (sideDisabled) {
      dispatch({ type: "clearSideDisable" });
    } else {
      dispatch({ type: "setSideDisable" });
    }
    const sideEl = document.querySelector(".Sidebar");
    sideEl.classList.toggle("sideDisabled");
  };
  useEffect(() => {
    if (sideDisabled) {
      const sidebar = document.querySelector(".Sidebar");
      sidebar.classList.add("sideDisabled");
    } else {
      const sidebar = document.querySelector(".Sidebar");
      sidebar.classList.remove("sideDisabled")
    }
  },[sideDisabled])
  const handleLogout = () => {
    dispatch(logoutUser());
    dispatch({ type: "clearSideDisable" })
  }

  return (
    <div className="Sidebar">
      <div className="pollogo">
        <img src={logo} alt="logo" className="policeLogo" />
        <h3>Gujarat Police</h3>
      </div>
      <div className="ham" onClick={handleSideBar}>
        {sideDisabled ? (
          <Menu className="haml" />
        ) : (
          <ArrowBackIosNew className="haml" />
        )}
      </div>
      <ul className="navLinks">
        <li className="navLink">
          <Link to={"/"} onClick={() => dispatch({ type: "clearSideDisable" })}>
            <Home />
            Home
          </Link>
        </li>
        {adminDetails?.adminLevel === "Admin" && (
          <li className="navLink">
            <Link to={"/responses"}>
              <Drafts /> Responses
            </Link>
          </li>
        )}
        {adminDetails?.adminLevel === "Master" && (
          <li className="navLink">
            <Link to={"/morerep"}>
              <Article />Statistics
            </Link>
          </li>
        )}
        {adminDetails?.adminLevel === "Master" && (
          <li className="navLink">
            <Link to={"/auth/admin"}>
              <PersonAdd /> Add Admin
            </Link>
          </li>
        )}
      </ul>
      <button onClick={handleLogout} className="logout-btn">
        {sideDisabled ? <Logout className="logoutLogo" /> : "Logout"}
      </button>
    </div>
  );
};

export default Sidebar;
