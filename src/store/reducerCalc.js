const defaultState = {
    inputNumber: '',
    inputFrom: '',
    inputTo: '',
}

export const reducerCalc = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_INPUT_NUMBER":
            return {...state, inputNumber: action.payload}
            case "SET_INPUT_FROM":
                return {...state, inputFrom: action.payload}
            case "SET_INPUT_TO":
                return {...state, inputTo: action.payload}
            default:
                return state
    }
}