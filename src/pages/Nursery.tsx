import { Bed } from "../components/Bed";
import { Net } from "../components/Net";
import { Dresser } from "../components/Dresser";
import { Fan } from "../components/Fan";
import { Camera } from "../components/Camera";
import { Window } from "../components/Window";
import { AutomaticCurtain } from "../components/AutomaticCurtain";
import { AirConditioner } from "../components/AirConditioner";
import { Outlet } from "../components/Outlet";
import { Switch } from "../components/Switch";
import { Door } from "../components/Door";
import { HomePod } from "../components/HomePod";


export function Nursery() { 
     return (
            <>
               <Bed />
               <Net />
               <Dresser />
               <Fan />
               <Camera />
               <Window />
               <AutomaticCurtain />
               <AirConditioner />
               <Outlet />
               <Switch />
               <Door />
               <HomePod />      
             </>
             )
           }