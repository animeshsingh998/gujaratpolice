import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getFormView, submitFeedback } from "../../actions/formActions";
import "./FormView.css";

const FormView = () => {
  const dispatch = useDispatch();
  const { formView } = useSelector((state) => state.form);
  const { formId } = useParams();
  const [formData, setFormData] = useState({});
  // const { token } = useSelector(state => state.user);
  const token = window.localStorage.getItem('token');
  useEffect(() => {
    dispatch(getFormView(formId, token));
  }, [dispatch, formId, token]);
  const handleChange = (e) => {
    setFormData({ ...formData, [`${e.target.name}`]: e.target.value });
  };
    // useEffect(() => {
    //   formView && formView.forEach((item) => {
    //     if (item.eleType === "MCQ") {
    //         setFormData({ ...formData, [item.name]: item.value });
    //     }
    //   });
    // }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    // let rewD = {}
    // formData.forEach((item) => {
    // })
    dispatch(submitFeedback(formData, token));
    window.alert("Your feedback has been submitted.")
  }
  return (
    <div className="FormView-wrapper">
      <div className="FormView">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
          sint ipsam doloremque tempore, obcaecati temporibus magni corporis
          ducimus facilis quisquam suscipit velit culpa eius sed repellat facere
          laborum est et ut. Harum!
        </p>
        <form className="formViewForm" onSubmit={handleSubmit}>
          {formView &&
            formView.length > 0 &&
            formView.map(
              (ques, index) =>
                (ques.eleType === "MCQ" && (
                  <div className="radioDiv" key={ques.elementId}>
                    <label
                      htmlFor={ques.elementId}
                      key={ques.elementId + `${index}k9`}
                    >
                      {`${index + 1}. ${ques.eleQuestion}`}
                    </label>
                    {ques.eleAnswer.map((option, index) => (
                      <div
                        className="optns"
                        key={ques.elementId + `k2${index}`}
                      >
                        <input
                          type="radio"
                          name={ques.elementId}
                          id={ques.elementId + `${index}`}
                          value={option}
                          key={ques.elementId + `${index}l90`}
                          className="optn"
                          onChange={handleChange}
                          required
                        />
                        <label
                          htmlFor={ques.elementId + `${index}`}
                          style={{ fontSize: "13px", fontWeight: "500" }}
                          key={ques.elementId + `da2${index}`}
                        >
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>
                )) ||
                (ques.eleType === "Text" && (
                  <>
                    <label
                      htmlFor={ques.elementId}
                      key={ques.elementId + `b20${index}`}
                    >{`${index + 1}. ${ques.eleQuestion}`}</label>
                    <input
                      type="text"
                      id={ques.elementId}
                      name={ques.elementId}
                      key={ques.elementId + `kk${index}`}
                      className="frmInp"
                      onChange={handleChange}
                      autoComplete="off"
                      required
                    />
                  </>
                ))
            )}
          <button type="submit" className="subBtn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormView;
