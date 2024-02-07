import React, { useRef, useState } from 'react'

const StateVsRef = () => {

    const [count, setCount] = useState(0);
    const counterRef = useRef(0);

    const handleState = () => {
        setCount(count + 1);
    }

    const handleRef = () => {
        counterRef.current++;
    }

    return (
        <div>
            <span>StateVsRef</span>
            <p>State Counter: <strong>{count}</strong></p>
            <p>Ref Counter: <strong>{counterRef.current}</strong></p>
            <div className='d-flex g-10'>
                <button className='bg-primary' onClick={() => handleState()}>Increment Counter</button>
                <button className='bg-success' onClick={() => handleRef()}>Increment Ref</button>
            </div>
        </div>
    )
}

export default StateVsRef