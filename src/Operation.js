const Operation = ({dispatch, operation}) => {
  return ( 
    <button onClick={() => dispatch( {type: 'operation', payload: {operation}})}>
      {operation}
    </button>
   );
}
 
export default Operation;