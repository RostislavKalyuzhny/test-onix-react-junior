export default class ExchangeRates {
apiBase = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=';

async getResource(id) {
  /* eslint no-return-await: 0 */
  const res = await fetch(`${this.apiBase}${id}`);

  if (!res.ok) {
    throw new Error(`Помилка в ${this.apiBase}${id}, статус: ${res.status}`);
  }
  return await res.json();
}

// у відділеннях (5 - базовий, 4 - розширеный); на картку (11 -базовий, 12 - розширений).
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
