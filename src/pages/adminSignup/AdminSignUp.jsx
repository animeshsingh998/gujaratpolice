import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adminSignup } from "../../actions/userActions";
import "./adminSignUp.css";
import { useNavigate } from "react-router-dom";
import loader from '../../assets/images/loader.gif';
import { useEffect } from "react";
// import {City, State} from 'country-state-city';
import { districts } from '../../Data/fakeData';
import back2 from '../../assets/images/back2.jpg';

const AdminSignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { adminSignupLoading, adminSuMessage } = useSelector((state) => state.user);
  const [adminData, setAdminData] = useState({
    name: "",
    email: "",
    psname: "",
    subDiv: "",
    district: "",
    password: "",
  });

  const handleChange = (e) => {
    setAdminData({ ...adminData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(adminSignup(adminData));
    // window.alert("Admin Created Successfully.");
  };
  
  useEffect(() => {
    if (adminSuMessage) {
      window.alert(adminSuMessage)
      navigate("/")
      dispatch({ type: "clearSuMessage" });
    }
  }, [adminSuMessage, dispatch, navigate]);
  return (
    <div className="adminSignUp-wrapper">
      <img src={back2} alt="" />
      <form className="adminSignUp" onSubmit={handleSubmit}>
        <h1>Create Admin</h1>
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleChange}
          required
          autoComplete="new-password"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          required
          autoComplete="new-password"
        />
        <input
          type="text"
          placeholder="Police Station"
          name="psname"
          onChange={handleChange}
          required
          autoComplete="new-password"
        />
        <input
          type="text"
          placeholder="Sub Division"
          name="subDiv"
          onChange={handleChange}
          required
        />
        {/* <input
          type="text"
          placeholder="District"
          name="district"
          onChange={handleChange}
          required
        /> */}
        <select name="district" onChange={handleChange}>
          <option value="">District</option>
          {districts.map(item => (
            <option value={item} key={`${item}1`}>{item}</option>
          ))}
        </select>
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn subBtn">
          {adminSignupLoading ? (
            <img src={loader} alt="loading" className="btnLoader" />
          ) : (
            "Register"
          )}
        </button>
      </form>
    </div>
  );
};

export default AdminSignUp;
