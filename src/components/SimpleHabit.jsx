import React, { useState, useRef, useEffect } from 'react';

// function component는 when a change has been made, all of these
// are rendered again; every variables need to be executed again
// BUT useState is a React Hooks and it remembers the variable
const SimpleHabit = (props) => {
  const [count, setCount] = useState(0);
  const spanRef = useRef(); //React.createRef();

  const handleIncrement = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log(`${count}`);
  }, []);

  return (
    <li className='habit'>
      <span ref={spanRef} className='habit-name'>
        Reading
      </span>
      <span className='habit-count'>{count}</span>
      <button className='habit-button habit-increase' onClick={handleIncrement}>
        <i className='fas fa-plus-square'></i>
      </button>
    </li>
  );
};

export default SimpleHabit;
