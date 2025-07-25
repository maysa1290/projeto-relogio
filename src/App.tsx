// src/App.tsx

import { useEffect, useState } from 'react';
import { obterHorarioAtual } from './utils/tempo';

function App() {
  const [horario, setHorario] = useState(obterHorarioAtual());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHorario(obterHorarioAtual());
    }, 1000); // atualiza a cada segundo

    return () => clearInterval(intervalo); // limpa o intervalo ao desmontar
  }, []);

  return (
    <>
      <h1>Horário Atual</h1>
      <h1>{horario}</h1>
    </>
  );
}

export default App;
