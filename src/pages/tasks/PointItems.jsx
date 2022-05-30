import React from 'react';

import { points } from './data';
import styles from './tasks.module.scss';

export const PointItems = () => {
   const pointsEl = points.map((point) => (
      <li className={styles.item}>{point.text}</li>
   ));

   return (
      <div>
         <div className={styles.title}>Цели:</div>
         <ol>{'' || pointsEl}</ol>
      </div>
   );
};
