import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import Controls from "./components/Controls";
import style from './style.module.scss';

const Player = () => {
  const [isPlay, setIsPlay] = useState(false);
  const [isFullscreen, setFullscreen] = useState(false);
  const [theaterMode, setTheaterMode] = useState(false);
  const [progress, setProgerss] = useState('0%');
  const configVideo = useSelector(state => state.configVideo);

  const video = useRef(null);

  if (configVideo.src) {
    if (video.current.getAttribute('src') !== configVideo.src) {
      video.current.setAttribute('src', configVideo.src);
      video.current.setAttribute('autoplay', 'autoplay');
      setIsPlay(true);
    }
  }

  const clickOnPlayPause = () => {
    if (isPlay) {
      video.current.pause();
    } else {
      video.current.play();
    }
    setIsPlay(!isPlay);
  };

  const clickOnTheaterMode = () => {
    setTheaterMode(!theaterMode);
  };

  const clickOnFullScreen = () => {
    video.current.requestFullscreen();
    setFullscreen(!isFullscreen);
  };

  const onEndedVideo = () => {
    setIsPlay(false);
  }

  const onTimeUpdate = (event) => {
    const {currentTime, duration} = event.target
    setProgerss(`${currentTime / duration * 100 }%`)
  }

  return (
    <div className={`${style.player} ${theaterMode ? style.theaterMode: null}`}> 
      <div className={style.videoContainer}>
        <video ref={video} width='100%' onEnded={onEndedVideo} onTimeUpdate={onTimeUpdate} />
        <h2 className={style.videoLabel}>{configVideo.name}</h2>
      </div>
      <Controls
        dataPlay = {{state: isPlay, action: clickOnPlayPause}}
        dataFullscreen = {{state: isFullscreen, action: clickOnFullScreen}}
        dataTheaterMode = {{state: theaterMode, action: clickOnTheaterMode}}
        progress={progress}
      />
    </div>
  );
};

export default Player;
