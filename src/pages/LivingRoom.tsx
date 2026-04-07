import { Porta } from "../components/Porta";
import { Mesa } from "../components/Mesa";
import { Cadeira } from "../components/Cadeira";
import { Sofa } from "../components/Sofa";
import { TV } from "../components/TV";
import { ArCondicionado } from "../components/ArCondicionado";
import { Tomada } from "../components/Tomada";
import { Interruptor } from "../components/Interruptor";
import { Rack } from "../components/Rack";
import { Ventilador } from "../components/Ventilador";
import { Camera } from "../components/Camera";



export function LivingRoom() {
      return (
          <>
            <Porta />
            <Mesa />
            <Cadeira />
            <Sofa />
            <TV />
            <ArCondicionado />
            <Tomada />
            <Interruptor />
            <Rack />
            <Ventilador />
            <Camera />
          </>
       )
      }