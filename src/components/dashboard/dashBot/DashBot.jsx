import ChartInfo from '../../chartInfo/ChartInfo';
import chart1 from "../../../assets/images/chart1.png";
import chart2 from "../../../assets/images/chart2.png";
import './dashBot.css'

const DashBot = () => {
  return (
    <div className="dashBot">
      <ChartInfo name="Total Feedback" value="556" chart={chart2}/>
      <ChartInfo name="Total Workers" value="97" chart={chart1}/>
    </div>
  );
}

export default DashBot