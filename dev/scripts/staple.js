import React from "react";

const StapleItem = (props) => {
  return (
    <li>
      {props.data} 
      <button className="trashbutton" onClick={() => props.delete(props.itemIndex)}>
        <img src="./public/styles/assets/smileytrash.svg" alt="smiley trash can icon" />
      </button> 
      <button className="movebutton" onClick={() => props.move(props.itemIndex)}>
        <img src="./public/styles/assets/moveicon2.svg" alt="move to todo list"/>
      </button> 
    </li >
  );
}

export default StapleItem;
