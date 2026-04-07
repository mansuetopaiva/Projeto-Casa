import { on } from '../utils/turnOnOff';
import { off } from '../utils/turnOnOff';

export function TV() {
  on();
  off();
  return <div>TV</div>;
}
