import { useSelector } from 'react-redux';
import style from './style.module.scss';
import Item from './components/Item/Item';

const PlayList = () => {
  const playerList = useSelector(state => state.playerList);

  return (
    <ul className={style.container}>
      {playerList.map(item => <Item key={item.src} data={item}/>)}
    </ul>
  );
};

export default PlayList;
