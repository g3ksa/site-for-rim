import { useState, useContext } from 'react';

import { ThemeContext } from '../../components/ThemeProvider';
import { Container } from '../../components/container';
import { StatItems } from './StatItems';
import styles from './stats.module.scss';

const Stats = () => {
   const { theme } = useContext(ThemeContext);

   return (
      <Container>
         <StatItems theme={theme} />
      </Container>
   );
};

export { Stats };
