

export default class ExchangeRates {

	_apiBase = `https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=`;

	async getResource(id){
		const res = await fetch(`${this._apiBase}${id}`);

		if (!res.ok) {
			throw new Error(`Помилка в ${this._apiBase}${id}, статус: ${res.status}`);
		}
		return await res.json();
	}

	//у відділеннях (5 - базовий, 4 - розширеный); на картку (11 -базовий, 12 - розширений).
	getPrivat24Rates(type){ 
		let apiId;

		switch(type){  
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

	





	
