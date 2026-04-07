import { on } from '../utils/turnOnOff';
import { off } from '../utils/turnOnOff';

export function Fan() {
  on();
  off();
  return <div>Fan</div>;
}
