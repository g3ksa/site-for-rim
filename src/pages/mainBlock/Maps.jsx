import { useEffect, useState } from 'react';
import { Block } from '../../components/block';
import { init } from '../../components/map/regions_districts';
import { Title } from '../../components/title';
import { Countries } from './Countries';
import { map, districtColors } from './data';
import { motion, AnimateSharedLayout } from 'framer-motion';

import styles from './map.module.scss';

function Maps() {
   useEffect(() => {
      ymaps.ready(init);
   }, []);

   const [group, setGroup] = useState('');

   const handleClick = (key) => {
      setGroup(key);
   };

   const deleteCountry = () => {
      setGroup('');
   };

   const legend = Object.keys(districtColors).map((key) => (
      <div className={styles.item}>
         <span
            className={styles.color}
            style={{ backgroundColor: districtColors[key] }}
         ></span>
         <a className={styles.text} key={key} onClick={() => handleClick(key)}>
            {key}
         </a>
      </div>
   ));

   return (
      <Block>
         <Title text={map.title}></Title>
         <div id='map' className={styles.map}>
            <div className={styles.controls}>
               {group && (
                  <Countries
                     group={group}
                     className={styles.list}
                     setGroup={deleteCountry}
                  />
               )}
               <div className={styles.legend}>{legend}</div>
            </div>
         </div>
      </Block>
   );
}

export default Maps;
