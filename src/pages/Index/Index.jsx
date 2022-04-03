import { useSelector, useDispatch } from 'react-redux'
import { useCallback } from 'react';
import { setValue } from '../../store/actions';

const Index = () => {
  const value = useSelector((state) => state.value)
  const dispatch = useDispatch();

  const increment = useCallback(() => {
    dispatch(setValue(value + 1));
  }, [dispatch, value]);

  const decrement = useCallback(() => {
    dispatch(setValue(value - 1));
  }, [dispatch, value]);


  return (
    <>
      <div>{value}</div>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </>

  )
}

export default Index