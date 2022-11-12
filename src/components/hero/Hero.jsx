import { useEffect, useState } from 'react';
import { isMobile } from '../../utilities';

// Import Swiper
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/pagination';

import img1 from '../../images/hors-doeuvre.jpg';
import img2 from '../../images/top-view.jpg';
import img3 from '../../images/vegetables.jpg';
import img4 from '../../images/vegetables-2.jpg';

import './Hero.scss';

const Hero = () => {
  const [mobile, setMobile] = useState();
  const winWidht = window.matchMedia('(max-width: 768px)');

  function screenTest(e) {
    if (e.matches) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }

  useEffect(() => {
    winWidht.addEventListener('change', screenTest);
    setMobile(isMobile());
  }, []);

  return (
    <section className="hero container">
      {!mobile && (
        <div className="hero__grid">
          <img src={img1} alt="" />
          <div className="inner-grid">
            <img src={img2} alt="" />
            <img src={img4} alt="" />
            <img src={img3} alt="" />
          </div>
        </div>
      )}
      {mobile && (
        <div>
          <Swiper
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay]}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <img className="slide-item" src={img1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="slide-item" src={img2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="slide-item" src={img3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="slide-item" src={img4} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      )}
    </section>
  );
};

export default Hero;
