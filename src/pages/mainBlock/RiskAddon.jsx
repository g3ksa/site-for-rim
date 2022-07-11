import React from 'react';
import styles from './riskAddon.module.scss';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../../components/header';

const animation = {
   hidden: {
      opacity: 0,
   },
   visible: {
      opacity: 1,
      transition: { delay: 1, duration: 1.5 },
   },
};

export const RiskAddon = () => {
   return (
      <motion.div
         className={styles.block}
         initial='hidden'
         whileInView='visible'
         variants={animation}
      >
         <div>
            Кстати, с офшорами не все так гладко как могло вам показаться. Чтобы
            узнать какие риски они несут за собой, кликните на кнопку ниже.
         </div>

         <Link to='/risks' onClick={scrollToTop}>
            <div className={styles.button}>Читать</div>
         </Link>
      </motion.div>
   );
};
