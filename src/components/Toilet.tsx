import { on } from '../utils/turnOnOff';
import { off } from '../utils/turnOnOff';

export function Toilet() {
  on();
  off();
  return <div>Toilet</div>;
}
