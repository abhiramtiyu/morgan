
import { useEffect, useState } from 'react';
import './App.css';
const App=()=>{
const [searchField,setSearchField] = useState('')
const [monster,setMonster] = useState([])
const [filteredValue,setFileteredValue] = useState(monster)

useEffect(()=>{
  fetch( "https://jsonplaceholder.typicode.com/users")
    .then(Response=> Response.json())
    .then((user)=>{
      return setMonster(user)
     }
    )
},[])

useEffect(()=>{
  const filterdSearch = monster.filter((monster)=>{
    return monster.name.toLocaleLowerCase().includes(searchField);
    })
    setFileteredValue(filterdSearch)
},[monster,searchField])
const searchChange = (e)=>{
  const searchFiled = e.target.value.toLocaleLowerCase();
  setSearchField(searchFiled)
}



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
          filteredValue.map(mons=>{
            return(
              <h1 key={mons.id}>{mons.name}</h1>
            )
          })  
        }
      </>
    )
}

export default App;