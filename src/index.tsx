import React from 'react'
import { Porta } from './components/Porta'
import { Mesa } from './components/Mesa'
import { Cadeira } from './components/Cadeira'
import { ArCondicionado } from './components/ArCondicionado'
import { Tomada } from './components/Tomada'
import { Interruptor } from './components/Interruptor'
import { Ventilador } from './components/Ventilador'
import { Camera } from './components/Camera'
import { Geladeira } from './components/Geladeira'
import { Bebedouro } from './components/Bebedouro'
import { Garrafao20L } from './components/Garrafao20L'
import { Pia } from './components/Pia'
import { Torneira } from './components/Torneira'
import { Movel } from './components/Movel'
import { AirFryer } from './components/AirFryer'
import { Sanduicheira } from './components/Sanduicheira'
import { Despensa } from './components/Despensa'
import { MaquinaDeLavar } from './components/MaquinaDeLavar'
import { Liquidificador } from './components/Liquidificador'
import { Fogao } from './components/Fogao'
import { Microondas } from './components/Microondas'
import { Carregador } from './components/Carregador'
import { MesaAutomatica } from './components/MesaAutomatica'
import { Espelho } from './components/Espelho'
import { Notebook } from './components/Notebook'
import { Monitor } from './components/Monitor'
import { IPad } from './components/IPad'
import { VideoGame } from './components/VideoGame'
import { CaixaDeposito } from './components/CaixaDeposito'
import { CortinaAutomatica } from './components/CortinaAutomatica'
import { Celular } from './components/Celular'
import { HomePod } from './components/HomePod'
import { Cama } from './components/Cama'
import { Rede } from './components/Rede'
import { Comoda } from './components/Comoda'
import { Janela } from './components/Janela'
import { ChuveiroEletrico } from './components/ChuveiroEletrico'
import { Privada } from './components/Privada'
import { PortaVidroCorredica } from './components/PortaVidroCorredica'

import { LivingRoom } from './pages/LivingRoom'
import { Kitchen } from './pages/Kitchen'
import { Bathroom } from './pages/Bathroom'

const Router = ({ pathname }): JSX.Element => {
    switch(pathname) { 
        case '/living-room':
            return (<LivingRoom />);
            break;
        case '/kitchen':
            return (<Kitchen />);
            break;
        case '/office':
            return (<Office />);
            break;
        case '/babyroom':
            return (<Babyroom />);
            break;
        case '/bathroom':
            return (<Bathroom>

            </>);
            break;
        default:
            return <></>;
    }
}