import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { delForm, genQr, getAllForms } from "../../actions/formActions";
import { Delete } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./AllForms.css";
import Base64Downloader from "react-base64-downloader";
import { formDetail } from "../../Data/fakeData";
import { CSVLink } from "react-csv";

const AllForms = () => {
  const dispatch = useDispatch();
  const { forms, qrCode } = useSelector((state) => state.form);
  // const { adminDetails } = useSelector((state) => state.user);
  const newT = window.localStorage.getItem("adminToken");
  useEffect(() => {
    dispatch(getAllForms(newT));
  }, [dispatch, newT]);
  const handleFrmDel = async (e, formId) => {
    e.preventDefault();
    if (window.confirm("Delete the form?")) {
      await dispatch(delForm(formId));
      dispatch(getAllForms(newT));
    }
  };
  const base64 = qrCode && `data:image/jpg;base64,${qrCode}`;
  const handleQr = (formId) => {
    dispatch(genQr(formId));
  };

  const csvData = [
    ["Name", "email"],
    ["Ansh", "anshu@gmail.com"]
  ]
  return (
    <div className="formsTable-wrapper">
      <table>
        <thead>
          <tr className="tableHead">
            <th>Sr no.</th>
            <th>Form Name</th>
            <th>Created At</th>
            <th>Details</th>
            <th>QR</th>
            <th>Report</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {forms && forms.length > 0 ? (
            forms.map((form, index) => (
              <tr key={form.formId}>
                <td>{index + 1}</td>
                <td>{form.formName}</td>
                <td>{form.DateCreated}</td>
                <td>
                  <Link to={`/form/${form.formId}`} className="viewFrmDetail">
                    View in Detail
                  </Link>
                </td>
                <td>
                  <Base64Downloader
                    base64={base64}
                    downloadName="Qr-Code"
                    className="heyo"
                  >
                    <button
                      className="grnQrBtn"
                      onClick={() => {
                        handleQr(form.formId);
                      }}
                    >
                      Generate QR
                    </button>
                  </Base64Downloader>
                </td>
                <td>
                  <CSVLink data={formDetail} filename={"Anshuu"} target="_blank" className="repBtn">
                    Excel Sheet
                  </CSVLink>
                </td>
                <td>
                  <button
                    className="frmDelBtn"
                    onClick={(e) => {
                      handleFrmDel(e, form.formId);
                    }}
                  >
                    <Delete style={{ color: "red" }} />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No forms yet, Create a new one above</td>
            </tr>
          )}
        </tbody>
      </table>
      <table id="pdfTest" style={{ display: "none" }}>
        <thead>
          <tr>
            <th>UserId</th>
            <th>ResponseId</th>
            <th>Question</th>
            <th>Answer</th>
            <th>Question</th>
            <th>Answer</th>
            <th>Question</th>
            <th>Answer</th>
            <th>ResponseAt</th>
          </tr>
        </thead>
        <tbody>
          {formDetail &&
            formDetail.map((item) => (
              <tr>
                <td>{item.userId}</td>
                <td>{item.responseId}</td>
                <td>{item.resQues1}</td>
                <td>{item.resAns1}</td>
                <td>{item.resQues2}</td>
                <td>{item.resAns2}</td>
                <td>{item.resQues3}</td>
                <td>{item.resAns3}</td>
                <td>{item.ResponseAt}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <div id="pdfBod" style={{ display: "none" }}>
        <h1>This is a testing body</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, nemo
          quas laudantium minus distinctio magni, esse delectus placeat dicta ab
          laboriosam harum quis inventore. Necessitatibus perferendis sit culpa
          porro?
        </p>
      </div>
    </div>
  );
};

export default AllForms;
