import './App.css';
import { useEffect, useState } from 'react';
import { obterHorarioAtual } from './utils/tempo';
import { obterDataAtual } from './utils/tempo';

function App() {

  const [horario, setHorario] = useState(obterHorarioAtual());
  const [data, setData] = useState(obterDataAtual());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHorario(obterHorarioAtual());
      setData(obterDataAtual());
    }, 1000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <>
      <h1>Horário Atual</h1>
      <h2>{data}</h2>
      <h1>{horario}</h1>
    </>
  );
}

export default App;