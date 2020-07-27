import React, { useState, useEffect } from 'react'
import './CourseRate.scss'

import CourseRateItem from '../CourseRateItem/CourseRateItem.js'
import ExchangeRates from '../../services/ExchangeRates.js'
import Loader from '../Loader/Loader.js'
import ErrorMessage from '../ErrorMessage/ErrorMessage.js'

// компонент який отримує данні з API
const CourseRate = () => {  

	const [ typeRates, setTypeRates ] = useState('inCash');
	const [ courseRates, setCourseRates ] = useState([]);
	const [ loading, setLoading ] = useState(true);
	const [ error, setError ] = useState(false);

	useEffect(() => {
		const exchangeRates = new ExchangeRates();
		
		const setRates = (type) => { 									// загружає данні з серверу					
			exchangeRates
		   	.getPrivat24Rates(type) 
		   	.then(onCourseLoaded)
		   	.catch(onError)  	
		};

		setRates(typeRates);
	}, [ typeRates ]);

	const onCourseLoaded = (rates) => {		
		setCourseRates(rates);
		setLoading(false);
	};

	const onError = () => {
		setError(true);
		setLoading(false);
	}; 

	const handleChange = (event) => {
   	setTypeRates(event.target.value);
   	setLoading(true);
   };

	if (loading) {
		return (
			<div className="exchange-rates">
				<Loader/>
			</div>
		)
	};

	if (error) {
		return (
			<div className="exchange-rates">
				<ErrorMessage message="Ой, щось пішло не так :("/>
			</div>
		)
	};

	// оброблює дані отримані з серверу
	const currentRates = courseRates.map( (currency) => {
		return (
			<tr key={ currency.ccy }>
				<CourseRateItem { ...currency }/>
			</tr>
		)
	});

	return (
		<div className="exchange-rates">

			<div className="course-header">
				<h2>Курси валют (ПриватБанк)</h2>

				<select className ="select-css" defaultValue={typeRates} onChange={handleChange}>
					<option value="inCash">У відділеннях</option>
					<option value="inCard">Для карт</option>
					{//<option value="nby">НБУ</option>
					}
				</select>
			</div>

			<div className="course-rate">
				<table>
					<thead>
						<tr>
							<td></td>
							<td></td>
							<td>Покупка</td>
							<td>Продажа</td>
						</tr>
					</thead>
					<tbody>
						{ currentRates }
					</tbody>
				</table>
			</div>

		</div>
	)
}


export default CourseRate;
