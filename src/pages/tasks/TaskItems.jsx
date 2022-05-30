import React from 'react';

import { tasks } from './data';
import styles from './tasks.module.scss';

export const TaskItems = () => {
   const tasksEl = tasks.map((task) => (
      <li className={styles.item}>{task.text}</li>
   ));

   return (
      <div>
         <div className={styles.title}>Задачи:</div>
         <ol>{'' || tasksEl}</ol>
      </div>
   );
};
