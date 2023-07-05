import React from 'react'

const value = [
  { city_name: "Avaraikulam", sunraise: "6.00 AM", sunset: "6.10 PM", description: "Cool", humdity: "20F", day: "Monday", month_date: "20-March-2023"},
  { city_name: "Sivakasi", sunraise: "6.30 AM", sunset: "6.40 PM", description: "Sunny", humdity: "30F", day: "Sunday", month_date: "22-March-2023"},
]


function App() {
  return (
    <div>
      <h1 style={
        {
          textAlign: 'center'
        }
      }>Weather APP🌡️</h1>
      {value.map((val, key) => {
          return (
            <div className= 'divv' style={
              {
                marginLeft: '530px',
                marginTop: '70px',
                borderStyle: 'solid',
                borderRadius: '10px',
                width: '30%',
                backgroundColor: 'GrayText',
              }
            }><div style={
              {
                marginLeft: '170px',
                fontFamily: 'fantasy'
              }
            }>
              <p>City Name: {val.city_name}</p>
              <p>Sunraise: {val.sunraise}</p>
              <p>Sunset: {val.sunset}</p>
              <p>Description: {val.description}</p>
              <p>Humdity: {val.humdity}</p>
              <p>Day: {val.day}</p>
              <p>Date: {val.month_date}</p>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default App