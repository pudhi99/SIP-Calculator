
import React, { Children } from 'react'

function FormatCurrency({children}) {
  const formatCurrency = (amount) => {
    const money =  new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
    return money
  };
  
  return (
    <div><p className='heading'>{formatCurrency(children)}</p></div>
  )
}

export default FormatCurrency