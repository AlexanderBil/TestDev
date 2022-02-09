import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Calc.css';

function Calc () {
  const dispatch = useDispatch();

  const inputNumber = useSelector(state => state.calc.inputNumber);
  const inputFrom = useSelector(state => state.calc.inputFrom);
  const inputTo = useSelector(state => state.calc.inputTo);
  const dataToConvert = useSelector(state => state.rates.dataToConvert);
  const currencyRate = useSelector(state => state.rates.currencyRate);

  const [inputData, setInputData] = useState('');
  const [resultData, setResultData] = useState(0);


  useEffect(() => {
    const data = inputData.split(' ');
    dispatch({type: "SET_INPUT_NUMBER", payload: parseInt(data[0])})
    dispatch({type: "SET_INPUT_FROM", payload: data[1]})
    dispatch({type: "SET_INPUT_TO", payload: data[3]})
  }, [inputData])


  const converter = () => {
     let result = 0;
     for (let key in currencyRate) {
       if(key === inputFrom) {
         result = currencyRate[inputTo]*(inputNumber*currencyRate[key]);
       }
     }
     setResultData(result.toFixed(2))
  }

  return(
    <div className='calc'>
      <div>
        <span>You have chosen to convert in {dataToConvert}</span>
        <input onChange={(e) => setInputData(e.target.value)} type="text" />
      </div>
        <button onClick={() => converter()}>Get result</button>
        <div className='resultInfo'>
          <span>Result: {resultData} {dataToConvert}</span>
        </div>
    </div>
  )
}

export default Calc;

