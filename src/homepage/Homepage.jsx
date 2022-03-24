import Featured from '../components/featured/Featured';
import Navbar from '../components/navbar/Navbar';
import List from '../components/list/List';
import './Homepage.scss';

const Homepage = () => {
  return (
    <div className='home'>
      <Navbar />
      <Featured />
      <List />
      <List />
      <List />
    </div>
  );
};

export default Homepage;
