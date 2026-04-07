import { open } from '../utils/turnOpenClose';
import { close } from '../utils/turnOpenClose';

function storeRemove(){
}

export function Refrigerator() {
  open();
  close();

  return <div>Refrigerator</div>;
}
