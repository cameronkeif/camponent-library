import React, { useState } from 'react';

const Counter: React.FC = ({}) => {
  const [count, setCount] = useState<number>(0);

  const increment = (): void => setCount(count + 1);
  const decrement = (): void => setCount(count - 1);

  return (
    <>
      Count: {count}
      <div>
        <button onClick={increment} style={{ marginRight: 10 }}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </>
  );
};

export default Counter;
