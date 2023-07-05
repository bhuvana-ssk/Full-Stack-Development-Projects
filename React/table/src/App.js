import React from 'react';
import './App.css';

const value = [
  { Roll_No: "20BAD032", Name: "INISH", DL: 95, FSD: 97, SE: 90, RS: 93, AE: 98, OE: 97 },
  { Roll_No: "20BAD025", Name: "BHARATH", DL: 90, FSD: 95, SE: 97, RS: 95, AE: 90, OE: 99 },
  { Roll_No: "20BAD031", Name: "HISSHA", DL: 85, FSD: 85, SE: 70, RS: 63, AE: 88, OE: 86 },
  { Roll_No: "20BAD046", Name: "SUJITH", DL: 91, FSD: 84, SE: 97, RS: 60, AE: 75, OE: 66 },
  { Roll_No: "20BADL01", Name: "AJITH", DL: 88, FSD: 87, SE: 85, RS: 99, AE: 93, OE: 94 },
]

function App() {
  return (
    <div>
      <h1>STUDENTS MARK LISTS</h1>
      <table>
        <caption>STUDENTS MARK LISTS</caption>
        <tr>
          <th>Roll_No</th>
          <th>Name</th>
          <th>DL</th>
          <th>FSD</th>
          <th>SE</th>
          <th>RS</th>
          <th>AE</th>
          <th>OE</th>
        </tr>
        {value.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.Roll_No}</td>
              <td>{val.Name}</td>
              <td>{val.DL}</td>
              <td>{val.FSD}</td>
              <td>{val.SE}</td>
              <td>{val.RS}</td>
              <td>{val.AE}</td>
              <td>{val.OE}</td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}

export default App