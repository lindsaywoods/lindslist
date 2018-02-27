import React from "react";

class ListItem extends React.Component {
    constructor() {
        super();
        this.state = {
            strikethrough: false,
            listClass: "apple",
        }
    this.itemStrikethrough = this.itemStrikethrough.bind(this);
    }
    
    itemStrikethrough() {
        this.setState({
            strikethrough: true,
        });
    }
    render() {
        return (
            <li className={"apple" ? "thing" : "strike"}>
            {this.props.data} 
                <button className="trashbutton" onClick={() => this.props.delete(this.props.itemIndex)}>
                </button> 
                <button className="strikebutton" onClick={() => this.itemStrikethrough(this.props.itemIndex)}>
                
                </button>
                
                
            </li >
        );

    }
}

export default ListItem;