import { useEffect } from 'react';
import { Block } from '../../components/block';
import { init } from '../../components/map/regions_districts';
import { Title } from '../../components/title';
import { map } from './data';

import styles from './map.module.scss';

function Maps() {
   useEffect(() => {
      ymaps.ready(init);
   });
   return (
      <Block>
         <Title>{map.title}</Title>
         <div id='map' className={styles.item} />
      </Block>
   );
}

export default Maps;
