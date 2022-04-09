import style from './style.module.scss';
import PlayIcon from '../../../assets/icons/play.svg';
import PauseIcon from '../../../assets/icons/pause.svg';
import fullscreenExit from '../../../assets/icons/fullscreen_exit.svg';
import Fullscreen from '../../../assets/icons/fullscreen.svg';
import WidthWide from '../../../assets/icons/width_wide.svg';

const Controls = ({dataPlay, dataTheaterMode, dataFullscreen}) => (
  <div className={style.controls}>
    <img className={`${style.play} ${style.icon}`}
      src={dataPlay.state ? PauseIcon : PlayIcon}
      onClick={dataPlay.action}
      alt='play/pause'
    />
    <img className={`${style.fullscreen} ${style.icon}`}
      src={dataFullscreen.state ? fullscreenExit : Fullscreen}
      onClick={dataFullscreen.action} alt='fullscreen'
    />
    <img className={`${style.theaterMode} ${style.icon} ${dataTheaterMode.state ? style.offWideMode : ''}`}
      src={WidthWide}
      onClick={dataTheaterMode.action}
      alt='Theater Mode'
    />
  </div>
);

export default Controls;
