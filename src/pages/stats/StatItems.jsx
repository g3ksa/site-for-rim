import React from 'react';
import { motion } from 'framer-motion';

import { statsSrc } from './data';
import { Title } from '../../components/title';
import { MotionBlock } from '../../components/block';
import styles from './stats.module.scss';

const statAnimation = {
   hidden: {
      opacity: 0,
   },
   visible: {
      opacity: 1,
      transition: { delay: 0.2 },
   },
};

export const StatItems = ({ theme }) => {
   return (
      <>
         {'' ||
            statsSrc.map((item, index) => (
               <MotionBlock
                  key={index}
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ amount: 0.1 }}
                  variants={statAnimation}
               >
                  <Title text={item.title}></Title>
                  <div className={styles.item}>
                     <img
                        src={theme == 'dark' ? item.darkImg : item.lightImg}
                     ></img>
                  </div>
               </MotionBlock>
            ))}
      </>
   );
};
