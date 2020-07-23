export const formatActualDateForDayWithMonthAndYear = (): string => {
  const actualDate = new Date();
  const month = [
    'Janeiro',
    'Feveiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];
  const result = `${actualDate.getDate()} de ${
    month[actualDate.getMonth()]
  }, ${actualDate.getFullYear()}`;

  return result;
};

export const formatDateTimeFromTimeStamp = (timestamp: number): string => {
  const date = new Date(timestamp * 1000);
  const hours = date.getHours();
  const minutes = `0${date.getMinutes()}`;

  return `${hours}:${minutes.substr(-2)}`;
};
