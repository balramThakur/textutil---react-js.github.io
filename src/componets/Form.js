import React,{useState} from 'react'

export default function Form() {
    const [text,setTex]=useState("");

    const ChangeToUpperCase=()=>{
        let newText=text.toUpperCase();
        setTex(newText)
    }

    const changeHanldler=(event)=>{
        setTex(event.target.value);
    }

    const ClearText=()=>{
        setTex("");
    }

    const LowerCase=()=>{
        let newText=text.toLowerCase();
        setTex(newText);
    }
  return (
    <div>
        <div class="form-group container">
            <h2>Summary</h2>
            <h3>{text.split(" ").length} Words and {text.length} Characters</h3>
            <label for="exampleFormControlTextarea1">Enter your text below</label>
            <textarea class="form-control my-2" value={text} onChange={changeHanldler} id="exampleFormControlTextarea1" rows="9"></textarea>
            <button type="button" class="btn btn-dark " onClick={ChangeToUpperCase}>Uppercase</button>
            <button type="button" class="btn btn-dark mx-3" onClick={ClearText}>Clear</button>
            <button type="button" class="btn btn-dark " onClick={LowerCase}>Lowercase</button>
        </div>
        <div className="container">
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
    </div>
  )
}
