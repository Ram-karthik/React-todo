import React, { useEffect, useState } from 'react'
import { FaPlus } from "react-icons/fa";

const UseEffect = () => {

  const [count, setCount] = useState(0);
  const [calc, setCalc] = useState(0);

  useEffect(() => {
    setCalc(() => count * 2);
  }, [count])

  return (
    <div>
      <p>Count: <strong>{count}</strong></p>
      <button className='bg-success btn' onClick={() => setCount((c) => c + 1)}>
        <FaPlus className='h-100' />
      </button>
      <p>Calc: <strong>{calc}</strong></p>
    </div>
  )
}

export default UseEffect