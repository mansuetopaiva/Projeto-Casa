import { on } from '../utils/turnOnOff';
import { off } from '../utils/turnOnOff';

export function Blender() {
  on();
  off();
  return <div>Blender</div>;
}
