import style from './style.module.scss'

const Controls = ({video, setTheaterMode}) => {
  const videoElement = video.current

  const onPlay = () => videoElement.play();
  const onPause = () => videoElement.pause();
  const setFullScreen = () => videoElement.requestFullscreen();

  return (
    <div className={style.controls}>
      <button onClick={onPlay}>play</button>
      <button onClick={onPause}>pause</button>
      <button onClick={setTheaterMode}>Theater Mode</button>
      <button onClick={setFullScreen}>Full Screen </button>
    </div>
  )
}


export default Controls