import './List.scss';
import ListItem from '../listItem/ListItem';

const List = () => {
  return (
    <div className='list'>
      <span>Estrenos</span>
      <div className='wrapper'>
        <i className='bx bx-chevron-left bx-flip-vertical'></i>
        <div className='container'>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </div>
        <i className='bx bx-chevron-right bx-flip-vertical'></i>
      </div>
    </div>
  );
};

export default List;
