//import './MainBlock.css';
import { Container } from '../../components/container';
import About from './About';
import Maps from './Maps';

function MainBlock() {
   return (
      <Container>
         <About />
         <Maps />
      </Container>
   );
}
export { MainBlock };
