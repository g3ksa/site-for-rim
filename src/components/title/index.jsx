import styles from './title.module.scss';

import React from 'react';

export const Title = ({ text, ...props }) => {
   let redText;
   if (text) {
      redText = text.split('\n').map((str) => (
         <span>
            {str}
            <br />
         </span>
      ));
   } else {
      return <div className={styles.title} {...props} />;
   }
   return (
      <div className={styles.title} {...props}>
         {redText}
      </div>
   );
};
