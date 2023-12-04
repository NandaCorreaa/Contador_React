import { useState } from 'react';
import './App.css'

function App() {
  const [Numero, setNumero] = useState(0);
  const diminuir = () => {
    setNumero(Numero - 1);
  };
  const aumentar = () => {
    setNumero(Numero + 1);
  };
  const reset = () => {
    setNumero(0);
  };

  return (
    <div className="App">
      <h1>CONTADOR</h1>
      <h2>Contando de 0 a 10</h2>
      <div className="caixaContador">
        <h3>{Numero}</h3>
        <div className="botoes">
          <button onClick={diminuir} disabled={Numero === 0} className="sinais">
            -
          </button>
          <button onClick={reset} className="reset">
            RESET
          </button>
          <button
            onClick={aumentar}
            disabled={Numero === 10}
            className="sinais"
          >
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
