import { open } from '../utils/turnOpenClose'; 
import { close } from '../utils/turnOpenClose';

export function Faucet() {
  open();
  close();
  return <div>Faucet</div>;
}
