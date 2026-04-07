import { on } from '../utils/turnOnOff';
import { off } from '../utils/turnOnOff';

export function WaterFountain() {
  on();
  off();
  return <div>WaterFountain</div>;
}
