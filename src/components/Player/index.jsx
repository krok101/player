import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import Controls from "./components/Controls";
import style from './style.module.scss';

const Player = () => {
  const [isPlay, setIsPlay] = useState(false);
  const [isFullscreen, setFullscreen] = useState(false)
  const [theaterMode, setTheaterMode] = useState(false);
  const configVideo = useSelector(state => state.configVideo)

  const video = useRef(null)

  if (configVideo.src) {
    if (video.current.getAttribute('src') !== configVideo.src) {
      video.current.setAttribute('src', configVideo.src);
      video.current.setAttribute('autoplay', 'autoplay');
      // обработка окончания видео
      video.current.addEventListener('ended', (event) => {
        setIsPlay(false);
      });
      setIsPlay(true);
    }
  }

  const clickOnPlayPause = () => {
    if (isPlay) {
      video.current.pause();
    } else {
      video.current.play();
    }
    setIsPlay(!isPlay)
  }

  const clickOnTheaterMode = () => {
    setTheaterMode(!theaterMode)
  }

  const clickOnFullScreen = () => {
    video.current.requestFullscreen();
    setFullscreen(!isFullscreen)
  }


  return (
    <div className={`${style.player} ${theaterMode ? style.theaterMode: null}`}> 
      <div className={style.videoContainer}>
        <video ref={video} width='100%'></video>
        <h2 className={style.videoLabel}>{configVideo.name}</h2>
      </div>
      <Controls
        dataPlay = {{state: isPlay, action: clickOnPlayPause}}
        dataFullscreen = {{state: isFullscreen, action: clickOnFullScreen}}
        dataTheaterMode = {{state: theaterMode, action: clickOnTheaterMode}}
      />
    </div>
  )
}

export default Player
