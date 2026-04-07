import { Geladeira } from "../components/Geladeira";
import { Bebedouro } from "../components/Bebedouro";
import { Garrafao20L } from "../components/Garrafao20L";
import { Pia } from "../components/Pia";
import { Torneira } from "../components/Torneira";
import { Movel } from "../components/Movel";
import { AirFryer } from "../components/AirFryer";
import { Sanduicheira } from "../components/Sanduicheira";
import { Despensa } from "../components/Despensa";
import { MaquinaDeLavar } from "../components/MaquinaDeLavar";
import { Liquidificador } from "../components/Liquidificador";
import { Fogao } from "../components/Fogao";
import { Microondas } from "../components/Microondas";
import { Porta } from "../components/Porta";
import { Tomada } from "../components/Tomada";
import { Interruptor } from "../components/Interruptor";
import { Camera } from "../components/Camera";




export function Kitchen() { 
     return (
          <>
            <Geladeira />
            <Bebedouro />
            <Garrafao20L />
            <Pia />
            <Torneira />
            <Movel />
            <AirFryer />
            <Sanduicheira />
            <Despensa />
            <MaquinaDeLavar />
            <Liquidificador />
            <Fogao /> 
            <Microondas />
            <Porta />
            <Tomada />
            <Interruptor />
            <Camera />        
             </>
             )
           }