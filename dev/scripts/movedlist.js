import React from "react";

const MovedListItem = (props) => {
    return (
        <div className="masterlist">
            <li>{props.data} 
                <button className="trashbutton" onClick={() => props.remove(props.movedItemIndex)}>
                    <img src="./public/styles/assets/smileytrash.svg" alt="delete item" /> 
                </button>
                <button className="strikebutton" onClick={() => props.strikethrough(props.itemIndex)}>
                <img src="./public/styles/assets/check2.svg" alt="mark to do completed"/>
                </button>
            </li>
        
        </div>
    ); 
        
}

export default MovedListItem;