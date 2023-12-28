const Button = ({dispatch, digit}) => {
  return ( 
    <button className={digit === 0 ? "span-two" : 'span-one'} onClick={() => dispatch({ type: 'add-digit', payload: {digit}})}>
      {digit}
    </button>
   );
}
 
export default Button;