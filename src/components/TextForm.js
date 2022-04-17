
import React, {useState} from 'react';

export default function TextForm(Props) {
  const [text, setText] = useState('Enter Text Here');
  const handleUpClick = ()=>{
     let newText = text.toUpperCase();
     setText(newText);
     Props.showAlert("converted to uppercase", "success");
  }  
  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    Props.showAlert("converted to Lowercase", "success");
 }
 const handleClearClick = ()=>{
  let newText = "";
  setText(newText);
  Props.showAlert("Text Cleared", "success");
}
const capitalFirstLetter = ()=>{
  let words = text.split(" ")
 let uppercaseword = ' '
  words.forEach(element => {
     uppercaseword += element.charAt(0).toUpperCase() + element.slice(1) + " "
  });
  setText(uppercaseword);
  Props.showAlert("First letter capitalized", "success");
}

const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
  Props.showAlert("Pronounced sucessfully", "success");
}

const handleCopy = () => {
  var text = document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
  Props.showAlert("Text Copied", "success");
}
  const handleOnChange = (event) =>{
      console.log("Onchange was clicked");
      setText(event.target.value);
  }
 
  return (
    <>
      <div className="container" style={{color : Props.mode==="dark" ? "white" : "black"}}>
          <h1>{Props.heading}</h1>
          <div className="mb-3">
          <textarea className="form-control" value= {text} onChange = {handleOnChange} style={{backgroundColor : Props.mode==="dark" ? "grey" : "white", color : Props.mode==="dark" ? "white" : "black"}} id="myBox" rows="8"></textarea>
          </div>
          <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
          <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
          <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
          <button className="btn btn-primary mx-1" onClick={capitalFirstLetter}>First Letter Uppercase</button>
          <button type="submit" onClick={speak} className="btn btn-primary mx-1">Speak</button>
          <button type="submit" onClick={handleCopy} className="btn btn-primary mx-1">Copy Text</button>
      </div>
      <div className="container my-3" style={{color : Props.mode==="dark" ? "white" : "black"}}>
        <h2>Your Text Summary</h2>
        <p>{text.length>0 ?text.trim().split(" ").length:0} Words, {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Previews</h2>
        <p>{text.length > 0? text : "Enter something in text above to preview here"}</p>
      </div>
    </>
  )
}
