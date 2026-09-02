import { useState, useEffect } from "react";
import './App.css';

function App() {

  const [like, setLike] = useState(0);
useEffect(() => {
  if (like >= 5) {
    alert("Curtidas em alta!");
  }
  },);



  return (
    <div>
      <h1>{like}</h1>

      <button onClick={() => setLike(like + 1)}>
        clique aqui
      </button>
    </div>
  );
}

export default App;