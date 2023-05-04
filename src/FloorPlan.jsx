import Bedroom from "./Bedroom";
import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import Bath from "./Bath";

const FloorPlan = (props) => {
  return ( 
    <div className='floorplan'>
      <Bedroom key={props.bedNum[0]} bedNum={props.bedNum[0]} />
      <Kitchen />
      <Bedroom key={props.bedNum[1]} bedNum={props.bedNum[1]} />
      <Bath key={props.size[0]} size={props.size[0]}/>
      <LivingRoom />
      <Bath key={props.size[1]} size={props.size[1]}/>
      <Bedroom key={props.bedNum[2]} bedNum={props.bedNum[2]} />
    </div>
   );
}
 
export default FloorPlan;