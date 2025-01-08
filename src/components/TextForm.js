import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState(" ");

  const handleUpperClick = () => {
    setText(text.toUpperCase());
  };

  const handleLowerClick = () => {
    setText(text.toLowerCase());
  };
  const clearClick = () => {
    setText("");
  };


  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <div className="container" style={{
  
  color: props.mode === "dark" ? "white" : "black"
}}
>
        <h1>{props.heading || "Default Heading"}</h1>
        <textarea
          value={text}
          onChange={handleChange}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          style={{
            background: props.mode === "dark" ? "#525252" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
          
        ></textarea>
        <button
          onClick={handleUpperClick}
          type="button"
          className="btn mt-2 btn-primary"
        >
          Convert to Uppercase
        </button>
        <button
          onClick={handleLowerClick}
          type="button"
          className="btn mt-2 btn-primary mx-2"
        >
          Convert to Lowercase
        </button>
        <button
          onClick={clearClick}
          type="button"
          className="btn mt-2 btn-primary mx-2"
        >
          Clear Text
        </button>
       
        
      </div>
      <div className="container my-2">
        <h1>Your Text Summary</h1>
        <p>
          {text.split(/\s+/).filter((word) => word.length > 0).length} words, {text.length} characters
        </p>
        <p>{0.008 * text.split(/\s+/).filter((word) => word.length > 0).length} Minutes to read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
