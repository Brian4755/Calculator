import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case '9':
      return {
        output: state.output + '9'
      }
    default:
      return state
  }
}

const Calculator = () => {

  const[state, dispatch] = useReducer(reducer, { output: 0})

  function input9() {
    dispatch({type: '9'})
  }

  return ( 
    <div className="calculator">
      <div className="calculator-grid">
        <div className="calculator-output">
          {state.output}
        </div>
        <button className="calculator-button">7</button>
        <button className="calculator-button">8</button>
        <button className="calculator-button" onClick={input9}>9</button>
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