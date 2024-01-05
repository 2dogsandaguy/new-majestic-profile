
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import eightyFeet from '../assets/install-img/80-feet.jpg';
import finishGlass from '../assets/install-img/finish-glass.jpg';
import glassInt from '../assets/install-img/glass-install.jpg';
import macInt from '../assets/install-img/mac-install.jpg';
import me from '../assets/install-img/me-me.jpg';
import texas from '../assets/install-img/texas-install.jpg';
import covidInt from '../assets/install-img/vid-install.jpg';
import covidInt2 from '../assets/install-img/vid-install2.jpg';
import wind from '../assets/install-img/wind.jpg';
import windCrane from '../assets/install-img/windCrane.jpg';


export default function Footer() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,        // Auto-play the carousel
    autoplaySpeed: 2000, 
  };
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12 custom-footer text-center">
            <p>&copy; 2023 Robert Frisco</p>
            {/* <img className="img-fluid anime-image" style={{ width: '50%' }}src={animeImage} alt="Anime" /> */}
            <Slider {...settings}>
              <div>
                <img className="img-fluid anime-image" src={me} alt="work img" />
              </div>
              <div>
                <img className="img-fluid anime-image" src={eightyFeet} alt="work img" />
              </div>
              <div>
                <img className="img-fluid anime-image" src={finishGlass} alt="work img" />
              </div>
              <div>
                <img className="img-fluid anime-image" src={glassInt} alt="work img" />
              </div>
              <div>
                <img className="img-fluid anime-image" src={macInt} alt="Anime 2" />
              </div>
              <div>
                <img className="img-fluid anime-image" src={wind} alt="Anime 2" />
              </div>
              <div>
                <img className="img-fluid anime-image" src={texas} alt="Anime 2" />
              </div>
              <div>
                <img className="img-fluid anime-image" src={covidInt} alt="Anime 2" />
                <img className="img-fluid anime-image" src={covidInt2} alt="Anime 2" />
              </div>
              <div>
                <img className="img-fluid anime-image" src={windCrane} alt="work img" />
              </div>
              {/* Add more divs for additional images */}
            </Slider>
          </div>
        </div>
      </div>
    </footer>
  );
}
