import "./ChartInfo.css";
import { Pie } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

const ChartInfo = ({ name, labels, dataVal }) => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Number of votes",
        data: dataVal,
        backgroundColor: [
          "rgba(255, 99, 132, 0.55)",
          "rgba(54, 162, 235, 0.55)",
          "rgba(255, 206, 86, 0.55)",
          "rgba(75, 192, 192, 0.4)",
          "rgba(153, 102, 255, 0.4)",
          "rgba(255, 159, 64, 0.4)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="Chartinfo">
      <div className="chart-details">
        <span>{name}: </span>
        {/* <span>{value}</span> */}
          </div>
          <div className="chartPic">
              <Doughnut data={chartData} />
          </div>
    </div>
  );
};

export default ChartInfo;
