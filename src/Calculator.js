import { useReducer } from "react";
import Button from "./Button";
import Operation from "./Operation";

function reducer(state, {type, payload}) {
  switch (type) {
    case 'add-digit':
      if (state.output.length === 0 && payload.digit === 0) {
        return state
      } if (payload.digit === '.' && state.output.includes('.')) {
        return state
      } else return {
        ...state,
        output: state.output + `${payload.digit}`
      }
    case 'operation':
      if (state.output.length === 0 || state.prev) {
        return state
      } else return {
        prev: state.output + `${payload.operation}`,
        output: ''
      }
    case 'clear':
      return {
        output: ''
      }
    case 'evaluate':
      console.log(state.prev, state.output)
      return {
        output: parseInt(state.prev) + parseInt(state.output)
      }
    default:
      return state
  }
}


const Calculator = () => {

  const[state, dispatch] = useReducer(reducer, { output: '', prev: ''})

  return ( 
    <div className="calculator">
      <div className="calculator-grid">
        <div className="calculator-output">
          <div>{state.prev}</div>
          <div>{state.output}</div>
        </div>
        <Button digit={7} dispatch={dispatch}/>
        <Button digit={8} dispatch={dispatch}/>
        <Button digit={9} dispatch={dispatch}/>
        <Operation operation={'x'} dispatch={dispatch}/>
        <Button digit={4} dispatch={dispatch}/>
        <Button digit={5} dispatch={dispatch}/>
        <Button digit={6} dispatch={dispatch}/>
        <button className="calculator-button">/</button>
        <Button digit={1} dispatch={dispatch}/>
        <Button digit={2} dispatch={dispatch}/>
        <Button digit={3} dispatch={dispatch}/>
        <Operation operation={'+'} dispatch={dispatch}/>
        <button onClick={() => dispatch({type: 'evaluate'})}>=</button>
        <Button digit={0} dispatch={dispatch}/>
        <button onClick={() => dispatch({type: 'clear'})}>C</button>
        <Button digit={'.'} dispatch={dispatch}/>
      </div>
    </div>
   );
}
 
export default Calculator;