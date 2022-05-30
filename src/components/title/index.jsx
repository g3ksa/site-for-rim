import styles from './title.module.scss';

import React from 'react';

export const Title = (props) => {
   return <div className={styles.title} {...props} />;
};
