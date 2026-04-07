import { open } from '../utils/turnOpenClose';
import { close } from '../utils/turnOpenClose';

export function SlidingGlassDoor() {
  open();
  close();
  return <div>SlidingGlassDoor</div>;
}
