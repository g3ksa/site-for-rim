import React from 'react';

import { Block } from '../../components/block';
import { Title } from '../../components/title';
import { zones } from './data';

import styles from './zones.module.scss';

export const Zones = () => {
   const groups = zones.zones.map((zone) => (
      <div className={styles.item}>
         <div className={styles.subtitle}>{zone.title + ':'}</div>
         <div className={styles.text}>{zone.text}</div>
      </div>
   ));
   return (
      <Block>
         <Title>{zones.title}</Title>
         <div className={styles.items}>{groups}</div>
      </Block>
   );
};
