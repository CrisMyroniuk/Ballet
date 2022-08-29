import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BsYoutube } from "react-icons/bs";

function CardPresentaciones(props) {
  return (
    <Card style={{ width: '18rem',border:'11px solid white',backgroundColor:"transparent" }}>
      <Card.Img variant="top" src={require('../img/image-prueba.jpg')} />
      <Card.Body >
        <Card.Title className="text">{props.lugar}</Card.Title>
        <Card.Title className="text">({props.fecha})</Card.Title>
        <Card.Text className="card-text" style={{fontSize: "15px"}}>
          Bailes realizados : {props.bailes}
        </Card.Text>
        <Button variant="danger">Ver presentacion completa <BsYoutube /> </Button>
      </Card.Body>
    </Card>
  );
}

export default CardPresentaciones;
