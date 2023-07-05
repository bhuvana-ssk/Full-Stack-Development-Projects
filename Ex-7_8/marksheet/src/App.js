import React from 'react'

function App() {


  const [value, updatevalue] = React.useState({ name: "", dl:0, fs:0, se:0, rs:0, ent:0, tab:0 });

  const [list, updatelist] = React.useState([]);

  function changehandler(e) {

    updatevalue({ ...value, [e.target.name]: e.target.value });
  }

  
let { name, dl, fs, se, rs, ent, tab } = value;
  
  function add() {

    updatelist([...list, { name, dl, fs, se, rs, ent, tab }])

    updatevalue( { name: "", dl:0, fs:0, se:0, rs:0, ent:0, tab:0 })

  }
  return (
    <div style={{textAlign:'center',backgroundColor:'lightpink'}}>
      <h1>MarksSheet</h1>
        <table style={{marginLeft:'450px'}}>
          <tbody>
          <tr>
            <td>Name of the Student: </td>
            <td><input type={"text"} value={value.name} name='name' onChange={changehandler}></input></td>
          </tr>
          <tr>
            <td>Deep Learning : </td>
            <td><input type={"number"} value={value.dl} name='dl' onChange={changehandler} ></input></td>
          </tr>
          <tr>
            <td>Full Stack Development : </td>
            <td><input type={"number"} value={value.fs} name='fs' onChange={changehandler}></input></td>
          </tr>
          <tr>
            <td>Software Engineering : </td>
            <td><input type={"number"} value={value.se} name='se' onChange={changehandler}></input></td>
          </tr>
          <tr>
            <td>Core Elective : </td>
            <td><input type={"number"} value={value.rs} name='rs' onChange={changehandler}></input></td>
          </tr>
          <tr>
            <td>Allied Elective : </td>
            <td><input type={"number"} value={value.ent} name='ent' onChange={changehandler}></input></td>
          </tr>
          <tr>
            <td>Open Elective : </td>
            <td><input type={"number"} value={value.tab} name='tab' onChange={changehandler}></input></td>
          </tr>
          </tbody>
        </table>
        <br></br>
        <button onClick={add}>Submit</button>
        <br></br>
        <table border={1} style={{marginLeft:'250px',backgroundColor:'skyblue'}}>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Deep Learning</th>
              <th>Full Stack Development</th>
              <th>Software Engineering</th>
              <th>Core Elective</th>
              <th>Allied Elective</th>
              <th>Open Elective</th>
              <th>Total Marks</th>
            </tr>
            {
              list.map(
                (info, ind) => {
                  return (
                    <tr key={ind}>
                      <td>{info.name}</td>
                      <td>{info.dl}</td>
                      <td>{info.fs}</td>
                      <td>{info.se}</td>
                      <td>{info.rs}</td>
                      <td>{info.ent}</td>
                      <td>{info.tab}</td>
                      <td>{parseInt(info.dl)+parseInt(info.fs)+parseInt(info.se)+parseInt(info.rs)+parseInt(info.ent)+parseInt(info.tab)}</td>
                    </tr>
                  )
                }
              )
            }
          </tbody>
        </table>
    </div>
  )
}

export default App