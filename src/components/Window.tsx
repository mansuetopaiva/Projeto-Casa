import { open } from '../utils/turnOpenClose';
import { close } from '../utils/turnOpenClose';

function lockUnlock(){

}

export function Window() {
  open();
  close();
  return <div>Window</div>;
}
