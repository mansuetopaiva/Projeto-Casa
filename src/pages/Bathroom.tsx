import { ChuveiroEletrico } from "../components/ChuveiroEletrico";
import { Pia } from "../components/Pia";
import { Torneira } from "../components/Torneira";
import { Privada } from "../components/Privada";
import { Movel } from "../components/Movel";
import { Porta } from "../components/Porta";
import { PortaVidroCorredica } from "../components/PortaVidroCorredica";
import { Tomada } from "../components/Tomada";
import { Interruptor } from "../components/Interruptor";
import { Espelho } from "../components/Espelho";



export function Bathroom() { 
     return (
          <>
           <ChuveiroEletrico />
           <Pia />
           <Torneira />
           <Privada />
           <Movel />
           <Porta />
           <PortaVidroCorredica />
           <Tomada />
           <Interruptor />
           <Espelho />
          </>
             )
           }