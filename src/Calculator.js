import { useReducer } from "react";
import Button from "./Button";

function reducer(state, {type, payload}) {
  switch (type) {
    case 'add-digit':
      console.log()
      return {
        output: state.output + `${payload.digit}`
      }
    default:
      return state
  }
}

const Calculator = () => {

  const[state, dispatch] = useReducer(reducer, { output: ''})

  // function handleAddDigit(payload) {
  //   dispatch({type: 'add-digit', payload: payload})
  // }

  return ( 
    <div className="calculator">
      <div className="calculator-grid">
        <div className="calculator-output">
          {state.output}
        </div>
        <Button digit={7} dispatch={dispatch}/>
        {/* <button className="calculator-button">7</button> */}
        <button className="calculator-button">8</button>
        <button className="calculator-button">9</button>
        <button className="calculator-button">X</button>
        <button className="calculator-button">4</button>
        <button className="calculator-button">5</button>
        <button className="calculator-button">6</button>
        <button className="calculator-button">/</button>
        <button className="calculator-button">1</button>
        <button className="calculator-button">2</button>
        <button className="calculator-button">3</button>
        <button className="calculator-button">+</button>
        <button className="calculator-button">=</button>
        <button className="calculator-button">0</button>
        <button className="calculator-button">C</button>
        <button className="calculator-button">-</button>
      </div>
    </div>
   );
}
 
export default Calculator;