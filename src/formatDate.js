/**
 * 
 * @param {Date} date Data que deseja formatar.
 * @returns {String} Retona uma string contendo a data com o formato especificado.
 */
function DateFormat (date) {
  return new Intl.DateTimeFormat('pt-BR', {
    timeZone: 'America/Sao_Paulo',
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
    weekday: 'long'
  }).formatToParts(date).map(({type, value}) => value).join('');
}

let result = DateFormat(new Date());

console.log(result);