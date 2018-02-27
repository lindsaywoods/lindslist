import React from "react";

const StapleItem = (props) => {
  return (
    <li>
      {props.data} 
      <button className="trashbutton" onClick={() => props.delete(props.itemIndex)}>
      </button> 
      <button className="movebutton" onClick={() => props.move(props.itemIndex)}>
        {/* <p>move</p> */}
      </button> 
    </li >
  );
}

export default StapleItem;
