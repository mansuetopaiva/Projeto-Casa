import { MesaAutomatica } from "../components/MesaAutomatica";
import { Mesa } from "../components/Mesa";
import { Janela } from "../components/Janela";
import { Cadeira } from "../components/Cadeira";
import { Espelho } from "../components/Espelho";
import { Movel } from "../components/Movel";
import { Notebook } from "../components/Notebook";
import { Monitor } from "../components/Monitor";
import { IPad } from "../components/IPad";
import { Carregador } from "../components/Carregador";
import { Celular } from "../components/Celular";
import { VideoGame } from "../components/VideoGame";
import { CaixaDeposito } from "../components/CaixaDeposito";
import { ArCondicionado } from "../components/ArCondicionado";
import { CortinaAutomatica } from "../components/CortinaAutomatica";
import { Camera } from "../components/Camera";
import { Porta } from "../components/Porta";
import { Tomada } from "../components/Tomada";
import { Interruptor } from "../components/Interruptor";
import { HomePod } from "../components/HomePod";




export function Office() { 
     return (
          <>
           <MesaAutomatica />
           <Mesa />
           <Janela />
           <Cadeira />
           <Espelho />
           <Movel />
           <Notebook />
           <Monitor />
           <IPad />
           <Carregador />
           <Celular />
           <VideoGame />
           <CaixaDeposito />
           <ArCondicionado />
           <CortinaAutomatica />
           <Camera />
           <Porta />
           <Tomada />
           <Interruptor />
           <HomePod />
          </>
             )
           }