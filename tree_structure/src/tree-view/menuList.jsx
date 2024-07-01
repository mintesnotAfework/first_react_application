import MenuItem from "./menuItem.jsx";

function MenuList({ list = [] }) {
  return (
    <div className="list-container">
      <ul>
        {
          list && list.length?
            list.map((e, i) => (
            <MenuItem key={i} item={e} /> 
            ))
          :null
        }
      </ul>
    </div>
  );
}

export default MenuList;
