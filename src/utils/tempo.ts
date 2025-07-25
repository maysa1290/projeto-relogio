export function obterHorarioAtual(): string {
  const agora = new Date();
  return agora.toLocaleTimeString('pt-BR', { hour12: false });
}

export function obterDataAtual(): string {
  const agora = new Date();
  return agora.toLocaleDateString('pt-BR', {
    weekday: 'long',  // segunda-feira, terça-feira, etc.
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}