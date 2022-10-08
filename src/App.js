import './App.css';
import {Route, Routes} from 'react-router-dom'
import Login from './pages/Login/Login'
import { useDispatch, useSelector } from 'react-redux';
import Home from './pages/home/Home';
import { useEffect } from 'react';
// import Fdashboard from './pages/formDashboard/Fdashboard';
// import FormView from './pages/formView/FormView';
import FormViewStat from './pages/formView/FormViewStat';
import FormDetail from './pages/formDetail/FormDetail';
import AdminLogin from './pages/adminLogin/AdminLogin';
import AdminSignUp from './pages/adminSignup/AdminSignUp';
import UserDetail from './pages/userDetail/UserDetail';
import MoreRep from './pages/moreRep/MoreRep';
import Report from './pages/report/Report';
import { getAdminDetails } from './actions/userActions';
import back2 from './assets/images/back2.jpg';
function App() {
  const { isAuthenticated, sideDisabled, adminAuthenticated, adminDetails } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const adminToken = window.localStorage.getItem('adminToken');
  
  useEffect(() => {
    window.sessionStorage.setItem("is_reloaded", true);
  }, []);
  const is_reloaded = window.sessionStorage.getItem("is_reloaded");
  
  useEffect(() => {
    const token = window.localStorage.getItem('token');
    if (token) {
      dispatch({ type: "setAuthenticated" });
    }
    if (adminToken) {
      dispatch({ type: "setAdminAuthenticated" });
    }
  }, [dispatch]);



  useEffect(() => {
    
    if (sessionStorage.getItem("is_reloaded")) dispatch(getAdminDetails(adminToken));
  }, [is_reloaded]);
  useEffect(() => {
    if (window.location.pathname === "/form-dashboard" && window.innerWidth < 800) {
      document.querySelector(".voP").style.display = "flex";
    } else {
      document.querySelector(".voP").style.display = "none";
    }
  });

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={adminAuthenticated ? <Home /> : <AdminLogin />}
        />
        <Route
          path="/auth/admin"
          element={
            adminDetails && adminDetails.adminLevel === "Master" ? (
              <AdminSignUp />
            ) : (
              <div className="noAcc">
                <h1>This page can only be acessed By the Master Admin.</h1>
              </div>
            )
          }
        />
        {/* <Route path='/' element={<Home/>}/> */}
        {/* <Route
          path="/form-dashboard"
          element={adminAuthenticated ? <Fdashboard /> : <AdminLogin />}
        /> */}
        <Route
          path="/formview/:formId"
          element={isAuthenticated ? <FormViewStat /> : <Login />}
        />
        <Route
          path="/responses"
          element={adminAuthenticated ? <FormDetail /> : <AdminLogin />}
        />
        <Route
          path="/morerep"
          element={
            adminDetails && adminDetails.adminLevel === "Master" ? (
              <MoreRep />
            ) : (
              <div className="noAcc">
                <h1>This page can only be acessed By the Master Admin.</h1>
              </div>
            )
          }
        />
        <Route
          path="/:userId/detail"
          element={adminAuthenticated ? <UserDetail /> : <AdminLogin />}
        />

        <Route
          path="/report"
          element={adminAuthenticated ? <Report /> : <AdminLogin />}
        />
        
      </Routes>
      <div
        className="voP"
        style={{
          width: !sideDisabled ? "calc(100vw - 240px)" : "calc(100vw - 70px)",
        }}
      >
        <h1 className="viewOnPhone">
          Please view on a desktop for a better experience
        </h1>
      </div>
    </div>
  );
}

export default App;
