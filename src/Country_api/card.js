import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardComponent(prop) {
    const{country,flag,population,captial}=prop
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={flag}/>
      <Card.Body>
        <Card.Title>{country}</Card.Title>
        <Card.Text>
          {/* Some quick example text to build on the card title and make up the
          bulk of the card's content. */}
          Captial: {captial}
        </Card.Text>
        <Card.Text>{population}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
