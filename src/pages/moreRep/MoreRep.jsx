import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../../components/sidebar/Sidebar";
import "./MoreRep.css";
import { useEffect, useState } from "react";
import { getDisWise, getSemtiments, getSubWise } from "../../actions/userActions";

const MoreRep = () => {
  const { sideDisabled, sentiments, adminDetails, disWise, subWise } =
    useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [mrVal, setMrVal] = useState("pol");
  const adminToken = window.localStorage.getItem("adminToken");
  useEffect(() => {
    dispatch(getSemtiments(adminToken));
    dispatch(getDisWise(adminToken));
    dispatch(getSubWise(adminToken));
  }, [dispatch]);
  // useEffect(() => {
  //   adminDetails && adminDetails.adminLevel === "Master" && (mrVal === "pol" &&
  //   dispatch(getSemtiments(adminToken)))
  // }, [dispatch, adminDetails, adminToken, mrVal]);

  return (
    <>
      <Sidebar />
      <div
        className="MoreRep"
        style={{
          width: !sideDisabled ? "calc(100vw - 240px)" : "calc(100vw - 70px)",
        }}
      >
        <div className="selectExt">
          {/* <Select options={options} onChange={(e)=>{setMrVal(e.target.textContent)} } /> */}
          <select
            onChange={(e) => {
              setMrVal(e.target.value);
            }}
          >
            <option value="pol">Police Station Wise</option>
            <option value="sub">Sub Division Wise</option>
            <option value="dis">District Wise</option>
          </select>
        </div>
        <main>
          <table>
            <thead>
              <tr className="tableHead">
                <th>
                  {(mrVal === "pol" && "Police Station") ||
                    (mrVal === "sub" && "Sub Division") ||
                    (mrVal === "dis" && "District")}
                </th>
                {mrVal === "pol" && <th>Created At</th>}
                <th>Response Count</th>
                <th>Response Score</th>
                <th>Sentiment</th>
                <th>Average Rate</th>
                {mrVal === "pol" && <th>Report</th>}
              </tr>
            </thead>
            {(mrVal === "pol" && (
              <tbody>
                {sentiments && sentiments.length > 0 ? (
                  sentiments.map(
                    (item, index) =>
                      index !== sentiments.length - 1 && (
                        <tr key={`${index + 11}`}>
                          <td key={`${index + 12}`}>{item.PoliceStation}</td>
                          <td key={`${index + 13}`}>{item.createdAt}</td>
                          <td key={`${index + 14}`}>{item.respCount}</td>
                          <td key={`${index + 15}`}>
                            {item.resp_score.toString().slice(0, 4)}
                          </td>
                          <td key={`${index + 16}`}>
                            {item.sentiment.toString().slice(0, 4)}
                          </td>
                          <td key={`${index + 17}`}>
                            {item.AverageScore.toString().slice(0, 4)}
                          </td>
                          {/* <td><h3 onClick={downPdf} className="downPdf">report</h3></td> */}
                          <td key={`${index + 18}`}>
                            {/* <Base64Downloader
                              base64={report}
                              downloadName="Report"
                              className="downPdf"
                            >
                              Report
                            </Base64Downloader> */}
                            report
                          </td>
                        </tr>
                      )
                  )
                ) : (
                  <tr>
                    <td>No datadwwa</td>
                  </tr>
                )}
              </tbody>
            )) ||
              (mrVal === "sub" && (
                <tbody>
                  {subWise && subWise.length > 0 ? (
                    subWise.map((item, index) => (
                      <tr key={`${index + 11}`}>
                        <td key={`${index + 12}`}>{item.SubDivision}</td>
                        <td key={`${index + 14}`}>{item.respCount}</td>
                        <td key={`${index + 15}`}>
                          {item.resp_score.toString().slice(0, 4)}
                        </td>
                        <td key={`${index + 16}`}>
                          {item.Sentiment.toString().slice(0, 4)}
                        </td>
                        <td key={`${index + 17}`}>
                          {item.AverageScore.toString().slice(0, 4)}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td>No datadwwa</td>
                    </tr>
                  )}
                </tbody>
              )) || (
                <tbody>
                  {disWise && disWise.length > 0 ? (
                    disWise.map((item, index) => (
                      <tr key={`${index + 11}`}>
                        <td key={`${index + 12}`}>{item.District}</td>
                        <td key={`${index + 14}`}>{item.respCount.toString().slice(0,4)}</td>
                        <td key={`${index + 15}`}>
                          {item.resp_score.toString().slice(0, 4)}
                        </td>
                        <td key={`${index + 16}`}>
                          {item.Sentiment.toString().slice(0, 4)}
                        </td>
                        <td key={`${index + 17}`}>
                          {item.AverageScore.toString().slice(0, 4)}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td>No datadwwa</td>
                    </tr>
                  )}
                </tbody>
              )}
          </table>
        </main>
      </div>
    </>
  );
};

export default MoreRep;
