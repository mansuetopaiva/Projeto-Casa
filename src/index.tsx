import { LivingRoom } from './pages/LivingRoom'
import { Kitchen } from './pages/Kitchen'
import { Bathroom } from './pages/Bathroom'
import { Office } from './pages/Office'
import { Nursery } from './pages/Nursery'

export const Router = ({ pathname }: { pathname: string }) => {
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
        case '/nursery':
            return (<Nursery />);
            break;
        case '/bathroom':
            return (<Bathroom />);
            break;
        default:
            return <></>;
    }
}