import { open } from '../utils/turnOpenClose';
import { close } from '../utils/turnOpenClose';

export function Door() {
  open();
  close();
  return <div>Door</div>;
}
