import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {setPlayerList} from '../../store/actions';
import { Player, PlayList } from '../../components';
import style from './style.module.scss';
import data from './mock';

const Index = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // запрос к данным плеера
    setTimeout(() => {
      dispatch(setPlayerList(data))
    }, 1000);
  });

  return (
    <div className={style.container}>
      <Player/>
      <PlayList/>
    </div>
  );
};

export default Index;