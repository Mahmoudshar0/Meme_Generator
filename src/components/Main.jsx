import { useState, useEffect } from "react"
export default function Main() {

   const [meme, setMeme] = useState({
      topText: "One does not simply",
      bottomText: "Walk into Mordor",
      imgUrl: "http://i.imgflip.com/1bij.jpg",
   })

   const [memeImages, setMemeImages] = useState([])

   function handleChange(event){
      const {value, name} = event.currentTarget
      setMeme(prev => ({...prev, [name]:value}))
   }

   useEffect(() =>{
      fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((res) => res.data.memes)
      .then((res) => setMemeImages(res))
   }, [])

   function getMemeImage() {
      const randomIndex = Math.floor(Math.random() * memeImages.length)
      const url = memeImages[randomIndex].url
      setMeme(prev => ({...prev, imgUrl: url}))
   }

   return (
      <main>
            <div className="form">
               <label>Top Text
                  <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                  />
               </label>
               <label>Bottom Text
                  <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleChange}
                  />
               </label>
               <button onClick={getMemeImage} >Get a new meme image 🖼</button>
            </div>
            <div className="meme">
               <img src={meme.imgUrl} />
               <span className="top">{meme.topText}</span>
               <span className="bottom">{meme.bottomText}</span>
            </div>
      </main>
   )
}