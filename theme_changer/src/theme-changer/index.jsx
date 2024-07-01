import { useState } from "react";
import { TbSettingsHeart } from "react-icons/tb";
import './styles.css'

function ThemeChanger(){
    const [dark,setDark] = useState(false);
    function handleTheme(){
        setDark(!dark);
    }
    return (
        <div className={dark?"dark-continer contianer":"light-contianer contianer"}>
            <button onClick={handleTheme} className={dark?"dark-button":"light-button"}>Change Theme</button>
        </div>
    )

}

export default ThemeChanger;