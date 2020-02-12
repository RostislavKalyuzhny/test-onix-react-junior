import React, { Component } from 'react'
import './CourseRate.css'

import CourseRateItem from '../CourseRateItem/CourseRateItem.js'
import ExchangeRates from '../../services/ExchangeRates.js'
import Loader from '../Loader/Loader.js'
import ErrorMessage from '../ErrorMessage/ErrorMessage.js'

// компонент який отримує данні з API
export default class CourseRate extends Component {  
	
	constructor(){
		super();
		this.updateRates(this.state.typeRates);
	}

	exchangeRates = new ExchangeRates(); 	// API клієнт

	state = {
		typeRates: "inCash", 					// тип валют ( inCash - в відділенях; inCard - для карт)
		courseRates: [], 							// валюти загружені з серверу
		loading: true,
		error: false,
	};

	updateRates(type){ 							// загружає данні з серверу
		this.exchangeRates
	   	.getPrivat24Rates(type) 
	   	.then( this.onCourseLoaded )
	   	.catch( this.onError )
	}

	onCourseLoaded = (rates) => {		
		this.setState({ 
			courseRates: rates,
			loading: false,
		});
	};

	onError = () => {
		this.setState({
			error: true,
			loading: false,
		});
	}; 

	handleChange = async (event) => {
   	await this.setState( {
   		typeRates: event.target.value,
   		loading: true,
   	});
   	this.updateRates(this.state.typeRates);
   };

	render(){

		const { courseRates, typeRates, loading, error } = this.state;

		if (loading) {
			return (
				<div className="exchange-rates">
					<Loader/>
				</div>
			)
		}

		if (error) {
			return (
				<div className="exchange-rates">
					<ErrorMessage message="Ой, щось пішло не так :("/>
				</div>
			)
		}

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
					<span>Курси валют (ПриватБанк)</span>

					<select className ="select-css" defaultValue={ typeRates } onChange={this.handleChange}>
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
}


