import React, {useEffect, useState} from 'react'

let url
export default function Meme() {
  
  let [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })

  let [memeImage, setMemeImage] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setMemeImage(data.data.memes))
  },[])

   function getMemeImage() {
      const randomNumber = Math.floor(Math.random() * memeImage.length)
      url = memeImage[randomNumber].url
      setMeme(prevMeme => ({
        ...prevMeme,
        randomImage: url
      }))
    }

  function inputChange(event) {
    let {name, value} = event.target;
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }

  return (
    
    <div className='main-container'>
    
      <main className='form'>
        <input 
          type="text" 
          className='form-input' 
          placeholder='Top Text' 
          name='topText' 
          value={meme.topText} 
          onChange={inputChange}
        />

        <input 
          type="text" 
          className='form-input' 
          placeholder='Bottom Text' 
          name='bottomText' 
          value={meme.bottomText} 
          onChange={inputChange}
        />

        <button className='form-button' onClick={getMemeImage}>Get a new meme image 🖼</button>
      </main>
      <div className="meme">
        <img src={meme.randomImage} alt="meme Image" className='meme-image'/>
        <h2 className='meme-text top' >{meme.topText}</h2>
        <h2 className='meme-text bottom'>{meme.bottomText}</h2>
      </div>
      
    </div>
  );
}
