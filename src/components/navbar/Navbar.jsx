import {useState} from 'react';
import './Navbar.scss';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
      <div className='container'>
        <div className='left'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png?20190206123158'
            alt='Netflix logo'
          />
          <span>Inicio</span>
          <span>Series TV</span>
          <span>Películas</span>
          <span>Novedades más vistas</span>
          <span>Mi lista</span>
        </div>
        <div className='right'>
          <i className='bx bx-search' />
          <i className='bx bxs-bell' />
          <img
            src='https://i.pinimg.com/236x/09/22/68/0922688f238b9d800ccc911326772d8b.jpg'
            alt='Profile pic'
          />
          <i className='bx bxs-down-arrow' />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
