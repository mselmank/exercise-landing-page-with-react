import PrimerComponente from './components/Navbar';
import SegundoComponente from './components/Jumbotron';
import TercerComponente from './components/Card';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Footer from './components/Footer';

let phrases = [

  {img:'http://placehold.it/500x325.jpg', title: 'Card Title 1', text: ' Some quick exam and make up the bulk of the cards content.', button: { label: 'Find Out More!' } },
  {img:'http://placehold.it/500x325.jpg', title: 'Card Title 2', text: ' Some quick example text to build on the card title and make up the bulk of the cards content.', button: { label: 'Find Out More!' } },
  {img:'http://placehold.it/500x325.jpg', title: 'Card Title 3', text: ' Some quick example text to bu the card title and make up the bulk of the cards content.', button: { label: 'Find Out More!' } },
  {img:'http://placehold.it/500x325.jpg', title: 'Card Title 4', text: ' Some quick exd title and make up the bulk of the cards content.', button: { label: 'Find Out More!' } }

]


let menu = [

  { label: "Home", url: '/home' },
  { label: "About", url: '/about' },
  { label: "Services", url: '/services' },
  { label: "Contact", url: '/contact' },
]

function App() {
  return (
    <>
      <PrimerComponente
        items={menu} />
      <Container>
        <Row>
          <Col> <SegundoComponente /></Col>

        </Row>
        <Row>
          {phrases.map((item,index)=>
          <Col key={index}> <TercerComponente info={item}/></Col>
          )}
   
        </Row>
      </Container>
      <Footer/>
    </>

  );
}
export default App;
