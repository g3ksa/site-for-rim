import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';

import styles from './block.module.scss';

export const Block = forwardRef((props, ref) => {
   const { children } = props;
   return (
      <div className={styles.block} ref={ref} {...props}>
         {children}
      </div>
   );
});

export const MotionBlock = motion(Block);
