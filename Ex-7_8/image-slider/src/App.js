import React from 'react'
import ImageSlider, { Slide } from "react-auto-image-slider";

import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.png';
function App() {
  return (
    <ImageSlider effectDelay={200} autoPlayDelay={1000}>
      <Slide>
        <img alt="img2" src={img1} style={
          {
            height: '720px',
            width: '2000px'
          }
        } />
      </Slide>
      <Slide>
        <img alt="img3" src={img2} />
      </Slide>
      <Slide>
        <img alt="img2" src={img3} />
      </Slide>
      <Slide>
        <img alt="img1" src={img4} />
      </Slide>
    </ImageSlider>
  );
}

export default App;
/*
import React from 'react'
import images from "./imgImports";
function App() {

  const[int,setint] = React.useState(0);
  const[data,] = React.useState(images)

  const next = ()=>{
    console.log(data.length)

    if(int>=(data.length-1)){
      console.log('hello')
      setint(0);
    }
    else{
      console.log('hello')
      setint(int+1);
    }
    
  }
  
  const prev = ()=>{
    
    if(int<=0){
      setint(data.length-1);
    }
    else{
      setint(int-1);
    }

  }

  return (
    <div>
      <button onClick={next} >Next</button>
      <button onClick={prev} >Prev</button>
      <img src={`${images[int]['img']}`} alt={`${images[int]['name']}`}/>
    </div>
  )
}

export default App*/