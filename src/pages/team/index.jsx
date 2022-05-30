import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';

import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';

import { teamData } from './data';
import styles from './team.module.scss';
import { Container } from '../../components/container';
import { Block } from '../../components/block';
import { Title } from '../../components/title';

const Team = () => {
   const members = teamData.map((member) => (
      <SwiperSlide tag='li' className={styles.slide}>
         <div className={styles.left}>
            <div className={styles.avatar}>
               <img src={member.avatar} alt='' />
               <div className={styles.fullname}>
                  {`${member.surname} ${member.name}`}
               </div>
            </div>
         </div>
         <div className={styles.right}>
            <div className={styles.description}>{member.description}</div>
         </div>
      </SwiperSlide>
   ));

   return (
      <Container>
         <Block>
            <Title>Наша команда</Title>
            <Swiper
               slidesPerView={1}
               spaceBetween={100}
               loop={true}
               pagination={{ clickable: false }}
               navigation={true}
               modules={[Pagination, Navigation]}
               className='mySwiper'
            >
               {members}
            </Swiper>
         </Block>
      </Container>
   );
};

export { Team };
