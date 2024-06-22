import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "../redux/counter/counterSlice";

function Counter() {
    const [amount, setAmount] = useState(3);
    const countValue = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();


    const buttonStyle = { 
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center',
        color:'white',
        border:'none',
        height:40,
        width:100,
        cursor:'pointer'
    }
    return (
        <div>
            <h1>{countValue}</h1> 
            <button style={buttonStyle} onClick={() => dispatch(decrement())}>Decrement</button>
            <button style={{ ...buttonStyle,  backgroundColor:'green', marginLeft:10 }} onClick={() => dispatch(increment())}>Increment</button>
            <br />
            <br />
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}/>
        <button onClick={() => dispatch(incrementByAmount(amount))}>Increment By Amount</button>
        </div>
    );
}

export default Counter;