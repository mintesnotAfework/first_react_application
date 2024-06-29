import { useState } from "react";
import "./styles.css";

function RandomColor() {
  const [color, setColor] = useState("#000");
  const [colorType, setColorType] = useState("hex");

  function generateRandomHex() {
    // Create an array of hexadecimal digits (0-9, a-f)
    const hexDigits = "0123456789ABCDEF";
  
    // Generate a random integer between 0 and 0xFFFFFF (representing 6 hex digits)
    let hexCode = "#";
    for (let i = 0; i < 6; i++) {
      hexCode += hexDigits[Math.floor(Math.random() * 16)];
    }
  
    return hexCode;
  }

  function generateRandomRGB(){
    let rgbCode = "rgb(";
    for(let i = 0;i < 3;i++){
        rgbCode += Math.floor(Math.random() * 100);
        if(i != 2){
            rgbCode += ","
        }
        else{
            rgbCode += ")";
        }
    }
    return rgbCode;
  }

  function randomColorGen(){
    if(colorType == "hex"){
        setColor(()=>generateRandomHex());
    }
    else if(colorType == "rgb"){
        setColor(()=>generateRandomRGB());
    }
  }

  function hex(){
    setColorType("hex");
  }

  function rgb(){
    setColorType("rgb");
  }
  return (
    <div>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: color,
        }}
      >
        <div className="header">
          <button onClick={hex}>Create Hex Color</button>
          <button onClick={rgb}>Create RGB Color</button>
          <button onClick={randomColorGen}>random color generator</button>
        </div>
        <h1
          style={{
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "350px",
            backgroundColor: "#000",
            height:"5rem"
          }}
        >
          {color}
        </h1>
      </div>
    </div>
  );
}

export default RandomColor;
