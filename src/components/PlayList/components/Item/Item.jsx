import { useDispatch } from 'react-redux'
import { setConfigVideo } from '../../../../store/actions'
import style from './style.module.scss'

const Item = ({ data }) => {
  const dispatch = useDispatch()

  const onClick = () => {
    console.log('click');
    dispatch(setConfigVideo({src: data.src, name: data.name}))
  }

  return (
    <li onClick={onClick} className={style.container}>
      <img className={style.preview} src={data.previewImgSrc} alt='preview' />
      <label className={style.label}>{data.name}</label>
    </li>
  )
}

export default Item