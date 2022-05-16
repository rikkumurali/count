import React, { useState } from 'react'

const Count = () => {
    const [num, setNum] = useState(0);
        const incre = () => {
            setNum((num) => num + 1);
        }
        const decre = () => {
            setNum((num) => num - 1);
        }
        const reset = () => {
            setNum(0);
        }


    return (
        <>
            <h1>{num}</h1>
            <button onClick={incre}>Increment</button>
            <button onClick={decre}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </>
    )
}

export default Count