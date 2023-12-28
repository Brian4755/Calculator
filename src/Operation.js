const Operation = ({dispatch, operation}) => {
  return ( 
    <button className={operation==='+' ? 'operation-span-two' : 'operation-span-one'} onClick={() => dispatch( {type: 'operation', payload: {operation}})}>
      {operation}
    </button>
   );
}
 
export default Operation;