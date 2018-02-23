import React from 'react';
import ReactDOM from 'react-dom';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDJ1NCJsIPhmSuUbpMw3OjYqnkEymMJYCA",
  authDomain: "lindslist-3b806.firebaseapp.com",
  databaseURL: "https://lindslist-3b806.firebaseio.com",
  projectId: "lindslist-3b806",
  storageBucket: "lindslist-3b806.appspot.com",
  messagingSenderId: "356531602186"
};
firebase.initializeApp(config);



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
      item: "",
    }

  this.addListItem = this.addListItem.bind(this);
  this.handleChange = this.handleChange.bind(this);
  this.deleteListItem = this.deleteListItem.bind(this);
  
  }

  componentDidMount(){
    // console.log("didmount?");
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  addListItem(e){
    e.preventDefault();
    const itemState = Array.from(this.state.items);
    itemState.push(this.state.item);
    this.setState({
      items: itemState,
      item: "",
    });
    
  }

  deleteListItem(index){
    console.log(index);
    const itemState = Array.from(this.state.items);
    itemState.splice(index,1);
    this.setState({
      items: itemState
    });
  }


  
    render() {
      return (
        // this is the containing div
        <div> 
          <form onSubmit={this.addListItem}>
            {/* <label htmlFor="listitem"> List item: </label> */}
            <input type="text" name="item" value={this.state.item} onChange={this.handleChange} />
            <button>add staple</button>
          </form>
          <ul>
            {this.state.items.map((item, i) => {
              return <StapleItem data={item} key={`item-${i}`} delete={this.deleteListItem} itemIndex={i} />
            })}

          </ul>

        </div> // containing div
      )
    }
}

const StapleItem = (props) => {
  return (
    <li>{props.data} <button onClick={() =>props.delete(props.itemIndex)}>X</button> </li >
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
