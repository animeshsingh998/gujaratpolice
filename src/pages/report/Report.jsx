import ChartInfo from "../../components/chartInfo/ChartInfo";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import "./Report.css";

const Report = () => {
  const handlePdf = () => {
    const divToDisplay = document.getElementById("Report-wrapper");
      html2canvas(divToDisplay, { logging: true, letterSpacing: 1, useCORS: true }).then(function (canvas) {
          const imgWidth = 208;
          const imgHeight = canvas.height * imgWidth / canvas.width;

      const divImage = canvas.toDataURL("image/png");
      const pdf = new jsPDF('p',"px", "a4");
      pdf.addImage(divImage, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("download.pdf");
    });
  };
  return (
    <div className="Report-wrapper" id="Report-wrapper">
      <div className="repChrt repChrt1">
        <div className="asdaw">
          <ChartInfo
            name="How quick did your Police Station respond"
            labels={[
              "More than 15 Minutes",
              "Immediately",
              "10 Minutes",
              "15 Minutes",
              "5 Minutes",
            ]}
            dataVal={[1, 1, 1, 1, 1]}
          />
        </div>
        <div className="infoOne">
          <p>
            positive : The results of the algorithm analysis show that the
            department's response time is very quick, and the public is also
            proud and happy with the department's efforts to ensure the safety
            of the neighborhood. And neutral : The results of the algorithm
            analysis show that the department's response time is very quick, and
            the public is also content with the department's efforts to ensure
            the safety of the neighborhood.
          </p>
        </div>
      </div>
      <div className="repChrt repChrt2">
        <div className="asdaw">
          <ChartInfo
            name="How quick did your Police Station respond"
            labels={[
              "More than 15 Minutes",
              "Immediately",
              "10 Minutes",
              "15 Minutes",
              "5 Minutes",
            ]}
            dataVal={[1, 1, 1, 1, 1]}
          />
        </div>
        <div className="infoOne">
          <p>
            positive : The results of the algorithm analysis show that the
            department's response time is very quick, and the public is also
            proud and happy with the department's efforts to ensure the safety
            of the neighborhood. And neutral : The results of the algorithm
            analysis show that the department's response time is very quick, and
            the public is also content with the department's efforts to ensure
            the safety of the neighborhood.
          </p>
        </div>
      </div>
      <button onClick={handlePdf}>downloadd</button>
    </div>
  );
};

export default Report;
