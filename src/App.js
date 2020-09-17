import React,{useEffect, useState} from 'react';
import axios from 'axios'
import './App.css';

function App() {

  const[images, setImages] = useState('');

  const handleChange =()=>{
    axios.get('https://api.generated.photos/api/v1/faces?api_key=WQ1tMX2q9Q4rTWKzolcHXw&order_by=random')
    .then((res)=>{
            console.log(res.data.faces[0].urls[4][512])
            const url = res.data.faces[0].urls[4][512];
             setImages(url)
            
    })
    .catch((err)=>{
            console.log(err.message)
    })
  }

  return (
    <>
    <div className="App">
      <h1>Random photos</h1>
      {images &&<img className="App2" src={images} alt="Al faces"/>}
      <button  onClick={handleChange}>new photos</button>
    </div>
    
     </>
  );
}

export default App;
