import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



const TercerComponente = (props) =>{


 return (


<Card >
  <Card.Img variant="top" src="http://placehold.it/500x325.jpg" />
  <Card.Body>
    <Card.Title>{props.info?.title}</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Find Out More!</Button>
  </Card.Body>
</Card>







);

}

export default TercerComponente;