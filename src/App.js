import { useState } from 'react';

function App() {
  const [total, setTotal] = useState(0);

  return (
    <>
      <h1>{total}</h1>
      <button onClick={() => setTotal(total + 1)}>Add</button>
      <button onClick={() => setTotal(total - 1)}>Minus</button>
    </>
  );
}
export default App;
