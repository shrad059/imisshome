import React, { useState } from 'react';
import './Home.scss';
import india from '../../assets/india.png';
import AudioSlider from '../AudioSlider/AudioSlider';
import { sounds } from '../../constants';
import CommonNinjaWidget from './ElfSightWidget'; // Import the new component

const Home = () => {
  // Initial state for sound selection
  const [selectedSound, setSelectedSound] = useState(sounds.endless);

  // Function to handle sound selection change
  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedSound(selectedValue);
  };

  return (
    <div className="Home">
      <div className="image-div">
        <img src={india} alt="India" />
      </div>
      <div className="volume-controllers">
        <div>
          <AudioSlider
            className="audioslider"
            title="Restaurant"
            sound={sounds.restaurant}
            id="restaurantSound"
          />
        </div>
        <div>
          <AudioSlider
            className="audioslider"
            title="Talking"
            sound={sounds.talking}
            id="talkingSound"
          />
        </div>
        <div>
          <AudioSlider
            className="audioslider"
            title="Making Chai"
            sound={sounds.chai}
            id="chaiSound"
          />
        </div>
        <div>
          <AudioSlider
            className="audioslider"
            title="Bangles"
            sound={sounds.bangles}
            id="banglesSound"
          />
        </div>
        <div>
          <AudioSlider
            className="audioslider"
            title="Train"
            sound={sounds.train}
            id="trainSound"
          />
        </div>
        <div>
          <AudioSlider
            className="audioslider"
            title="Chai Wala"
            sound={sounds.noise}
            id="noiseSound"
          />
        </div>
        <div>
          <AudioSlider
            className="audioslider"
            title="Rain"
            sound={sounds.rain}
            id="rainSound"
          />
        </div>
        <div>
          <AudioSlider
            className="audioslider"
            title="Sunny Day"
            sound={sounds.music}
            id="musicSound"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
