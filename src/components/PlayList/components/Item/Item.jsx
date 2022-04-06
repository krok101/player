import style from './style.module.scss'

const Item = ({ data }) => {
  const { name } = data;

  return (
    <li className={style.container}>
      {name}
    </li>
  )
}

export default Item