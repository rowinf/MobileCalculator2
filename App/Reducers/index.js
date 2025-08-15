import { combineReducers } from 'redux'
import CalculatorReducer from './CalculatorReducer'

// glue all the reducers together into 1 root reducer
export default combineReducers({
  calculator: CalculatorReducer
})
