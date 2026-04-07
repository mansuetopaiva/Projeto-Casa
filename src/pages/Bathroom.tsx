import { ElectricShower } from "../components/ElectricShower";
import { Sink } from "../components/Sink";
import { Faucet } from "../components/Faucet";
import { Toilet } from "../components/Toilet";
import { Furniture } from "../components/Furniture";
import { Door } from "../components/Door";
import { SlidingGlassDoor } from "../components/SlidingGlassDoor";
import { Outlet } from "../components/Outlet";
import { Switch } from "../components/Switch";
import { Mirror } from "../components/Mirror";



export function Bathroom() { 
     return (
          <>
           <ElectricShower />
           <Sink />
           <Faucet />
           <Toilet />
           <Furniture />
           <Door />
           <SlidingGlassDoor />
           <Outlet />
           <Switch />
           <Mirror />
          </>
             )
           }