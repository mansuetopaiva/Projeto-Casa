import { on } from '../utils/turnOnOff';
import { off } from '../utils/turnOnOff';

export function Monitor() {
  on();
  off();
  return <div>Monitor</div>;
}
