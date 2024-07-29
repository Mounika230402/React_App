import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardComponent(prop) {
    const{country,flag,population,capital}=prop

  return (
    <Card style={{ width: '18rem',marginTop:'2vh' }}>
      <Card.Img variant="top" src={flag} style={{padding:"20px"}}/>
      <Card.Body>
        <Card.Title>{country}</Card.Title>
        <Card.Text>
          {/* Some quick example text to build on the card title and make up the
          bulk of the card's content. */}
          Captial: {capital}
        </Card.Text>
        <Card.Text>Population :{population}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
