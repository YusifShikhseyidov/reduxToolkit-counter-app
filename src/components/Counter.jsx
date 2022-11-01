import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from "../redux/counterSlice";

function Counter() {
    const [amount, setAmount] = useState(0);
    const counterValue = useSelector(state => state.counter.value);
    const dispatch = useDispatch();
  return (
    <div className='counter'>
        <h1>{counterValue}</h1>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <br /><br />
        <input type="number" value={amount} onChange={(e)=> setAmount(e.target.value)} />
        <button onClick={() => dispatch(incrementByAmount(+amount))}>Increment By Amount</button>
    </div>
  )
}

export default Counter;