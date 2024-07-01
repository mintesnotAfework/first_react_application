import QRCode from "react-qr-code";
import { useState } from "react";
import './styles.css'

function QRCode1(){
    const [v , setValue] =useState("");
    const [temp,setTemp] = useState("");
    function handleValue(t){
        console.log(v)
        setValue(t);
        setTemp("");
    }

    function handleTemp(e){
        setTemp(e.target.value)
    }
    return (<div>
                <div className="container">
                    <input type="text" name="username" onChange={(e) => handleTemp(e)} value={temp}/>
                    <button disabled={temp && temp.value !== ""? false: true} onClick={() => handleValue(temp)}>Enter</button>
                </div>
                <QRCode className="qrcode" value={v}/>
            </div>
            );
}

export default QRCode1