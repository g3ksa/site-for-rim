//import './MainBlock.css';
import { Container } from '../../components/container';
import About from './About';
import Maps from './Maps';
import { Zones } from './Zones';

function MainBlock() {
   return (
      <Container>
         <About />
         <Zones />
         <Maps />
      </Container>
   );
}
export { MainBlock };
