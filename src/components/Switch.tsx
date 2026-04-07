import { on } from '../utils/turnOnOff';
import { off } from '../utils/turnOnOff';

export function Switch() {
  on();
  off();
  return <div>Switch</div>;
}
