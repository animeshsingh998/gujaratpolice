import "./dashTop.css";
import noProfile from "../../../assets/images/noprofile.jpg";

const DashTop = ({adminDetails}) => {
  return (
    <div className="dashTop">
      <div className="topLeft">
        <div className="adminLogo">
          <img src={noProfile} alt="admin" />
        </div>
        <div className="adminDetails">
          <span>{adminDetails ? adminDetails.adminName : "Loading.."}</span>
          <span>{adminDetails ? adminDetails.adminEmail : "Loading.."}</span>
        </div>
      </div>
      <div className="topRight">
        <div className="detailInfo">
          <span>Police Station:</span>
          <span>{adminDetails ? adminDetails.PoliceStation : "Loading.."}</span>
        </div>
        <div className="detailInfo">
          <span>Sub Division:</span>
          <span>{adminDetails ? adminDetails.SubDivision : "Loading.."}</span>
        </div>
        <div className="detailInfo">
          <span>District:</span>
          <span>{adminDetails ? adminDetails.District : "Loading.."}</span>
        </div>
        <div className="detailInfo">
          <span>Total Responses:</span>
          <span>{adminDetails ? adminDetails.resp_count : "Loading.."}</span>
        </div>
      </div>
    </div>
  );
};

export default DashTop;
