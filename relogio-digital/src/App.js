import { useState, useEffect } from 'react';
import './App.css';

function App() {
const [hora, definirHora] = useState (new Date());

useEffect(() => {
  setInterval(() =>{
    definirHora(new Date());
  },);
},);

return(

  <h1>{hora.toLocaleTimeString()}</h1>
)
}
export default App;
