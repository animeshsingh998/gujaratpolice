import "./Dashboard.css";
import DashTop from './dashTop/DashTop'
// import DashBot from './dashBot/DashBot'
import DashMid from './dashMid/DashMid'
import { useDispatch, useSelector } from "react-redux";
import {Helmet} from 'react-helmet'
import { useEffect } from "react";
import { getAdminDetails } from "../../actions/userActions";
import MDashMid from "./MdashMid/MDashMid";

const Dashboard = () => {
  const dispatch = useDispatch();
  const adminToken = window.localStorage.getItem("adminToken");
  const {adminDetails} = useSelector(state => state.user)
  useEffect(() => {
    dispatch(getAdminDetails(adminToken)); 
  },[dispatch, adminToken])
  const { sideDisabled } = useSelector((state) => state.user);
    return (
      <div
        className="Dashboard"
        style={{
          width: !sideDisabled ? "calc(100vw - 240px)" : "calc(100vw - 70px)",
        }}
      >
        <Helmet>
          <title>Gujarat Police | Admin DashBoard</title>
        </Helmet>
        <DashTop adminDetails={adminDetails} />
        <hr />
        {adminDetails && adminDetails.adminLevel === "Admin" ? (<DashMid adminDetails={adminDetails} />) : (
          <MDashMid />
        )}
      </div>
    );
};

export default Dashboard;
