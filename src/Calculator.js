import { useReducer } from "react";
import Button from "./Button";
import Operation from "./Operation";

function reducer(state, {type, payload}) {
  switch (type) {
    case 'add-digit':
      console.log(typeof(state.output), 'here')
      console.log(state.output)
      if (!state.output && payload.digit === 0) {
        return state
      } if (payload.digit === '.' && state.output.toString().includes('.')) {
        return state
      } else return {
        ...state,
        output: state.output + `${payload.digit}`
      }
    case 'operation':
      if (!state.prev && state.output) {
        return {
          ...payload,
          prev: state.output,
          output: ''
        }
      } 
      if (state.prev && state.output) {
       return  {
         ...payload,
         prev: evaluate(parseInt(state.prev), state.operation,parseInt(state.output)),
         output: ''
       }
      } else return state
    case 'evaluate':
      console.log('evaluate', state.prev, typeof(state.prev))
      if (state.prev && state.operation && state.output) {
        return {
          output: evaluate(parseFloat(state.prev), state.operation,parseFloat(state.output))
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
      console.log(typeof(firstNum), firstNum, typeof(secondNum), secondNum)
      solution = firstNum + secondNum
      break
    case '-':
      solution = firstNum - secondNum
      break
    case 'x':
      solution = firstNum * secondNum
      break
    case '/':
      solution = firstNum / secondNum
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
        <button onClick={() => dispatch({type: 'clear'})}>C</button>
        <Operation operation={'/'} dispatch={dispatch}/>
        <Operation operation={'x'} dispatch={dispatch}/>
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