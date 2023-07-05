import React from 'react'

import ImageSlider, { Slide } from "react-auto-image-slider";

import img1 from './images/20191104061827_IMG_2880.JPG';
import img2 from './images/IMG_20221225_001248_887.jpg';
import img3 from './images/IMG_2703.JPG';


function App() {
  return (
    <ImageSlider effectDelay={500} autoPlayDelay={2000}>
      <Slide>
        <img alt="img2" src={img1} style={
          {
            height: '800px',
            width: '1000px'
          }
        } />
      </Slide>
      <Slide>
        <img alt="img2" src={img2} />
      </Slide>
      <Slide>
        <img alt="img1" src={img3} />
      </Slide>
    </ImageSlider>
  );
}

export default App;