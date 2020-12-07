/**
 * @namespace Exchange Rates
 */

export default class ExchangeRates {
apiBase = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=';

/**
 * Create a request to the server by id
 * In branch office (5 - basic, 4 - extended)
 * In the card (11 -base, 12 - advanced)
 *
 * @memberOf Exchange Rates
 * @param  {Number} id Request parameter
 * @return {Array} Array of objects with data about the exchange rate
 * @example
 *
 * getResource(5);
 * => [   
 *        {"ccy":"USD","base_ccy":"UAH","buy":"28.10000","sale":"28.50000"},
 *        {"ccy":"EUR","base_ccy":"UAH","buy":"33.95000","sale":"34.55000"},
 *        {"ccy":"RUR","base_ccy":"UAH","buy":"0.36000","sale":"0.40000"},
 *        {"ccy":"BTC","base_ccy":"USD","buy":"18261.3815","sale":"20183.6321"}
 *    ]
 */
async getResource(id) {
  /* eslint no-return-await: 0 */
  const res = await fetch(`${this.apiBase}${id}`);

  if (!res.ok) {
    throw new Error(`Помилка в ${this.apiBase}${id}, статус: ${res.status}`);
  }
  return await res.json();
}

/**
 * Сonverts the text currency type to the desired number and makes a request
 *
 * @memberOf Exchange Rates
 * @param  {String} type Currency type
 * @return {Array} Array of objects with data about the exchange rate
 */
getPrivat24Rates(type) {
  let apiId;

  switch (type) {
    case 'inCash': apiId = 5;
      break;

    case 'inCashAll': apiId = 4;
      break;

    case 'inCard': apiId = 11;
      break;

    case 'inCardAll': apiId = 12;
      break;

    default:
      apiId = 0;
  }

  return this.getResource(apiId);
}
}
