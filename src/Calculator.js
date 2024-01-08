import { useReducer } from "react";
import Button from "./Button";
import Operation from "./Operation";
import bigDecimal from 'js-big-decimal';

function reducer(state, {type, payload}) {
  switch (type) {
    case 'add-digit':
      if (state.output === '0') {
        return state
      }
       if (payload.digit === '.' && state.output.toString().includes('.')) {
        return state
      } else return {
        ...state,
        output: state.output + `${payload.digit}`
      }
    case 'operation':
      if (state.prev && state.output && state.operation) {
       return  {
         ...payload,
         prev: evaluate(parseInt(state.prev), state.operation,parseInt(state.output)),
         output: ''
       }
      } 
      if (state.prev === '' && state.output === '' && payload.operation === '-') {
        return {
          output: payload.operation,
        }
      } 
      else if (state.output && state.output !== '-') {
        return {
          ...payload,
          prev: state.output,
          output: ''
        }
      } else if (state.prev) {
        return {
          ...payload,
          prev: state.prev,
          output: ''
        }
      }
      else return state
      case 'evaluate':
      if (state.prev && state.operation && state.output) {
        return {
          prev: evaluate(parseFloat(state.prev), state.operation,parseFloat(state.output)),
          output: ''
        }
      } else return state
    case 'clear':
      return {
        prev: '',
        output: '',
        operation: ''
      }
    default:
      return state
  }
}

function evaluate(firstNum, operation, secondNum) {
  let solution = ''
  switch(operation) {
    case '+':
      solution = bigDecimal.add(firstNum, secondNum)
      break
    case '-':
      solution = bigDecimal.subtract(firstNum, secondNum)
      break
    case '*':
      solution = bigDecimal.multiply(firstNum, secondNum)
      break
    case '/':
      solution = bigDecimal.divide(firstNum, secondNum)
      break
      default: return ''
    }
    return solution
}

const Calculator = () => {
  const[state, dispatch] = useReducer(reducer, { output: '', prev: '', operation: ''})
  return ( 
    <div className="calculator">
      <div className="calculator-grid">
        <div className="calculator-output">
          <div className="previous-output">{state.prev}{state.operation}</div>
          <div>{state.output}</div>
        </div>
        <button className="clear-button" onClick={() => dispatch({type: 'clear'})}>C</button>
        <Operation operation={'/'} dispatch={dispatch}/>
        <Operation operation={'*'} dispatch={dispatch}/>
        <Operation operation={'-'} dispatch={dispatch}/>
        <Button digit={7} dispatch={dispatch}/>
        <Button digit={8} dispatch={dispatch}/>
        <Button digit={9} dispatch={dispatch}/>
        <Button digit={4} dispatch={dispatch}/>
        <Button digit={5} dispatch={dispatch}/>
        <Button digit={6} dispatch={dispatch}/>
        <Operation operation={'+'} dispatch={dispatch}/>
        <Button digit={1} dispatch={dispatch}/>
        <Button digit={2} dispatch={dispatch}/>
        <Button digit={3} dispatch={dispatch}/>
        <Button digit={0} dispatch={dispatch}/>
        <Button digit={'.'} dispatch={dispatch}/>
        <button className="evaluate-button" onClick={() => dispatch({type: 'evaluate'})}>=</button>
      </div>
    </div>
   );
}

export default Calculator;