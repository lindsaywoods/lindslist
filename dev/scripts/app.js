import React from 'react';
import ReactDOM from 'react-dom';
import StapleItem from "./staple.js";
import ListItem from "./masterlist.js";
import MovedListItem from "./movedlist.js"; 


// Initialize Firebase
const config = {
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
      // items holds the main list
      items: [],
      // quickItems holds the quick add options all the time
      quickItems:[],
      // movedList holds the quick add options when they're the main list
      movedList: [],
      quickItem:"",
      item: "",
      listitem:"",
    }

  this.addListItem = this.addListItem.bind(this);
  this.addMainListItem = this.addMainListItem.bind(this);
  this.handleChange = this.handleChange.bind(this);
  this.deleteListItem = this.deleteListItem.bind(this);
  this.deleteMainListItem = this.deleteMainListItem.bind(this);
  this.moveToMasterList = this.moveToMasterList.bind(this);
  this.removeListItem = this.removeListItem.bind(this);
  this.strikeItem = this.strikeItem.bind(this);
  
}

  componentDidMount() {
    firebase.database().ref().on("value", (res) => {
      console.log(res.val());
    });
  }

  
  

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  }


  addListItem(e){
    e.preventDefault();
    const itemState = Array.from(this.state.quickItems);
    itemState.push(this.state.quickItem);
    const dbRef = firebase.database().ref();
    dbRef.push(itemState);
    this.setState({
      quickItems:itemState,
      quickItem: "",
    });
  };

  addMainListItem(e){
    e.preventDefault();
    const listItemState = Array.from(this.state.items)
    listItemState.push(this.state.listitem);
    const dbRef = firebase.database().ref();
    dbRef.push(listItemState);
    this.setState({
      items:listItemState,
      listitem: "",
    });
  }

  deleteListItem(index){
    console.log(index);
    const itemState = Array.from(this.state.quickItems);
    itemState.splice(index,1);
    this.setState({
      quickItems: itemState
    });
  }
  
  deleteMainListItem(index){
    console.log("mainlistitemdelete");
    const listItemState = Array.from(this.state.items);
    listItemState.splice(index,1);
    this.setState({
      items: listItemState
    });
  }

  strikeItem(index){
    console.log("strike?");
    const strikeItemState = Array.from(this.state.items);
    // strikeItemState.classlist.add("strike");
    console.log(strikeItemState);
    this.setState({
      items: strikeItemState
    });
  
  }
  
  removeListItem(index){
    const removeItem = Array.from(this.state.movedList);
    removeItem.splice(index,1);
    this.setState({
      movedList: removeItem
    });
  }

  moveToMasterList(itemIndex){
    const movedArray = Array.from(this.state.movedList);
    const quickAddList = this.state.quickItems;
    const selectedItem = quickAddList[itemIndex];
    movedArray.push(selectedItem);
    this.setState({
      movedList: movedArray,
    })
  }

  
  
    render() {
      return (
      // this is the wrapper div
      <div className="wrapper">
        <div className="header">
          <div className="titleIcon">
            <img className="titlemonster titlemonster0" src="./dev/styles/assets/cutemonster.png" alt="cute monster"/>
            <img className="titlemonster titlemonster1" src="./dev/styles/assets/cutemonster.png" alt="cute monster icon"/>
          </div>
          <h1>listless</h1>
          <div className="titleIcon">
            <img className="titlemonster titlemonster2" src="./dev/styles/assets/cutemonster.png" alt="cute monster icon"/>
            <img className="smallmonster" src="./dev/styles/assets/cutemonster.png" alt="another cute monster"/>
          </div>
        </div>
        
        {/* this is the containing div */}
          <div className="form">
          {/* this is the main list */}
          <form className="todoform" onSubmit={this.addMainListItem}>
            <input type="text" name="listitem" value={this.state.listitem} onChange= {this.handleChange} />
            <button className="todobutton">
              <p>add<br/>to-do</p>
                <svg className="listicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 40">
                  <path d="M11.612 6.776h16v1h-16zM11.612 15.776h16v1h-16zM11.612 24.776h16v1h-16zM6.388 8.105l-1.553-.776-.447.895 2.447 1.223L9.059 5l-.894-.447zM6.388 17.105l-1.553-.776-.447.895 2.447 1.223L9.059 14l-.894-.447zM6.388 26.105l-1.553-.776-.447.895 2.447 1.223L9.059 23l-.894-.447z" />
                </svg>
            </button>
          </form>
          <ul className="todolist">
            {this.state.items.map((listitem, i) => {
              return <ListItem data ={listitem} key={`listitem-${i}`} delete={this.deleteMainListItem} strikethrough={this.strikeItem}  />
            })}
          </ul>
          {/* this is the quick add items on the master list */}
          <ul className="todolist">
            {this.state.movedList.map((movedList, i) => {
              return <MovedListItem data={movedList} key={`movedList-${i}`} remove={this.removeListItem} movedItemIndex={i} />
            })}
          </ul>
            {/* this is the quick add list */}
          
          <div className="stapleformlist">
            <form onSubmit={this.addListItem} className="stapleform">
              <input type="text" name="quickItem" value={this.state.quickItem} onChange={this.handleChange} />
              <button className="staplebutton">
              <p>add<br/>staple</p>
                <svg className="stapleicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                  <path d="M89.786 10a1 1 0 0 0-1-1H11.214a1 1 0 0 0-1 1v34.235h2V11h75.572v33.235h2V10zM84.597 57.918H14.216c-2.207 0-4.002 1.797-4.002 4.005s1.795 4.004 4.002 4.004h29.208v-2H14.216a2.005 2.005 0 0 1 0-4.009h70.381c1.106 0 2.006.899 2.006 2.005 0 1.104-.9 2.004-2.006 2.004H55.445v2h29.152c2.209 0 4.006-1.796 4.006-4.004s-1.797-4.005-4.006-4.005zM43.102 79.104L31.68 82.995H14.216a4.005 4.005 0 0 0-4.002 4A4.008 4.008 0 0 0 14.216 91c.11 0 .219-.018.322-.054l17.472-5.951h34.826l17.438 5.951c.104.035.213.054.323.054a4.01 4.01 0 0 0 4.006-4.005c0-2.206-1.797-4-4.006-4H67.168l-11.4-3.891-.646 1.893 5.854 1.998H37.881l5.865-1.998-.644-1.893zm-29.035 9.89a2.003 2.003 0 0 1 .149-3.999h11.591l-11.74 3.999zm70.53-3.999c1.106 0 2.006.897 2.006 2 0 1.055-.82 1.923-1.856 1.999l-11.719-3.999h11.569z" />
                </svg>
              </button>
            </form>

            <ul className="staplelist">
              {this.state.quickItems.map((quickItem, i) => {
                return <StapleItem data={quickItem} key={`quickItem-${i}`} delete={this.deleteListItem} move={this.moveToMasterList} itemIndex={i} />
              })}
            </ul>
          </div>
          {/* containing div */}
          </div>
        </div> // wrapper div
      )
    }
}



ReactDOM.render(<App />, document.getElementById('app'));
