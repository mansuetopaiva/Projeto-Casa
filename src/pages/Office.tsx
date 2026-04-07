import { AutomaticTable } from "../components/AutomaticTable";
import { Table } from "../components/Table";
import { Window } from "../components/Window";
import { Chair } from "../components/Chair";
import { Mirror } from "../components/Mirror";
import { Furniture } from "../components/Furniture";
import { Notebook } from "../components/Notebook";
import { Monitor } from "../components/Monitor";
import { IPad } from "../components/IPad";
import { Charger } from "../components/Charger";
import { Cellphone } from "../components/Cellphone";
import { VideoGame } from "../components/VideoGame";
import { DepositBox } from "../components/DepositBox";
import { AirConditioner } from "../components/AirConditioner";
import { AutomaticCurtain } from "../components/AutomaticCurtain";
import { Camera } from "../components/Camera";
import { Door } from "../components/Door";
import { Outlet } from "../components/Outlet";
import { Switch } from "../components/Switch";
import { HomePod } from "../components/HomePod";


export function Office() { 
     return (
          <>
           <AutomaticTable />
           <Table />
           <Window />
           <Chair />
           <Mirror />
           <Furniture />
           <Notebook />
           <Monitor />
           <IPad />
           <Charger />
           <Cellphone />
           <VideoGame />
           <DepositBox />
           <AirConditioner />
           <AutomaticCurtain />
           <Camera />
           <Door />
           <Outlet />
           <Switch />
           <HomePod />
          </>
             )
           }