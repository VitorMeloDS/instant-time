/**
 * @param {String} options mascara options 'dd/mm/yyyy' ou 'dd/mm/yyyy hh:mm:ss'.
 * @returns {Object} Returns object with mask date.
 */
function optionsDateTime(options) {
  /**
   * @type {Object} object that contains the date mask.
   */
  let maskDate;

  switch (options) {
    case 'dd/mm/yyyy':
      maskDate = {
        timeZone: 'America/Sao_Paulo',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      };

      break;
    case 'dd/mm/yyyy hh:mm:ss':
      maskDate = {
        timeZone: 'America/Sao_Paulo',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false,
      };

      break;
    case 'yyyy-mm-dd':
      maskDate = {
        timeZone: 'America/Sao_Paulo',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      };

      break;
    case 'yyyy-mm-dd hh:mm:ss':
      maskDate = {
        timeZone: 'America/Sao_Paulo',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false,
      };

      break;
    default:
      maskDate = {
        timeZone: 'America/Sao_Paulo',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false,
      };
  }

  return maskDate;
}

module.exports = {
  optionsDateTime
};
