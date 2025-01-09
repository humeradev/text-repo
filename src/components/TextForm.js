import React, { useState } from "react";
import { jsPDF } from "jspdf";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpperClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLowerClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase!", "success");
  };

  const clearClick = () => {
    setText("");
    props.showAlert("Text cleared!", "success");
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text).then(() => {
      props.showAlert("Text copied to clipboard!", "success");
    });
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleDownloadPdf = () => {
    const doc = new jsPDF();
    doc.text(text, 10, 10);
    doc.save("downloaded-text.pdf");
   
  };

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1 className="mb-4">{props.heading || "Default Heading"}</h1>
        <textarea
          value={text}
          onChange={handleChange}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          style={{
            background: props.mode === "dark" ? "#01796f" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        ></textarea>
        <button
          disabled={text.trim() === ""}
          onClick={handleUpperClick}
          type="button"
          className="btn mt-2 btn-primary"
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.trim() === ""}
          onClick={handleLowerClick}
          type="button"
          className="btn mt-2 btn-primary mx-2"
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.trim() === ""}
          onClick={clearClick}
          type="button"
          className="btn mt-2 btn-danger mx-2"
        >
          Clear Text
        </button>
        <button
          disabled={text.trim() === ""}
          onClick={handleCopyClick}
          type="button"
          className="btn mt-2 btn-success mx-2"
        >
          Copy to Clipboard
        </button>
        <button  className="btn mt-2 btn-primary" disabled={text.trim() === ""} onClick={handleDownloadPdf}>Download as PDF</button>
      </div>
      <div className="container my-2  " style={{
            
            color: props.mode === "dark" ? "white" : "#01796f",
          }}>
        <h2>Your Text Summary</h2>
        <p>
          {text.split(/\s+/).filter((word) => word.length > 0).length} words,{" "}
          {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(/\s+/).filter((word) => word.length > 0).length}{" "}
          Minutes to read
        </p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}
