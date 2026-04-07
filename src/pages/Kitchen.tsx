import { Refrigerator } from "../components/Refrigerator";
import { WaterFountain } from "../components/WaterFountain";
import { Jug20L } from "../components/Jug20L";
import { Sink } from "../components/Sink";
import { Faucet } from "../components/Faucet";
import { Furniture } from "../components/Furniture";
import { AirFryer } from "../components/AirFryer";
import { SandwichMaker } from "../components/SandwichMaker";
import { Pantry } from "../components/Pantry";
import { WashingMachine } from "../components/WashingMachine";
import { Blender } from "../components/Blender";
import { Stove } from "../components/Stove";
import { Microwave } from "../components/Microwave";
import { Door } from "../components/Door";
import { Outlet } from "../components/Outlet";
import { Switch } from "../components/Switch";
import { Camera } from "../components/Camera";


export function Kitchen() { 
     return (
          <>
            <Refrigerator />
            <WaterFountain />
            <Jug20L />
            <Sink />
            <Faucet />
            <Furniture />
            <AirFryer />
            <SandwichMaker />
            <Pantry />
            <WashingMachine />
            <Blender />
            <Stove /> 
            <Microwave />
            <Door />
            <Outlet />
            <Switch />
            <Camera />        
             </>
             )
           }