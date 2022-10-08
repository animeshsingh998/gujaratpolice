import './FormDetailBot.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const FormDetailBot = () => {
  const { Responses } = useSelector(state => state.form);
  return (
    <div className="FormDetail-wrapper">
      <table>
        <thead>
          <tr className="tableHead">
            <th>UserID</th>
            <th>ResponseID</th>
            <th>ResponseAt</th>
            <th>Answers</th>
          </tr>
        </thead>
        <tbody>
          {Responses && Responses.length > 0 ? (
            Responses.map((item, index) => (
              <tr key={`${index + 2}`}>
                <td key={`${index + 23}`}>{item[index].userId}</td>
                <td key={`${index + 255}`}>Yet</td>
                <td key={`${index + 28}`}>Yet</td>
                <td key={`${index + 88}`}>
                  <Link to={`/${item[index].userId}/detail`}>View Answers</Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No data to fetch</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default FormDetailBot