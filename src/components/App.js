import "../styles/App.css";
import React, { useState, useEffect } from "react";

const keys = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");

const App = () => {
    const [typedVal, setTypedVal] = useState("");
    const [quote, setQuote] = useState("");

    useEffect(()=>{
        if(typedVal === "forty two"){
            fetch("https://api.quotable.io/random")
                .then((response)=> response.json())
                .then((data) => setQuote(data.content))
                .catch((err)=>console.log(err));
        }
    },[typedVal])

  return (
    <>
        {
            quote === ""
            ?
            <>
                <div className="keyboard">
                    <div className="preview">{typedVal}</div>
                    <div>
                        {keys.map((key) => (
                        <button key={key} id={key === " " ? `key-space` : `key-${key}`} onClick={()=>setTypedVal(typedVal+key)}>
                            {key === " " ? "Space" : key.toUpperCase()}
                        </button>
                        ))}
                    </div>
                </div>
            </>
            :
            <div className="quote">{quote}</div>
        }
    </>
  );
};

export default App;
