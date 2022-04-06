import { useRef, useState } from "react";
import Controls from "./components/Controls";
import style from './style.module.scss';

const Player = () => {
  const [videoWidth, setVideoWidth] = useState('40%')

  const video = useRef(null)

  const setTheaterMode = () => setVideoWidth(videoWidth === '40%' ? '100%': '40%')

  return (
    <div className={style.player}> 
      <video ref={video} width='100%'>
        <source id='mp4' src="http://media.w3.org/2010/05/sintel/trailer.mp4" type='video/mp4' />
        <source id='webm' src="http://media.w3.org/2010/05/sintel/trailer.webm" type='video/webm' />
        <source id='ogv' src="http://media.w3.org/2010/05/sintel/trailer.ogv" type='video/ogg' />
        <track kind="subtitles" label="English subtitles" src="subtitles_en.vtt" srcLang="en" default></track>
        <track kind="subtitles" label="Deutsche Untertitel" src="subtitles_de.vtt" srcLang="de"></track>
      </video>
      <Controls
        video={video}
        setTheaterMode={setTheaterMode}
      />
    </div>
  )
}

export default Player
