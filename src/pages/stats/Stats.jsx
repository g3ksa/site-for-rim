import { useState, useContext } from 'react';
import { motion } from 'framer-motion';

import { AnimatedPage } from '../../components/AnimatedPage';
import { ThemeContext } from '../../components/ThemeProvider';
import dark_stats_1 from '../../img/stats/dark_theme/stats_1-min.png';
import dark_stats_2 from '../../img/stats/dark_theme/stats_2-min.png';
import dark_stats_3 from '../../img/stats/dark_theme/stats_3-min.png';
import dark_stats_4 from '../../img/stats/dark_theme/stats_4-min.png';
import dark_stats_5 from '../../img/stats/dark_theme/stats_5-min.png';
import light_stats_1 from '../../img/stats/light_theme/stats_1-min.png';
import light_stats_2 from '../../img/stats/light_theme/stats_2-min.png';
import light_stats_3 from '../../img/stats/light_theme/stats_3-min.png';
import light_stats_4 from '../../img/stats/light_theme/stats_4-min.png';
import light_stats_5 from '../../img/stats/light_theme/stats_5-min.png';

const statsSrc = [
   {
      title: 'Объем средств российского банковского сектора, размещенных на кор.счетах ностро в кред.организациях за рубежом, на начало года(в млрд. руб.)',
      darkImg: dark_stats_1,
      lightImg: light_stats_1,
   },
   {
      title: 'Предоставленные кредиты, сделки обратного РЕПО, субординированные кредиты российского банковского сектора, размещенные в кредитных организациях за рубежом (в млрд. руб.)',
      darkImg: dark_stats_2,
      lightImg: light_stats_2,
   },
   {
      title: 'Удельный вес средств, размещенных в кредитных организациях в офшорах и привлечённых из них же, в совокупном объеме активов российского банковского сектора, на начало года',
      darkImg: dark_stats_3,
      lightImg: light_stats_3,
   },
   {
      title: 'Объем средств зарубежных банков, привлеченных рос.банк.сектором на кор.счета(в млрд. руб.)',
      darkImg: dark_stats_4,
      lightImg: light_stats_4,
   },
   {
      title: 'Привлеченные рос.банковским сектором кредиты и депозиты, а также сделки прямого РЕПО и субординированные кредиты (в млрд. руб.)',
      darkImg: dark_stats_5,
      lightImg: light_stats_5,
   },
];

const statAnimation = {
   hidden: {
      opacity: 0,
   },
   visible: {
      opacity: 1,
      transition: { delay: 0.2 },
   },
};

const Stats = () => {
   const { theme } = useContext(ThemeContext);

   let stats = [];

   let statsItems;

   statsItems = statsSrc.map((item, index) => (
      <motion.div
         className='stats__block block'
         key={index}
         initial='hidden'
         whileInView='visible'
         viewport={{ amount: 0.1 }}
         variants={statAnimation}
      >
         <div className='stats__title title'>{item.title}</div>
         <div className='stats__item'>
            <img src={theme == 'dark' ? item.darkImg : item.lightImg}></img>
         </div>
      </motion.div>
   ));

   return <div className='container'>{'' || statsItems}</div>;
};

export { Stats };
