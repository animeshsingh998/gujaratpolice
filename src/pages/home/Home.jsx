import Dashboard from '../../components/dashboard/Dashboard';
import Sidebar from '../../components/sidebar/Sidebar';
import './Home.css'

const Home = () => {
  return (
    <div className="Home">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default Home