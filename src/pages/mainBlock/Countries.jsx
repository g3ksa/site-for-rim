import React from 'react';
import { countries } from './data';
import { AiOutlineClose } from 'react-icons/ai';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';

import styles from './map.module.scss';

export const Countries = ({ group, setGroup, ...props }) => {
   const list = countries[group].map((country, index) => (
      <div>
         {index + 1}
         {')\t'}
         {country}
      </div>
   ));
   return (
      <div {...props}>
         <div>
            <a className={styles.close} onClick={setGroup}>
               <AiOutlineClose />
            </a>
         </div>
         {list}
      </div>
   );
};
