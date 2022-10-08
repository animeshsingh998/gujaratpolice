import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { submitFeedback } from "../../actions/formActions";
import "./FormViewStat.css";

const FormViewStat = () => {
  const { stage } = useSelector(state => state.form);

  return (
    <div className="FormViewStat-wrapper">
      <Helmet>
        <title>Gujrat Police | Feedback Form</title>
      </Helmet>
      {stage === "one" ? <FeedbackForm /> : <TyMsg />}
    </div>
  );
};

const FeedbackForm = () => {
  const dispatch = useDispatch();
  const { formId } = useParams();
  const [formData, setFormData] = useState({ Q1: "", Q2: "", Q3: "" });
  const token = window.localStorage.getItem("token");
    const [lang, setLang] = useState("EN");

  useEffect(() => {
    const engEl = document.querySelector(".eng");
    const gujEl = document.querySelector(".guj");
    if (lang === "EN") {
      engEl.classList.add("lSelected")
      gujEl.classList.remove("lSelected");
    } else {
      gujEl.classList.add("lSelected");
      engEl.classList.remove("lSelected")
    }
  },[lang])

  const handleChange = (e) => {
    setFormData({ ...formData, [`${e.target.name}`]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(submitFeedback(formId, formData, token));
  };

  return (
    <form className="FormViewStat" onSubmit={handleSubmit}>
      <div className="langSel">
        <div
          className="eng lSelected"
          onClick={() => {
            setLang("EN");
          }}
        >
          <h2>EN</h2>
        </div>
        <div
          className="guj"
          onClick={() => {
            setLang("GUJ");
          }}
        >
          <h2>ગુજ</h2>
        </div>
      </div>
      <p>
        {lang === "EN"
          ? "Welcome to the Feedback form for Gujarat Police. We are Collecting the feedback for improving the overall service of all Police Stations."
          : "ગુજરાત પોલીસ માટે ફીડબેક ફોર્મમાં આપનું સ્વાગત છે. અમે તમામ પોલીસ સ્ટેશનોની એકંદર સેવા સુધારવા માટે પ્રતિસાદ એકત્રિત કરી રહ્યા છીએ."}
      </p>
      <div className="radio">
        <h3>
          {lang === "EN"
            ? "1. How did you come to the police station?"
            : "1. તમે પોલીસ સ્ટેશન કેવી રીતે આવ્યા?"}
        </h3>
        <div className="optn">
          <input
            type="radio"
            name="Q1"
            id="q1r1"
            value="Through a person known to a police officer"
            required
            onChange={handleChange}
          />
          <label htmlFor="q1r1">
            {lang === "EN"
              ? "Through a person known to a police officer"
              : "પોલીસ અધિકારીને ઓળખતી વ્યક્તિ દ્વારા"}
          </label>
        </div>
        <div className="optn">
          <input
            type="radio"
            name="Q1"
            id="q1r2"
            value="With a neighbour local leader"
            required
            onChange={handleChange}
          />
          <label htmlFor="q1r2">
            {lang === "EN"
              ? "With a neighbour local leader"
              : "પાડોશી/સ્થાનિક નેતા સાથે"}
          </label>
        </div>
        <div className="optn">
          <input
            type="radio"
            name="Q1"
            id="q1r3"
            value="On your own"
            required
            onChange={handleChange}
          />
          <label htmlFor="q1r3">
            {lang === "EN" ? "On your own" : "તમારા પોતાના દ્વારા"}
          </label>
        </div>
      </div>
      <div className="radio">
        <h3>
          {lang === "EN"
            ? "2. After how much time you were heard in Police Station?"
            : "2. કેટલા સમય પછી તમને પીએસમાં સાંભળવામાં આવ્યું?"}
        </h3>
        <div className="optn">
          <input
            type="radio"
            name="Q2"
            id="q2r1"
            value="More than 15 minutes"
            required
            onChange={handleChange}
          />
          <label htmlFor="q2r1">
            {lang === "EN" ? "More than 15 minutes" : "15 મિનિટથી વધુ"}
          </label>
        </div>
        <div className="optn">
          <input
            type="radio"
            name="Q2"
            id="q2r2"
            value="15 minutes"
            required
            onChange={handleChange}
          />
          <label htmlFor="q2r2">
            {lang === "EN" ? "15 minutes" : "15 મિનિટ"}
          </label>
        </div>
        <div className="optn">
          <input
            type="radio"
            name="Q2"
            id="q2r3"
            value="10 minutes"
            required
            onChange={handleChange}
          />
          <label htmlFor="q2r3">
            {lang === "EN" ? "10 minutes" : "10 મિનિટ"}
          </label>
        </div>
        <div className="optn">
          <input
            type="radio"
            name="Q2"
            id="q2r4"
            value="5 minutes"
            required
            onChange={handleChange}
          />
          <label htmlFor="q2r4">
            {lang === "EN" ? "5 minutes" : "5 મિનિટ"}
          </label>
        </div>
        <div className="optn">
          <input
            type="radio"
            name="Q2"
            id="q2r5"
            value="Immediately"
            required
            onChange={handleChange}
          />
          <label htmlFor="q2r5">
            {lang === "EN" ? "Immediately" : "તરત જ"}
          </label>
        </div>
      </div>
      <div className="fedback">
        <h3>
          {lang === "EN"
            ? "3. How would you describe your experience with police officers in the police station?"
            : "3. પોલીસ સ્ટેશનમાં પોલીસ અધિકારીઓ સાથેના તમારા અનુભવનું તમે કેવી રીતે વર્ણન કરશો?"}
        </h3>
        <textarea
          name="Q3"
          id="q3"
          cols="30"
          rows="10"
          placeholder={lang === "EN" ? "Feedback" : "પ્રતિસાદ"}
          onChange={handleChange}
          maxLength="300"
        ></textarea>
      </div>
      <button type="submit" className="btn subBtn">
        {lang === "EN" ? "Submit" : "સબમિટ કરો"}
      </button>
    </form>
  );
};

const TyMsg = () => {
  return (
    <div className="Tymsg">
      <h1>Thank You for your valuable Feedback</h1>
      <h2>
        <a
          href="https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en_US&gl=US"
          target="_blank"
          rel="noreferrer"
        >
          Click Here
        </a>
        to download the Citizen App for Android
      </h2>
      <div className="tyInfo">
        <span>Police Station: </span>
        <span>Sanand</span>
      </div>
      <div className="tyInfo">
        <span>Phone Number: </span>
        <span>23321312321</span>
      </div>
      <h4>For any help or complaint, please contact on the given Phone number according to your local police station.</h4>
    </div>
  );
}

export default FormViewStat;
