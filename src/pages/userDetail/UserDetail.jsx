import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserDetails } from "../../actions/formActions";
import Sidebar from "../../components/sidebar/Sidebar";
import "./UserDetail.css";

const UserDetail = () => {
  const dispatch = useDispatch();
    const { sideDisabled } = useSelector((state) => state.user);
    const { userDetails } = useSelector(state => state.form);
  const { userId } = useParams();
  const adminToken = window.localStorage.getItem("adminToken");
  useEffect(() => {
    dispatch(getUserDetails(userId, adminToken));
  }, [dispatch, adminToken, userId]);
  return (
    <>
      <Sidebar />
      <div
        className="UserDetail-wrapper"
        style={{
          width: !sideDisabled ? "calc(100vw - 240px)" : "calc(100vw - 70px)",
        }}
      >
        <div className="UserDetail">
          <div className="info uid">
            <span>User ID: </span>
            <span>{userId}</span>
          </div>
          <div className="info">
            <span>1. How did you come to the police station: </span>
            <span>
              {`-> `}
              {userDetails?.Q1}
            </span>
          </div>
          <div className="info">
            <span>
              2. After how much time you were heard in Police Station:
            </span>
            <span>
              {`-> `} {userDetails?.Q2}
            </span>
          </div>
          <div className="info">
            <span>
              3. How would you describe your experience with police officers in
              the police station:
            </span>
            <span>
              {`-> `}
              {userDetails?.Q3}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetail;
