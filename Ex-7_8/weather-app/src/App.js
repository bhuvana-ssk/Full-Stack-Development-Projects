import React from 'react';
import Axios from 'axios';

function App() {

  const [city,setcity] = React.useState("");
  const [data,setdata] = React.useState([]);
  const key = "9d9389293c2f987f2adec1755ca85ddf";

  const add = async () => {
    
    try{
      const response = await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`);
      setdata([...data,response.data]);

      setcity("");
    }
    catch(err){
      alert("Enter the City Name !");
    }
  }

  return (
    <div>
      <h1 style={{textAlign:'center'}}>Weather App</h1>
      <input style={{marginLeft:'610px'}} type={"text"} value={city} onChange={(e) => setcity(e.target.value)} ></input>
      <button onClick={add}>Get</button>
      {/* {data && (
        <div>
        <p>Humidity : {data.main.humidity}</p>
        <p>Pressure : {data.main.pressure}</p>
        <p>Temperature : {data.main.temp}</p>
        <p>Max Temperature : {data.main.temp_max}</p>
        <p>Min Temperature : {data.main.temp_min}</p>
        </div>
      )} */}

      {data.map((i) => (
        <div style={{
          borderStyle: "Solid",
          width: "50%",
          marginTop: "30px",
          marginLeft: "400px",
          backgroundColor: "skyblue"
        }}>
          <div style={{
            marginLeft: "90px"
          }}>
            <h2>City Name : {i.name}</h2>
        <h3>Humidity : {i.main.humidity}</h3>
        <h3>Pressure : {i.main.pressure}</h3>
        <h3>Temperature : {i.main.temp}</h3>
        <h3>Max Temperature : {i.main.temp_max}</h3>
        <h3>Min Temperature : {i.main.temp_min}</h3>
        </div>
        </div>
      ))}
      
    </div>
  )
}

export default App