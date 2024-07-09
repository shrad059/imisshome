import React, {useState} from 'react'
import './AudioSlider.scss'
import VolumeUp from '@mui/icons-material/VolumeUp';
import Slider,{ SliderThumb } from '@mui/material/Slider'

// props: id, sound, title, volume
function AudioSlider(soundEffect) {
  const [sliderValue, setValue] = useState(0);

  const handleChange = (e, newVal) => {
    setValue(newVal);
    var audio = document.getElementById(soundEffect.id);
    audio.play();
    audio.volume = parseFloat(newVal);
    audio.autoplay=""
  };

  return (
    <div>
      <h2 className="sliderTitle">{soundEffect.title}</h2>
      <div className="divAudio">
      <VolumeUp className='volumeUp'/>
      <Slider className="Slider"
        size="small"
        value = { sliderValue } 
        step = { 0.1 }
        min={ 0.0 }
        max = { 1.0 }
        onChange={handleChange} 
      />
      </div>
      <audio loop id={soundEffect.id} src={soundEffect.sound}></audio>
    </div>
  );
}

export default AudioSlider;