import React, { useEffect } from "react";
import "./formDetailTop.css";
// import Base64Downloader from "react-base64-downloader";
import { triggerBase64Download } from "common-base64-downloader-react";
import { useDispatch, useSelector } from "react-redux";
import { genQr, getCsvData } from "../../actions/formActions";
import { CSVLink } from "react-csv";

const FormDetailTop = ({formId}) => {
  const dispatch = useDispatch();
  const { qrCode, csvData } = useSelector((state) => state.form);
  const { adminDetails } = useSelector((state) => state.user);

  const handleDwn = () => {
    const base64 = `data:image/png;base64,${qrCode}`;
    triggerBase64Download(base64, "QRCode");
  }
  
  const adminToken = window.localStorage.getItem("adminToken");
  useEffect(() => {
    adminDetails && dispatch(getCsvData(adminDetails.formId, adminToken))
  }, [dispatch, adminDetails, adminToken]);

  const csvData1 = [];
  
  useEffect(() => {
    dispatch(genQr(formId));
  },[dispatch, formId])

  return (
    <div className="formDetailTop">
      <button onClick={handleDwn} className='grnQrBtn'>Generate QR</button>
      <CSVLink
        data={csvData ? csvData : csvData1}
        filename={"Responses"}
        target="_blank"
        className="repBtn"
      >
        Excel Sheet
      </CSVLink>
      <div className="totalResp">
        <span>Total Responses: </span>
        <span>{adminDetails ? adminDetails.resp_count : "Loading.."}</span>
      </div>
    </div>
  );
};

export default FormDetailTop;
