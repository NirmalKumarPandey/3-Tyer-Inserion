import './App.css';
import React, { useState } from 'react';

function App() {
  let [playerdata, setPlayerdata] = useState([]);

  let getDataFromServer = async () => {
    let reqOptions = {
      method: "GET"
    }
    let JSONData = await fetch("http://localhost:4567/players", reqOptions);
    let JSOData = await JSONData.json();
    setPlayerdata(JSOData);
    console.log(JSOData);
  }
  return (
    <div className="App">
      <button type="button" onClick={() => {
        getDataFromServer();
      }}>Get Data</button>
      {playerdata.map((ele, i) => {
        return <div key={i}>
          <button type='button' id='player'>{ele.playerName}</button>
          <button type='button' id='age'>{ele.age}</button>
          <button type='button' id='teamName'>{ele.teamName}</button>
          <button type='button' id='email'>{ele.email}</button>
        </div>

      })}
    </div>
  );
}

export default App;
