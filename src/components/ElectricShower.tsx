import { on } from '../utils/turnOnOff';
import { off } from '../utils/turnOnOff';

export function ElectricShower() {
  on();
  off();
  return <div>ElectricShower</div>;
}
