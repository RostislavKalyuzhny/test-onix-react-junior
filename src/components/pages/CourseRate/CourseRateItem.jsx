import React from 'react';

const CourseRateItem = ({
  ccy, baseCcy, buy, sale,
}) => (
  <>
    <td>{ ccy }</td>
    <td>{ baseCcy }</td>
    <td>{ (+buy).toFixed(3) }</td>
    <td>{ (+sale).toFixed(3) }</td>
  </>
);

export default CourseRateItem;
