import { on } from '../utils/turnOnOff';
import { off } from '../utils/turnOnOff';


export function AirConditioner() {
  on();
  off();
  return <div>AirConditioner</div>;
}
