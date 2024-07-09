import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function Banner() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel style={{height:'40vh'}} activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <img
          style={{ width: '1230px', height: '370px', margin: '0 auto' }}
          src="https://img.lazcdn.com/g/ff/kf/S7e43b704daf24c9790a2a5f8fa69c0adO.jpg_720x720q80.jpg"
          alt="First slide"
        />
    <Carousel.Caption style={{ color: 'BLACK', fontWeight: 'bold' }}>
      <h3>SEMS STORE</h3>
      <p>SEPATU PRIA</p>
    </Carousel.Caption>


      </Carousel.Item>
      <Carousel.Item>
      <img
          style={{ width: '1230px', height: '370px', margin: '0 auto' }} 
          src="https://ds393qgzrxwzn.cloudfront.net/resize/m600x500/cat1/img/images/0/DaK1teEwyJ.jpg"
          alt="First slide"
        />
        <Carousel.Caption style={{ color: 'BLACK', fontWeight: 'bold' }}>
      <h3>SEMS STORE</h3>
      <p>BAJU WANITA</p>
    </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          style={{ width: '1230px', height: '370px', margin: '0 auto' }} 
          src="https://www.galerikonveksi51.com/wp-content/uploads/2017/01/Celana-Formal.jpg"
          alt="First slide"
        />
    <Carousel.Caption style={{ color: 'BLACK', fontWeight: 'bold' }}>
      <h3>SEMS STORE</h3>
      <p>CELANA PRIA</p>
    </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;
