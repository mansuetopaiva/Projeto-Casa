import { on } from '../utils/turnOnOff';
import { off } from '../utils/turnOnOff';

export function Charger() {
  on();
  off();
  return <div>Charger</div>;
}
