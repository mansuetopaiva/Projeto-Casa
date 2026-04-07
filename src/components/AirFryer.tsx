import { on } from '../utils/turnOnOff';
import { off } from '../utils/turnOnOff'; 
import { open } from '../utils/turnOpenClose';
import { close } from '../utils/turnOpenClose';

export function AirFryer() {
  on();
  off();
  open();
  close();
  return <div>AirFryer</div>;
}
