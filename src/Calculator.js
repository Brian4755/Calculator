import { useReducer } from "react";
import Button from "./Button";

function reducer(state, {type, payload}) {
  switch (type) {
    case 'add-digit':
      return {
        output: state.output + `${payload.digit}`
      }
      case 'plus':
        return {
          
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
        <button className="calculator-button">X</button>
        <Button digit={4} dispatch={dispatch}/>
        <Button digit={5} dispatch={dispatch}/>
        <Button digit={6} dispatch={dispatch}/>
        <button className="calculator-button">/</button>
        <Button digit={1} dispatch={dispatch}/>
        <Button digit={2} dispatch={dispatch}/>
        <Button digit={3} dispatch={dispatch}/>
        <button className="calculator-button">+</button>
        <button className="calculator-button">=</button>
        <Button digit={0} dispatch={dispatch}/>
        <button className="calculator-button">C</button>
        <button className="calculator-button">-</button>
      </div>
    </div>
   );
}
 
export default Calculator;