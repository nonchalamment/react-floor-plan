const Bath = (props) => {
  return ( 
    <div className={`${props.size}-bath`}>
      <h3>{props.size[0].toUpperCase() + props.size.slice(1)} Bath</h3>
    </div>
   );
}
 
export default Bath;