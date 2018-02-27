import React from "react";

const MovedListItem = (props) => {
    return (
        <li>{props.data} 
        <button className="trashbutton" onClick={() => props.remove(props.movedItemIndex)}>

        </button>
        <button className="strikebutton" onClick={() => props.strikethrough(props.itemIndex)}>


        </button>
        </li>
    ); 
        
}

export default MovedListItem;