import MenuList from "./menuList";
import './styles.css'

function TreeView({list = []}){
    return (<div className="container">
            <MenuList list={list}/>
    </div>)
}

export default TreeView;