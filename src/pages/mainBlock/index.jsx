//import './MainBlock.css';
import { Container } from '../../components/container';
import About from './About';
import Maps from './Maps';
import { Zones } from './Zones';
import { RiskAddon } from './RiskAddon';

function MainBlock() {
   return (
      <Container>
         <About />
         <Zones />
         <Maps />
         <RiskAddon />
      </Container>
   );
}
export { MainBlock };
