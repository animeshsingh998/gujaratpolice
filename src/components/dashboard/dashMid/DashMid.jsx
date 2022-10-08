import ChartInfo from '../../chartInfo/ChartInfo'
import './dashMid.css'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getChartData, getChartDataO } from '../../../actions/formActions';

const DashMid = ({ adminDetails }) => {
  const dispatch = useDispatch();
  const adminToken = window.localStorage.getItem("adminToken");
  const { chartData, chartDataO } = useSelector(state => state.form);
  useEffect(() => {
    dispatch(getChartData("getchartsdataq2", adminDetails.formId, adminToken))
    dispatch(getChartDataO("getchartsdataq1", adminDetails.formId, adminToken))
  }, [dispatch, adminDetails.formId, adminToken]);

  return (
    <div className="dashMid">
      <ChartInfo
        name="How quick did your Police Station respond"
        labels={[
          "More than 15 Minutes",
          "Immediately",
          "10 Minutes",
          "15 Minutes",
          "5 Minutes",
        ]}
        dataVal={chartData}
      />
      <ChartInfo
        name="How did people come to your Police Staion"
        labels={[
          "Through a person known to a police officer",
          "With a neighbour/ local leader",
          "On your own",
        ]}
        dataVal={chartDataO}
      />
      {/* <BarGraph
        name="Total Responses"
        value={adminDetails ? adminDetails.RespCount : "Loading.."}
      /> */}
    </div>
  );
}

export default DashMid