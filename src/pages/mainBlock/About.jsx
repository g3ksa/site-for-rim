import styles from './about.module.scss';
import { Title } from '../../components/title';
import { Block } from '../../components/block';
import { about } from './data';

function About() {
   return (
      <Block>
         <Title>{about.title}</Title>
         <div className={styles.content}>
            <div className={styles.text}>{about.text}</div>
         </div>
      </Block>
   );
}

export default About;
