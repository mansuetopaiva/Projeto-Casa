import { up } from '../utils/turnUpDown';
import { down } from '../utils/turnUpDown'; 

export function AutomaticCurtain() {
  up();
  down();
  return <div>AutomaticCurtain</div>;
}
