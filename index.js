const { optionsDateTime } = require('./utils/maskDate')

/**
 * @param {Date} date Date you want to format.
 * @param {String} options mascara options 'dd/mm/yyyy' ou 'dd/mm/yyyy hh:mm:ss'.
 * @returns {String | Function} Returns a string containing the date with the specified format.
 */
function DateFormat(date, options) {

  let resultDate = new Intl.DateTimeFormat('pt-BR', optionsDateTime(options?.toLowerCase()))
    .formatToParts(date).map(({ type, value }) => {
      if (options) return options.includes('-') ? (value == '/' ? '-' : value) : value;

      if (!options) return value == '/' ? '-' : value;
    });

  if (!options) {
    resultDate = resultDate.reverse().join('').split(' ');
    return resultDate[1] + ' ' + resultDate[0].replace(',', '').split(':').join(':');
  } else {
    if (options.includes('-')) {
      resultDate = resultDate.reverse().join('').split(' ');
      return resultDate.length > 1 ? resultDate[1] + ' ' + resultDate[0].split(':').reverse().join(':').replace(',', '') : resultDate.join('');
    } else {
      return resultDate.join('').replace(',', '');
    }
  }
}

module.exports = {
  DateFormat
};
