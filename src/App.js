import React ,{Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Listitems from './listitem'
import {library} from '@fortawesome/fontawesome-svg-core'
import{faTrash} from '@fortawesome/free-solid-svg-icons'

library.add(faTrash);

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      items:[],
      currentItem:{
        text:'',
        key:''
      }

    }
    this.handleinput=this.handleinput.bind(this);
    this.addItem=this.addItem.bind(this);
    this.deleteitem=this.deleteitem.bind(this);
    this.setupdate=this.setupdate.bind(this);
  }
  setupdate(text,key){
    const items=this.state.items;
    items.map(item =>{
    if(item.key===key){
      item.text=text;

    }
    return null
  })
    this.setState({
      items:items
    })

  }
  handleinput(e){
    this.setState({
      currentItem:{
        text:e.target.value,
        key:Date.now()
      }
    })
  }
  deleteitem(key){
    const filtereditem=this.state.items.filter(item => item.key!==key);/*its a function used to filter out those that meet our condition*/
    this.setState({
      items:filtereditem
    })
  }
  addItem(e){
    e.preventDefault()
    const newitem=this.state.currentItem
    if(newitem.text!==''){
      const newitemsss=[...this.state.items,newitem];/*we call this destructuring assignment,so what is in currentitem is put into the item[] from our constructor*/
      this.setState({
        items:newitemsss,
        currentItem:{
          text:'',
          key:''
        }
      })
    }

  }
  render(){
    return(
      <div className="App">
        <header>
        <form id="to-do-form" onSubmit={this.addItem}>
          <input type="text" placeholder="Enter Text" 
          value={this.state.currentItem.text}
          onChange={this.handleinput}
          ></input>
          <button type="submit">Add</button>
        </form>
      </header>
      <Listitems items={this.state.items} deleteitem={this.deleteitem} setupdate={this.setupdate}></Listitems>
      </div>
      
    );
  }

}

export default App;
