import { useEffect } from "react";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useDispatch, useSelector } from "react-redux";
import { adminLogin, getIpAd } from "../../actions/userActions";
import loader from "../../assets/images/loader.gif";
import { useNavigate } from 'react-router-dom';
import "./AdminLogin.css";

const AdminLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [adminData, setAdminData] = useState({ email: "", pass: "" });
  const [wrnCnt, setWrnCnt] = useState(0);
  const { adminLoginLoading, adminLoginError } = useSelector(
    (state) => state.user
  );
  const [isCaptcha, setIsCaptcha] = useState(true);
  const handleInp = (e) => {
    setAdminData({ ...adminData, [e.target.name]: e.target.value });
  };

  const handleCaptcha = (value) => {
    if (value) {
      setIsCaptcha(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(adminLogin(adminData.email, adminData.pass));
    navigate('/');
  };

  useEffect(() => {
    adminLoginError && window.alert(adminLoginError);
    dispatch({ type: "clearAdminLoginError" });
    setWrnCnt(prev => prev + 1)
    console.log(wrnCnt)
  }, [adminLoginError])
  
  useEffect(() => {
    if (wrnCnt > 6) {
      window.alert("You have entered Wrong password 3 times.");
      dispatch(getIpAd(adminData.email));
      setWrnCnt(6);
    }
  },[wrnCnt])

  useEffect(() => {
    dispatch(getIpAd)
  },[])
  return (
    <div className="AdminLogin-wrapper">
      <div className="AdminLogin">
        <h1>Admin Login</h1>
        <form className="adminLoginForm" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email"
            name="email"
            autoComplete="off"
            onChange={handleInp}
            required
          />
          <input
            type="text"
            placeholder="Password"
            name="pass"
            autoComplete="off"
            onChange={handleInp}
            required
          />

          <ReCAPTCHA
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            onChange={handleCaptcha}
          />
          <button type="submit" disabled={isCaptcha} className="aLogBtn">
            {adminLoginLoading ? (
              <img src={loader} alt="loading" className="btnLoader" />
            ) : (
              "Login"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
