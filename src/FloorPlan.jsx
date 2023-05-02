import Bedroom from "./Bedroom";
import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import Bath from "./Bath";

const FloorPlan = (props) => {
  return ( 
    <div>
      <Bedroom key={props.bedNum} bedNum={props.bedNum[0]} />
      <Kitchen />
      <Bedroom key={props.bedNum} bedNum={props.bedNum[1]} />
      <Bath key={props.size} size={props.size[0]}/>
      <LivingRoom />
      <Bath key={props.size} size={props.size[1]}/>
      <Bedroom key={props.bedNum} bedNum={props.bedNum[2]} />
    </div>
   );
}
 
export default FloorPlan;