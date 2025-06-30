import React, {useState} from 'react'

 
export default function Textform(props) {
    const [text, setText] = useState("Enter your text here");

    const handleUpClick = ()=> { 
        console.log("HellO!");
        setText(text.toUpperCase());
        props.showAlert("Converted to Upper Case", "success");
    }
    const handleClearClick = ()=> { 
        console.log("HellO!");
        setText("");
        props.showAlert("Text Cleared", "success");
    }

    const handleOnChange = (event)=> {
        setText(event.target.value);
    }
    const handleDownClick = (event)=> {
        setText(text.toLocaleLowerCase());
        props.showAlert("Converted to Lower Case", "success");
    }
 
  //  setText("Apple.")
  return (
   <> 
   <div className="container" style={{
  backgroundColor: props.mode === "dark" ? "black" : "white",
  color: props.mode === "dark" ? "white" : "black"
}} > 
    <h1> {props.head}    </h1>
<div className="mb-3">
  
  <textarea className="form-control my-3" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange} style={{
  backgroundColor: props.mode === "dark" ? "black" : "white",
  color: props.mode === "dark" ? "white" : "black"
}}></textarea>
  <button type="button" className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
  <button type="button" className="btn btn-primary" onClick={handleDownClick}>Convert to Lowercase </button>
  <button type="button" className="btn btn-primary mx-2" onClick={handleClearClick}>Clear </button>

  <h2 className = "my-3"> Your Text Summary </h2>
  <p> {text.split(" ").length} words and {text.length} characters. </p>
</div>
</div>
   
   </>
  )
}
