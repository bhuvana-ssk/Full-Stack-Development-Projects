import React, { useState } from 'react';
function Counter() {

const [count, setCount] = useState(0);
const incrementCount = () => {
  setCount(count + 1);
};
const decrementCount = () => {
  setCount(count - 1);
};

return (
    <div style={{backgroundColor:'skyblue', height:'600px',marginTop:'-10px'}}>
      <center>
      <h1 style={{color:'darkblue',fontSize:'45px'}}>Counter App</h1>
      <h1>Count: {count}</h1>
      <button onClick={incrementCount} style={{height:'50px',width:'50px',fontSize:'30px'}}>+</button>
      <button onClick={decrementCount} style={{marginLeft:'40px',height:'50px',width:'50px',fontSize:'30px'}}>-</button>
      </center>
    </div>
  );
}
export default Counter;