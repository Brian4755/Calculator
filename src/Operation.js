const Operation = ({dispatch, operation}) => {
  return ( 
    <button className={operation==='+' ? 'horizontal-span' : null} onClick={() => dispatch( {type: 'operation', payload: {operation}})}>
      {operation}
    </button>
   );
}
 
export default Operation;