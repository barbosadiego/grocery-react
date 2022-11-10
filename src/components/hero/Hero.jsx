import './Hero.scss';

import img1 from '../../images/hors-doeuvre.jpg';
import img2 from '../../images/top-view.jpg';
import img3 from '../../images/vegetables.jpg';
import img4 from '../../images/vegetables-2.jpg';

const Hero = () => {
  return (
    <section className="hero container">
      <div className="hero__grid">
        <img src={img1} alt="" />
        <div className="inner-grid">
          <img src={img2} alt="" />
          <img src={img4} alt="" />
          <img src={img3} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
