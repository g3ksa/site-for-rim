import { Container } from '../../components/container';
import { Title } from '../../components/title';
import { PointItems } from './PointItems';
import { TaskItems } from './TaskItems';
import styles from './tasks.module.scss';

const Tasks = () => {
   return (
      <Container>
         <div className={styles.row}>
            <Title>Цели и задачи</Title>
            <PointItems />
            <TaskItems />
         </div>
      </Container>
   );
};

export { Tasks };
