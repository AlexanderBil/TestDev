import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Rate.css';

function Rate() {
  const dispatch = useDispatch();
  const date = useSelector(state => state.rates.date);
  const currencyRate = useSelector(state => state.rates.currencyRate);
  const dataToConvert = useSelector(state => state.rates.dataToConvert);


  const addDate = (date) => {
    dispatch({type: "SET_DATE", payload: date })
  }

  const addCurrency = (data) => {
    for(let key in data) {
      if(key !== dataToConvert){
        data[key] = data[dataToConvert]/data[key]
      } 
    }
    data[dataToConvert] = 1;
    dispatch({type: "SET_CURRENCY", payload: data})
  }

  const addDataToConvert = (inputData) => {
    dispatch({type: "SET_INPUT_DATA", payload: inputData })
  }

useEffect(() => {
  fetch (`http://data.fixer.io/api/latest?access_key=0269fc1a1987642f1701c2d415739685&symbols=USD,GBP,RUB,CAD,PLN,UAH,EUR`)
  .then(data => {
    return data.json()
  })
  .then(data => {
    addDate(data.date);
    addCurrency(data.rates);
    })

  if (localStorage.getItem("hasCodeRunBefore") === null) {
      let currency = prompt('Enter currency', 'UAH');
      currency !== null ? addDataToConvert(currency) : addDataToConvert('UAH')
      localStorage.setItem("hasCodeRunBefore", true);
  }
}, [dataToConvert]);


return(
  <div className="rate">
    <div className="rate-title">Exchange rates for {date}</div>
    <div className='info'>
       <span>Change current exchange rate:</span>
      <input onChange={(e) => addDataToConvert(e.target.value)} type="text" />
    </div>
    {Object.keys(currencyRate).map((item, i) =>
            ( 
            <div className="rate-block" key = {i}>
            <div className="rate-block-out">For 1 {item} you can buy:</div>
            <div className="rate-block-in" >{currencyRate[item].toFixed(2)}</div>
            <div className="rate-block-name">{dataToConvert}</div>
           </div>
           )
            )}
  </div>
)
}

export default Rate;
