import React from 'react';
import { Container } from '../../components/container';
import { Block } from '../../components/block';
import { Title } from '../../components/title';

import styles from './dictionary.module.scss';

export const Dictionary = () => {
   return (
      <Container>
         <Block>
            <Title>Основные термины</Title>
            <div className={styles.termine}>
               <span className={styles.bold}>Офшор</span> — это компания,
               зарегистрированная в стране с льготным налогообложением, имеющая
               определённый вид формы собственности и ограничения по
               ведению хозяйственной деятельности на территории страны
               регистрации.
            </div>
            <div className={styles.termine}>
               <span className={styles.bold}>
                  Сделки прямого/обратного РЕПО
               </span>{' '}
               – сделка купли (продажи) ценной бумаги с обязательством обратной
               продажи (покупки) через определённый срок по заранее определённой
               в этом соглашении цене.
            </div>
            <div className={styles.termine}>
               <span className={styles.bold}>Субординированный кредит</span> —
               форма движения денежного капитала, предоставляемого в
               виде кредита (депозита, займа, облигационного займа), который
               привлекается кредитной организацией на срок не менее 5 лет,
               который не может быть истребован кредитором до окончания срока
               действия договора, если заёмщик не нарушает его условия.
            </div>
         </Block>
      </Container>
   );
};
