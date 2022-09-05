import logo from './logo.svg';
import './App.css';
import Card from './components/card';
import Button from './components/button';
import { useState } from 'react';

function App() {
  const [data,setData] = useState([]);
  const [name,setName] = useState();
  const [age,setAge] = useState();

let nameChange = (e)=>{
   setName(e.target.value);
}

let ageChange = (e)=>{
   setAge(e.target.value);
}

function controlForm(e) {
    e.preventDefault();
    let object = {name: name , age: age}
    setData(
      [
       ...data,
      object 
      ]
      
    );
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <form onSubmit={controlForm}>
          <input type={"text"} placeholder={"name"} id={"nameInput"} name='name' onChange={nameChange}></input><br></br>

          <input type={"text"} placeholder={"age"} id={"ageInput"} name='age' onChange={ageChange}></input><br></br>
          
          <input type={"submit"} id={"submitButton"}></input>
        </form>
        <Card name={data}/>

        {/* <Button/> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
