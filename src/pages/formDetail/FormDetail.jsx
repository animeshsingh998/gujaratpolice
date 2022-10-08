import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../../components/sidebar/Sidebar";
import "./FormDetail.css";
import FormDetailBot from "../../components/formDetailBot/FormDetailBot";
import FormDetailTop from "../../components/formDetailTop/FormDetailTop";
import { getAdminDetails } from "../../actions/userActions";
import { useEffect } from "react";
import { getResponses } from "../../actions/formActions";

const FormDetail = () => {
  const { sideDisabled } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const adminToken = window.localStorage.getItem('adminToken');
  const adminDetails = JSON.parse(window.localStorage.getItem("adminDetails"));
  useEffect(() => {
    dispatch(getAdminDetails(adminToken));
    dispatch(getResponses(adminDetails.formId, adminToken));
  }, [dispatch, adminToken, adminDetails.formId]);
  
  return (
    <>
      <Sidebar />
      <div
        className="FormDetail"
        style={{
          width: !sideDisabled ? "calc(100vw - 240px)" : "calc(100vw - 70px)",
        }}
      >
        <FormDetailTop formId={adminDetails.formId} />
        <FormDetailBot />
        <h1>Please View on a Desktop for better a experience</h1>
      </div>
    </>
  );
};

export default FormDetail;
