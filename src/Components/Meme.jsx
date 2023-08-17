import React, {useState} from 'react'
import memesData  from '../memesData';


let url
export default function Meme() {
  let [memeImage, setMemeImage] = useState("http://i.imgflip.com/1bij.jpg");
  function getMemeImage() {
      const memesArray = memesData.data.memes
      const randomNumber = Math.floor(Math.random() * memesArray.length)
      url = memesArray[randomNumber].url
      setMemeImage(url);
      console.log(memeImage);
    }
  return (
    
    <div className='main-container'>
    
      <main className='form'>
        <input type="text" className='form-input' placeholder='Top Text'/>
        <input type="text" className='form-input' placeholder='Bottom Text'/>
          {/* <p>{url}</p> */}
        <button className='form-button' onClick={getMemeImage}>Get a new meme image 🖼</button>
      </main>
      <div className="meme">
        <img src={memeImage} alt="meme Image" className='meme-image'/>
        <h2 className='meme-text top'>One does not simply</h2>
        <h2 className='meme-text bottom'>Walk into mordor</h2>
      </div>
      
    </div>
  );
}
