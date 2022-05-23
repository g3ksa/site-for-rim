import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { teamData } from './data';

const Team = () => {
   const members = teamData.map((member) => (
      <SwiperSlide className='member__slide slide'>
         <div className='slide__left'>
            <div className='member__avatar'>
               <img src={member.avatar} alt='' />
            </div>
            <div className='member__fullname'>
               {`${member.surname} ${member.name}`}
            </div>
         </div>
         <div className='slide__right'>
            <div className='member__description'>{member.description}</div>
         </div>
      </SwiperSlide>
   ));

   return (
      <div className='container'>
         <div className='team block'>
            <div className='members title'>Наша команда</div>
            <Swiper
               slidesPerView={1}
               spaceBetween={0}
               loop={true}
               pagination={{ clickable: false }}
               navigation={true}
               modules={[Pagination, Navigation]}
               className='mySwiper'
            >
               {members}
            </Swiper>
         </div>
      </div>
   );
};

export { Team };
