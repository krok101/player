import style from './style.module.scss'
import PlayIcon from '../../../assets/icons/play.svg'
import PauseIcon from '../../../assets/icons/pause.svg'
import fullscreenExit from '../../../assets/icons/fullscreen_exit.svg'
import Fullscreen from '../../../assets/icons/fullscreen.svg'
import WidthWide from '../../../assets/icons/width_wide.svg'
import { useState } from 'react'

const Controls = ({video, setTheaterMode}) => {
  const [isPlay, setIsPlay] = useState(false);
  const [isFullscreen, setFullscreen] = useState(false)

  const onPlay = () => {
    console.log('videoElement:', video)
    video.current.play()
    setIsPlay(!isPlay)
  }
  const onPause = () => {
    console.log('videoElement:', video)
    video.current.pause()
    setIsPlay(!isPlay)
  }

  const setFullScreen = () => {
    video.current.requestFullscreen();
    setFullscreen(isFullscreen)
  }

  return (
    <div className={style.controls}>
      <img className={`${style.play} ${style.icon}`}
        src={isPlay ? PauseIcon : PlayIcon}
        onClick={isPlay ? onPause : onPlay}
        alt='play/pause'
      />
      <img className={`${style.fullscreen} ${style.icon}`}
        src={isFullscreen ? fullscreenExit : Fullscreen}
        onClick={setFullScreen} alt='fullscreen'
      />
      <img className={`${style.theaterMode} ${style.icon}`}
        src={WidthWide}
        onClick={setTheaterMode}
        alt='Theater Mode'
      />
    </div>
  )
}


export default Controls