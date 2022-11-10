import './Banner.scss';

import banner1 from '../../images/banner-1.jpg';
import banner2 from '../../images/banner-2.jpg';
import banner3 from '../../images/banner-3.jpg';

const Banner = () => {
  return (
    <section className="banner container">
      <img src={banner1} alt="" />
      <img src={banner2} alt="" />
      <img src={banner3} alt="" />
    </section>
  );
};

export default Banner;
