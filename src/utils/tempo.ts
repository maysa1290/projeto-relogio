export function obterHorarioAtual(): string {
  const agora = new Date();
  return agora.toLocaleTimeString('pt-BR', {hour12: false});
}
