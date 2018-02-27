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
            listClass: "strike",
        });
    }
    render() {
        return (
            <div className="masterlist">
                <li className={""}>
                {this.props.data} 
                    <button className="trashbutton" onClick={() => this.props.delete(this.props.itemIndex)}>
                    <img src="./public/styles/assets/smileytrash.svg" alt="smiley trash can icon"/>
                    </button> 
                    <button className="strikebutton" onClick={() => this.itemStrikethrough(this.props.itemIndex)}>
                    </button>
                </li >
            </div>
        );

    }
}

export default ListItem;