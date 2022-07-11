import React from 'react';
import { Block } from '../../components/block';
import { Container } from '../../components/container';
import { Title } from '../../components/title';

import styles from './sources.module.scss';

function Sources() {
   return (
      <Container>
         <Block>
            <Title>Источники</Title>
            <div className='sources__items'>
               <ol>
                  <li className={styles.item}>
                     Указание Банка России от 07.08.2003 N 1317-У (ред. от
                     18.02.2014) «О порядке установления уполномоченными банками
                     корреспондентских отношений с банками-нерезидентами,
                     зарегистрированными в государствах и на территориях,
                     предоставляющих льготный налоговый режим и (или) не
                     предусматривающих раскрытие и предоставление информации при
                     проведении финансовых операций (офшорных зонах)»
                  </li>
                  <li className={styles.item}>
                     Статистические показатели банковского сектора российской
                     федерации №232 февраль 2022 г. и №220 февраль 2021 года
                     (табл. 14-15) URL:{' '}
                     <a
                        href='http://www.cbr.ru/statistics/bank_sector/review/'
                        target='_blank'
                     >
                        http://www.cbr.ru/statistics/bank_sector/review/
                     </a>{' '}
                     (дата обращения 22.04.22).
                  </li>
                  <li className={styles.item}>
                     С. Г. Кривенко. Использование офшорных компаний в целях
                     проведения сомнительных финансовых операций и правовые
                     риски контрагентов данных компаний // Научная жизнь. 2013.
                     URL:{' '}
                     <a
                        href='https://www.hse.ru/data/2013/03/11/1293471569/23396%20С.Г.%20Кривенко.pdf'
                        target='_blank'
                     >
                        https://www.hse.ru/data/2013/03/11/1293471569/23396%20С.Г.%20Кривенко.pdf
                     </a>{' '}
                     (дата обращения 08.12.2003).
                  </li>
                  <li className={styles.item}>
                     «Правовой режим оффшорных компаний и трастов» (Владимир
                     Канашевский, изд. Международные отношения, 2015 г., 184
                     стр.)
                  </li>
                  <li className={styles.item}>
                     Газпромбанк: официальный сайт. URL:{' '}
                     <a
                        href='https://www.gazprombank.ru/about/group/#group_1'
                        target='_blank'
                     >
                        https://www.gazprombank.ru/about/group/#group_1
                     </a>{' '}
                     (дата обращения: 19.04.2022)
                  </li>
                  <li className={styles.item}>
                     Газпромбанк: официальный сайт. URL:{' '}
                     <a
                        href='https://www.gazprombank.ru/about/group/#group_2'
                        target='_blank'
                     >
                        https://www.gazprombank.ru/about/group/#group_2
                     </a>{' '}
                     (дата обращения: 19.04.2022)
                  </li>
                  <li className={styles.item}>
                     Все иконки взяты из open-source библиотеки react-icons:
                     <br />
                     <a href='https://react-icons.github.io/react-icons'>
                        https://react-icons.github.io/react-icons
                     </a>{' '}
                     (дата обращения: 10.05.2022)
                  </li>
                  <li className={styles.item}>
                     Интерактивная карта создана с использованием API Yandex
                     Maps:{' '}
                     <a href='https://yandex.ru/dev/maps/?p=realty'>
                        https://yandex.ru/dev/maps/?p=realty
                     </a>{' '}
                     (дата обращения: 10.04.2022)
                  </li>
               </ol>
            </div>
         </Block>
      </Container>
   );
}

export { Sources };
