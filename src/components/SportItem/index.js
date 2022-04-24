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
          <img className='isImageT' src={require('../../assets/images/flood.jpg')} alt="" />
          <div className='text fz-24 fm-raleway'>Flood</div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='box'>
          <img className='isImageT' src={require('../../assets/images/bushfire.jpg')} alt="" />
          <div className='text fz-24 fm-raleway'>Bushfire</div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='box'>
          <img className='isImageT' src={require('../../assets/images/cyclone.jpg')} alt="" />
          <div className='text fz-24 fm-raleway'>Cyclone</div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='box'>
          <img className='isImageT' src={require('../../assets/images/storms.jpg')} alt="" />
          <div className='text fz-24 fm-raleway'>Storms</div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='box'>
          <img className='isImageT' src={require('../../assets/images/earthquake.jpg')} alt="" />
          <div className='text fz-24 fm-raleway'>Earthquake</div>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}
