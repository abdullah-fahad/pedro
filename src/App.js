import logo from './logo.svg';
import './App.css';
import * as B from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <B.Navbar expand="lg">
        <div className='container-fluid d-flex'>
          <B.Navbar.Brand href="#home" className='typo nav-brand p-2 flex-grow-1'><strong>Pedro.dev</strong>{"</>"}</B.Navbar.Brand>
          <B.Navbar.Toggle aria-controls="basic-navbar-nav" className='toggle' />
          <B.Navbar.Collapse id="basic-navbar-nav" className='basic-navbar-nav'>
            <B.Nav className="basic-navbar-nav ms-auto">
              <B.Nav.Link href="#home" className='typo link1'><strong>Summary</strong></B.Nav.Link>
              <B.Nav.Link href="#link" className='typo link2'><strong>Services</strong></B.Nav.Link>
              <B.Nav.Link href="#link" className='typo link3'><strong>Projects</strong></B.Nav.Link>
              <B.Nav.Link href="#link" className='typo link4'><strong>Contact</strong></B.Nav.Link>
            </B.Nav>
          </B.Navbar.Collapse>
        </div>
      </B.Navbar>
      <div className='iam-pedro'>
        <h2 className='typo'>Heloo world!</h2>
        <p className='typo'>
          <strong>My name is Pedro, </strong> a full-stack web developer who has <br /> proven experience for 4+ years,
        </p>
      </div>
      <div className='my-skills'>
        <h2>My skills:</h2>
      </div>
    </div>
  );
}

export default App;
