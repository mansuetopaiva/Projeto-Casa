import { on } from '../utils/turnOnOff';
import { off } from '../utils/turnOnOff';

export function Camera() {
  on();
  off();
  return <div>Camera</div>;
}
