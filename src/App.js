import React from 'react';
import './App.css';
import Slide from './components/Slide';
import Number from "./components/Number"

function App() {

  const [img, setImg] = React.useState("images/banner-1.jpg")
  const changeImg1=()=>setImg("images/banner-1.jpg")
  const changeImg2=()=>setImg("images/banner-2.jpg")
  const changeImg3=()=>setImg("images/banner-3.jpg")

  return (
    <div id="slide">
      <Slide img={img}/>
      <Number changeImg1={changeImg1}
               changeImg2={changeImg2}
                changeImg3={changeImg3}/>
    </div>
  );
}

export default App;
