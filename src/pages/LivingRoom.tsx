import { Door } from "../components/Door";
import { Table } from "../components/Table";
import { Chair } from "../components/Chair";
import { Sofa } from "../components/Sofa";
import { TV } from "../components/TV";
import { AirConditioner } from "../components/AirConditioner";
import { Outlet } from "../components/Outlet";
import { Switch } from "../components/Switch";
import { Rack } from "../components/Rack";
import { Fan } from "../components/Fan";
import { Camera } from "../components/Camera";


export function LivingRoom() {
      return (
          <>
            <Door />
            <Table />
            <Chair />
            <Sofa />
            <TV />
            <AirConditioner />
            <Outlet />
            <Switch />
            <Rack />
            <Fan />
            <Camera />
          </>
       )
      }