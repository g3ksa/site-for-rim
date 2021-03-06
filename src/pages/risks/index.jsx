import React from 'react';
import { Container } from '../../components/container';
import { Block } from '../../components/block';
import { Title } from '../../components/title';
import { IoMdArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

import Tinkoff from '../../img/risks/tinkoff-min.png';
import Gazprom from '../../img/risks/gazprom-min.jpg';

import styles from './risks.module.scss';

export const Risks = () => {
   const navigate = useNavigate();

   const goBack = () => {
      navigate(-1);
   };

   return (
      <Container>
         <Block>
            <Title style={{ position: 'relative' }}>
               <a onClick={goBack} className={styles.goBack}>
                  <IoMdArrowBack />
               </a>
               <span className={styles.title}>Правовые риски</span>
            </Title>
            <div className={styles.inner}>
               <div className={styles.mainText}>
                  <div className={styles.subText}>
                     Рискам подвержены не только компании, намеренно
                     использующие офшоры для совершения сомнительных финансовых
                     операций, но и добросовестные контрагенты, осуществляющие
                     свою предпринимательскую деятельность в прямом соответствии
                     с ее значением, а именно с целью извлечения прибыли, и
                     которые не должны были бы уделять особое внимание личности
                     или происхождению своих контрагентов.
                  </div>
                  <div className={styles.listTitle}>
                     Правовые риски можно условно разделить на 4 большие группы:
                  </div>
               </div>
               <ul className={styles.list}>
                  <li className={styles.listItem}>
                     <div className={styles.itemTitle}>
                        Гражданско-правовые:
                     </div>
                     <div className={styles.itemText}>
                        Заключаются в затруднении способов судебной защиты своих
                        интересов в случае неисполнения контрагентом-офшором
                        своих обязательств. Как правило, офшорные компании, если
                        они не подконтрольны самому российскому хозяйствующему
                        субъекту, в случае совершения реальных операций с
                        добросовестными контрагентами стремятся подчинить
                        заключаемые договоры праву страны собственной
                        регистрации. Делается это для того, чтобы в случае
                        возникновения спора дело рассматривалось в стране, к
                        юрисдикции которой относится офшорная компания. Чаще
                        всего таким образом обеспечивается отсутствие судебного
                        решения, поскольку контрагенты приходят к выводу, что
                        оплата юридических услуг, связанных с изучением
                        законодательства страны офшора, командирования своего
                        представителя и осуществление самого представительства в
                        суде требует затрат, которые могут оказаться
                        значительнее, вызванных неисполнением договора офшорной
                        фирмой.
                     </div>
                  </li>
                  <li className={styles.listItem}>
                     <div className={styles.itemTitle}>Налоговые:</div>
                     <div className={styles.itemText}>
                        Здесь можно подробнее остановиться на двух видах
                        налоговых рисков. Первый вид - непредвиденные налоговые
                        обязательства. Они как правило возникают в схемах, когда
                        офшорная компания предоставляет российской компании займ
                        и рассчитывает на получение через определенное время
                        тела займа вместе с процентами Второй вид налоговых
                        рисков - возникновение налоговой обязанности у лица,
                        которое изначально не рассматривалось субъектом таковой
                        при планировании деятельности участников офшорных
                        правоотношений.
                     </div>
                  </li>
                  <li className={styles.listItem}>
                     <div className={styles.itemTitle}>Административные:</div>
                     <div className={styles.itemText}>
                        Могут быть связаны либо с привлечением к
                        административной ответственности. Привлечение к
                        административной ответственности за правонарушения в
                        сфере налогов и сборов для участника офшорных
                        правоотношений наиболее вероятно в следующих ситуациях:
                        офшорная компания ведет деятельность, приводящую к
                        возникновению постоянного представительства в Российской
                        Федерации, с нарушением срока постановки на учет;
                        офшорная компания ведет деятельность, приводящую к
                        возникновению постоянного представительства в Российской
                        Федерации, и при этом она не подает налоговую
                        декларацию; офшорная компания не предоставляет сведения,
                        необходимые для осуществления налогового контроля.
                     </div>
                  </li>
                  <li className={styles.listItem}>
                     <div className={styles.itemTitle}>Уголовные:</div>
                     <div className={styles.itemText}>
                        Данные риски могут возникать в силу норм нескольких
                        статей Уголовного кодекса Российской Федерации (далее -
                        УК РФ). В первую очередь, это статьи 198–199 - уклонение
                        от уплаты налогов с физических лиц и организаций.
                        Ответственность по данной статье может быть применена
                        прежде всего к генеральному директору и главному
                        бухгалтеру российской компании, сотрудничающей с
                        офшорной компанией. Однако здесь важна сумма налогов, не
                        уплаченная в бюджет. В последние годы активно
                        применяются статьи 174 и 174.1 - легализация доходов,
                        полученных преступным путем. Данные статьи применяются,
                        как правило, к генеральным директорам российских
                        компаний, если они были осведомлены о преступном
                        источнике переводимых денежных средств.
                     </div>
                  </li>
               </ul>
            </div>
         </Block>
         <Block>
            <Title>
               Cвязи системно значимых банков рф с резидентами в офшорных зонах
            </Title>
            <div className={styles.items}>
               <div className={styles.item}>
                  <img src={Tinkoff} alt='' />
                  <div className={styles.subtext}>
                     У Тинькофф банка учредительная компания(TCS Group)
                     зарегестрирована на Кипре.
                  </div>
               </div>
               <div className={styles.item}>
                  <img src={Gazprom} alt='' />
                  <div className={styles.subtext}>
                     В группе компаний и банков Газпромбанка есть отделения,
                     находящиеся на Кипре, в Швейцарии и в Гонконге
                  </div>
               </div>
            </div>
         </Block>
      </Container>
   );
};
