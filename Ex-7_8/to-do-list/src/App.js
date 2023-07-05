import React, {useState} from 'react'

function App() {

  const [list,setlist] = useState( [] );
  const [input,setinput] = useState("");

  const addtodo = (todo) => {
    const newtodo = {
      id: Math.random(),
      todo: todo,
    };

    setlist([...list, newtodo]);

    setinput("");
  };

  const deletetodo = (id) => {

    const newlist = list.filter((todo => todo.id !== id));

    setlist(newlist);
  };

  return (
    <div style={{backgroundColor:'skyblue'}}>
      <h1 style={
        {
          textAlign: 'center',
          fontStyle: 'italic',
          fontWeight: 'bold',
          color: 'purple'
        }
      }>📃To Do List📃</h1>
      <input type="text" value={input} style={
        {
          textAlign: 'center',
          marginLeft: '570px',
          marginTop: '30px',
          padding: '5px',
          fontFamily: 'serif',
          width: '250px',
          height: '20px',
        }
      } onChange = {(e) => setinput(e.target.value)}/>
      <button style={
        {
          padding:'5px',
          fontFamily: '-moz-initial',
        }
      } onClick={() => addtodo(input)}>Add</button>
      <ul style={
        {
          marginLeft: '600px',
          fontFamily: 'serif',
          fontWeight: 'bold',
          fontSize: '20px'
        }
      }> 
        {list.map((todo) => (
          <li key={todo.id}>
            {todo.todo}
            <input type="checkbox" defaultChecked={true} onChange={() => deletetodo(todo.id)}/>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App