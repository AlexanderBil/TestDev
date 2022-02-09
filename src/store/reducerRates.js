const defaultState = {
    date: '',
    currencyRate: {},
    dataToConvert: 'UAH'
}

export const reducerRates = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_DATE":
            return {...state, date: action.payload}
               case "SET_CURRENCY":
                  return {...state, currencyRate: action.payload}
                    case "SET_INPUT_DATA":
                      return {...state, dataToConvert: action.payload}
            default:
                return state
    }
}