import { useReducer } from "react";
import Button from "./Button";
import Operation from "./Operation";

function reducer(state, {type, payload}) {
  console.log(state.output)
  switch (type) {
    case 'add-digit':
      if (state.output.length === 0 && payload.digit === 0) {
        return state
      } if (payload.digit === '.' && state.output.includes('.')) {
        return state
      } else return {
        output: state.output + `${payload.digit}`
      }
      case 'plus':
        return {
          
        }
      case 'clear':
        return {
          output: ''
        }
    default:
      return state
  }
}

const Calculator = () => {

  const[state, dispatch] = useReducer(reducer, { output: ''})

  return ( 
    <div className="calculator">
      <div className="calculator-grid">
        <div className="calculator-output">
          {state.output}
        </div>
        <Button digit={7} dispatch={dispatch}/>
        <Button digit={8} dispatch={dispatch}/>
        <Button digit={9} dispatch={dispatch}/>
        {/* <button className="calculator-button">X</button> */}
        <Operation operation={'x'} dispatch={dispatch}/>
        <Button digit={4} dispatch={dispatch}/>
        <Button digit={5} dispatch={dispatch}/>
        <Button digit={6} dispatch={dispatch}/>
        <button className="calculator-button">/</button>
        <Button digit={1} dispatch={dispatch}/>
        <Button digit={2} dispatch={dispatch}/>
        <Button digit={3} dispatch={dispatch}/>
        {/* <button className="calculator-button">+</button> */}
        <Operation operation={'+'} dispatch={dispatch}/>
        <button className="calculator-button">=</button>
        <Button digit={0} dispatch={dispatch}/>
        <button onClick={() => dispatch({type: 'clear'})}>C</button>
        <Button digit={'.'} dispatch={dispatch}/>
      </div>
    </div>
   );
}
 
export default Calculator;