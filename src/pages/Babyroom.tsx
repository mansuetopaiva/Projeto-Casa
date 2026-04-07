import { Cama } from "../components/Cama";
import { Rede } from "../components/Rede";
import { Comoda } from "../components/Comoda";
import { Ventilador } from "../components/Ventilador";
import { Camera } from "../components/Camera";
import { Janela } from "../components/Janela";
import { CortinaAutomatica } from "../components/CortinaAutomatica";
import { ArCondicionado } from "../components/ArCondicionado";
import { Tomada } from "../components/Tomada";
import { Interruptor } from "../components/Interruptor";
import { Porta } from "../components/Porta";
import { HomePod } from "../components/HomePod";




export function Babyroom() { 
     return (
            <>
               <Cama />
               <Rede />
               <Comoda />
               <Ventilador />
               <Camera />
               <Janela />
               <CortinaAutomatica />
               <ArCondicionado />
               <Tomada />
               <Interruptor />
               <Porta />
               <HomePod />      
             </>
             )
           }