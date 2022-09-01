import Carousel from 'react-bootstrap/Carousel';
import './Home.css';

function Home() {
  return (
    <div>
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100 carrousel"
                src={require('../img/foto-obelisco.jpg')}
                alt="Foto BsAs"
                />
                <Carousel.Caption>
                <h3>Av.Corrientes Buenos Aires</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 carrousel"
                src={require('../img/foto-prosvita.jpg')}
                alt="Foto Prosvita"
                />

                <Carousel.Caption>
                <h3>Asociacion Ucraniana Prosvita Avellaneda</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default Home;