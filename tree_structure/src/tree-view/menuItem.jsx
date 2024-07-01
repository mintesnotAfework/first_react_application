import { useState } from "react";
import MenuList from "./menuList";
import { FaPlus,FaMinus  } from "react-icons/fa6";

function MenuItem({item = {}}){
    const [plus,setPlus] = useState(true);
    function handlePlus(){
        setPlus(!plus);
    }
    return (<li className="item-conainer">
        <span>{item.label}</span>
        {
            item.children && item.children.length?
            (
                plus?
                <FaPlus onClick={handlePlus} className="plus"/>
                :<FaMinus onClick={handlePlus} className="minus" />
            )
            :null
            
        }
        {
            plus?
                null
                :(
                    item && item.children && item.children.length? 
                        <MenuList list={item.children}/>
                    :null
                )
        }
    </li>);
}

export default MenuItem;