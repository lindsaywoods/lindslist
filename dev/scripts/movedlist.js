import React from "react";

const MovedListItem = (props) => {
    return (
        <div className="masterlist">
            <li>{props.data} 
            <button className="trashbutton" onClick={() => props.remove(props.movedItemIndex)}>
            </button>
            <button className="strikebutton" onClick={() => props.strikethrough(props.itemIndex)}>
            </button>
            </li>
        
        </div>
    ); 
        
}

export default MovedListItem;