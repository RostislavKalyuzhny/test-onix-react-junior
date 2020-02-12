import React from 'react'

import './CourseRateItem.css'

const CourseRateItem = ({ ccy, base_ccy, buy, sale }) => {

	return (
		<React.Fragment>
			<td>{ ccy }</td>
			<td>{ base_ccy }</td>
			<td>{ (+buy).toFixed(3) }</td>
			<td>{ (+sale).toFixed(3) }</td>
		</React.Fragment>
	)
}

export default CourseRateItem;