import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMChartData, getMChartDataO, getSemtiments } from "../../../actions/userActions";
import Base64Downloader from "common-base64-downloader-react";
import ChartInfo from '../../chartInfo/ChartInfo';
// import html2canvas from "html2canvas";
// import { jsPDF } from "jspdf";
import "./MDashMid.css";

const MDashMid = () => {
  const dispatch = useDispatch();
  const { sentiments, adminDetails, MchartDataO, MchartData } = useSelector((state) => state.user);
  const adminToken = window.localStorage.getItem("adminToken");
  useEffect(() => {
    adminDetails &&
      adminDetails.adminLevel === "Master" &&
      dispatch(getSemtiments(adminToken));
  }, [dispatch, adminDetails, adminToken]);
  const report = `data:application/pdf;base64,JVBERi0xLjcKCjEgMCBvYmogICUgZW50cnkgcG9pbnQKPDwKICAvVHlwZSAvQ2F0YWxvZwogIC9QYWdlcyAyIDAgUgo+PgplbmRvYmoKCjIgMCBvYmoKPDwKICAvVHlwZSAvUGFnZXMKICAvTWVkaWFCb3ggWyAwIDAgMjAwIDIwMCBdCiAgL0NvdW50IDEKICAvS2lkcyBbIDMgMCBSIF0KPj4KZW5kb2JqCgozIDAgb2JqCjw8CiAgL1R5cGUgL1BhZ2UKICAvUGFyZW50IDIgMCBSCiAgL1Jlc291cmNlcyA8PAogICAgL0ZvbnQgPDwKICAgICAgL0YxIDQgMCBSIAogICAgPj4KICA+PgogIC9Db250ZW50cyA1IDAgUgo+PgplbmRvYmoKCjQgMCBvYmoKPDwKICAvVHlwZSAvRm9udAogIC9TdWJ0eXBlIC9UeXBlMQogIC9CYXNlRm9udCAvVGltZXMtUm9tYW4KPj4KZW5kb2JqCgo1IDAgb2JqICAlIHBhZ2UgY29udGVudAo8PAogIC9MZW5ndGggNDQKPj4Kc3RyZWFtCkJUCjcwIDUwIFRECi9GMSAxMiBUZgooSGVsbG8sIHdvcmxkISkgVGoKRVQKZW5kc3RyZWFtCmVuZG9iagoKeHJlZgowIDYKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDEwIDAwMDAwIG4gCjAwMDAwMDAwNzkgMDAwMDAgbiAKMDAwMDAwMDE3MyAwMDAwMCBuIAowMDAwMDAwMzAxIDAwMDAwIG4gCjAwMDAwMDAzODAgMDAwMDAgbiAKdHJhaWxlcgo8PAogIC9TaXplIDYKICAvUm9vdCAxIDAgUgo+PgpzdGFydHhyZWYKNDkyCiUlRU9G`;

  // const downPdf = () => {
  //   const downloadLink = document.createElement("a");
  //   const fileName = "heheh.pdf";

  //   downloadLink.href = report;
  //   downloadLink.download = fileName;
  //   downloadLink.click();
  // };

  useEffect(() => {
    dispatch(getMChartData("getmasterdataq1", adminToken));
    dispatch(getMChartDataO("getmasterdataq2", adminToken));
  }, [dispatch, adminToken]);

  // const genRepMaster = () => {
  //   const divToDisplay = document.getElementById("dashCharts");
  //   html2canvas(divToDisplay).then(function (canvas) {
  //     const divImage = canvas.toDataURL("image/png");
  //     const pdf = new jsPDF();
  //     pdf.addImage(divImage, "PNG", 0, 0);
  //     pdf.save("download.pdf");
  //   });
  // }

  return (
    <div className="MdashMid">
      <div className="bestPs">
        <span>Police Station with Highest Ratings: </span>
        <span>
          {sentiments ? sentiments[sentiments.length - 1] : "Loading..."}
        </span>
      </div>
      <div className="dashCharts" id="dashCharts">
        <div className="dashChart">
          <ChartInfo
            name="How quick did Police Station respond"
            labels={[
              "More than 15 Minutes",
              "Immediately",
              "10 Minutes",
              "15 Minutes",
              "5 Minutes",
            ]}
            dataVal={MchartDataO}
          />
        </div>
        <div className="dashChart">
          <ChartInfo
            name="How did people come to Police Staion"
            labels={[
              "Through a person known to a police officer",
              "With a neighbour/ local leader",
              "On your own",
            ]}
            dataVal={MchartData}
          />
        </div>
      </div>
    </div>
  );
};

export default MDashMid;
