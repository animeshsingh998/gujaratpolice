import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createForm, getAllForms } from "../../actions/formActions";
import "./CreateForm.css";
import loader from "../../assets/images/loader.gif";
import { useEffect } from "react";

const CreateForm = () => {
  const dispatch = useDispatch();
  const { createFormLoading, formMessage } = useSelector((state) => state.form);
  const [crtFm, setCrtFm] = useState({ formName: "" });
  const [timer, setTimer] = useState(0);
  const handleChange = (e) => {
    setCrtFm({ ...crtFm, [e.target.name]: e.target.value });
  };
  const newT = window.localStorage.getItem("adminToken");
  const handleCreateForm = async (e) => {
    e.preventDefault();
    await dispatch(createForm(crtFm.formName));
    dispatch(getAllForms(newT));
  };
  useEffect(() => {
    setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
  }, []);

  return (
    <div className="Createform-wrapper">
      <h1>Create new Form</h1>
      <form className="createForm" onSubmit={handleCreateForm}>
        <input
          type="text"
          name="formName"
          placeholder="Form name"
          id="formName"
          onChange={handleChange}
          autoComplete="off"
        />
        <button type="submit" className="btn crtFm-btn">
          {createFormLoading ? (
            <img src={loader} alt="loading" className="btnLoader" />
          ) : (
            "Create"
          )}
        </button>
      </form>
      {timer > 0 && <h4 className="crtFmMsg">{formMessage}</h4>}
    </div>
  );
};

export default CreateForm;
