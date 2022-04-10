import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function SwiperItem() {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      loop={true}
      navigation={true}
      centeredSlides={false}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="container__swiper"
    >
      <SwiperSlide>
        <div className='box'>
          <img className='isImageT' src={require('../../assets/images/wtk.jpg')} alt="" />
          <div className='gameText'>Role-Play game</div>
          <div className='text fz-24 fm-raleway'>Who is the Killer!?</div>
          <div className='message'>The number of participants was six to eight people, there are five people now, we are all Chinese international students and usually play on weekends</div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='box'>
          <img className='isImageT' src={require('../../assets/images/mahjong.jpg')} alt="" />
          <div className='gameText'>Card Game</div>
          <div className='text fz-24 fm-raleway'>Mahjong -  3 wait for 1!
            URGENT!!!</div>
          <div className='message'>We usually do it on a Saturday afternoon in the CBD and we currently have two ladies and one gentleman.</div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='box'>
          <img className='isImageT' src={require('../../assets/images/tableTennis.jpg')} alt="" />
          <div className='gameText'>Sport</div>
          <div className='text fz-24 fm-raleway'>Table tennis</div>
          <div className='message'>I'm a newbie , just have fun!</div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='box'>
          <img className='isImageT' src={require('../../assets/images/joker.jpg')} alt="" />
          <div className='gameText'>Card game</div>
          <div className='text fz-24 fm-raleway'>Dou di zhu(3 people game)</div>
          <div className='message'>My roommate and I both want to play Dou di zhu, and we're waiting for another player. We live near Clayton, welcome to play!</div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='box'>
          <img className='isImageT' src={require('../../assets/images/badminton.jpg')} alt="" />
          <div className='gameText'>Sport</div>
          <div className='text fz-24'>Badminton</div>
          <div className='message'>I am a Chinese student looking for a badminton doubles teammate!</div>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}
