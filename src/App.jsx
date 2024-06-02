import { useCallback, useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const [users, setUsers] = useState(null);

  const fecthData = useCallback(async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log("esta es data", data);
    setUsers(data);
  }, []);

  useEffect(() => {
    console.log("useEfect");
    fecthData();
  }, []);

  if (users === null) return <div>Cargando ...</div>;

  return (
    <>
      <h1>Ue efect</h1>
      <button onClick={() => setCount(count + 1)}>Counter: {count}</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
