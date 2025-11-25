import React, { useState, useEffect } from 'react';
function App() {
  const[time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => { //for every second
      setTime(new Date()); // Update time every second it is api
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '20%' }}>
      <h1>Current Time</h1>
      <h2>{time.toLocaleTimeString()}</h2>
    </div>

  

  );
}

export default App;
