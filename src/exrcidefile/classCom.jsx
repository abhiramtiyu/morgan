import {Component} from 'react';
import './App.css';
class App extends Component{
  constructor(){
    super();
    this.state={
      monster : [],
      searchFiled :""
    }
  }
componentDidMount(){
  fetch( "https://jsonplaceholder.typicode.com/users")
  .then(Response=> Response.json())
  .then(data=> {
    this.setState(()=>{
      return {monster:data}
    })
  })
}
searchChange = (e)=>{
  const searchFiled = e.target.value.toLocaleLowerCase();
  this.setState(()=>{
    return {searchFiled}
  })
}
  render(){
    const {monster,searchFiled} = this.state
    const {searchChange} = this;
    const filterdValue = monster.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchFiled);
    })
    return(
      <>
        <div className="input-group flex-nowrap">
        <span className="input-group-text" id="addon-wrapping">@</span>
        <input type="text" 
                className="form-control" 
                placeholder="Username" 
                aria-label="Username" 
                aria-describedby="addon-wrapping"
                onChange={searchChange}/>
      </div>
        {
          filterdValue.map(mons=>{
            return(
              <h1 key={mons.id}>{mons.name}</h1>
            )
          })  
        }
      </>
    )
  }
}

export default App;