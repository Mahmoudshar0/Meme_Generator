import troll from "/Troll Face.png";
export default function Header(){
   return(
      <header className="header">
         <img src={troll} alt="troll" className="troll"/>
         <h2>Meme Generator</h2>
      </header>
   )
}