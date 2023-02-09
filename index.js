/**
 * @param {Date} date Data que deseja formatar.
 * @param {String} options mascara options 'dd/mm/yyyy' ou 'dd/mm/yyyy hh:mm:ss'.
 * @returns {String} Returns a string containing the date with the specified format.
 */
function DateFormat(date, options) {
  return new Intl.DateTimeFormat('pt-BR', optionsDateTime(options)).formatToParts(date).map(({type, value}) => value).join('');
}

/**
 * @param {String} options mascara options 'dd/mm/yyyy' ou 'dd/mm/yyyy hh:mm:ss'.
 * @returns {Object} Returns object with mask date.
 */
function optionsDateTime(options) {
  /**
   * @type {Object} object that contains the date mask.
   */
  let maskDate;

  switch (options?.toLowerCase()) {
    case 'dd/mm/yyyy':
      maskDate = {
        timeZone: 'America/Sao_Paulo',
        day: '2-digit',
        month: '2-digit',
        year: '2-digit',
      };

      break;
    case 'dd/mm/yyyy hh:mm:ss':
      maskDate = {
        timeZone: 'America/Sao_Paulo',
        day: '2-digit',
        month: '2-digit',
        year: '2-digit',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false
      };

      break;
    default:
      maskDate = {
        timeZone: 'America/Sao_Paulo',
        day: '2-digit',
        month: '2-digit',
        year: '2-digit',
      };
    }

  return maskDate;
}

module.exports = {
  DateFormat
};
