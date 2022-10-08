import React, { useState } from "react";
import "./Login.css";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { getOtp, loginUser } from "../../actions/userActions";
import loader from "../../assets/images/loader.gif";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userOtp, setUserOtp] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [otpDis, setOtpDis] = useState(false);
  const [inpDis, setInpDis] = useState(true);
  const [timer, setTimer] = useState(0);
  const [wrnOtp, setWrnOtp] = useState(false);
  const dispatch = useDispatch();
  const { otp, loginLoading } = useSelector((state) => state.user);
  const genOpt = async (e) => {
    e.preventDefault();
    setTimer(30);
    setInpDis(false);
    dispatch(getOtp(name, email));
    setOtpDis(true);
  };

  useEffect(() => {
    if (userOtp.length === 6) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [setIsValid, userOtp]);
  /* eslint-disable*/
  useEffect(() => {
    setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
  }, []);
  /* eslint-enable */
  useEffect(() => {
    timer === 0 && setOtpDis(false);
  }, [timer]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setWrnOtp(false);
    if (otp === userOtp) {
      const validate = "True";
      dispatch(loginUser(name, email, validate, userOtp, otp));
    } else {
      console.log("wrong OTP");
      setWrnOtp(true);
    }
  };

  return (
    <div className="loginForm">
      <Helmet>
        <title>Gujrat Police | Login</title>
      </Helmet>
      <form className="loginWrapper" onSubmit={handleLogin}>
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="email"
          placeholder="Email"
          name="name"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <button className="otpBtn" onClick={(e) => genOpt(e)} disabled={otpDis}>
          Generate Otp
        </button>
        {otpDis && <p>Check the email for a 6 Digit OTP</p>}
        {otpDis && <p>Resend OTP after: {timer}</p>}
        <input
          type="text"
          name="otp"
          onChange={(e) => setUserOtp(e.target.value)}
          placeholder="6 digit Otp"
          disabled={inpDis}
        />
        {wrnOtp && <p className="wrnOtp">Wrong Otp</p>}
        <button type="submit" disabled={isValid} className="loginBtn">
          {loginLoading ? (
            <img src={loader} alt="loading" className="btnLoader" />
          ) : (
            "Login"
          )}
        </button>
      </form>
    </div>
  );
};

export default Login;
