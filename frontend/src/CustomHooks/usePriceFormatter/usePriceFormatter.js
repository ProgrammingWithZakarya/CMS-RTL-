import React, { useEffect, useState } from 'react';



const usePriceFormatter = (productPrice) => {
    const [priceFormat, setPriceFormat] = useState(productPrice)
    const formatPrice =(price) => {
        const formatter = new Intl.NumberFormat('en-US', {
            style : "currency",
            currency : "IRT",
            currencyDisplay : 'symbol',
            minimumFractionDigits : 0,
        });
        return formatter.format(price)
    } ;
    useEffect(() => {
        setPriceFormat(formatPrice(productPrice))
    } ,[productPrice]);
    return [priceFormat , setPriceFormat];
} 
export default usePriceFormatter