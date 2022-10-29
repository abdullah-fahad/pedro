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
          <strong>My name is Pedro, </strong> I offer high-quality perfect-priced website creation, and with over 5 years of experience in full-stack web development, I can make you the most stunning website you would ever have at the same price, using ReactJs for the frontend, NodeJs and ExpressJs for the backend, MongoDB for the database, Material-UI and bootstrap for the styling, and lastly a sense of creativity I will bring your ideas into reality.
I promise you'll never regret buying my services.
        </p>
      </div>
      <div className='my-skills'>
        <div className='list'>
          <h2>What I'm good at?</h2>
          <ul>
            <strong>for frontend:</strong>
            <li className='d-flex'><p className='flex-grow-1'>Assembling the frontend with <strong>ReactJs</strong></p><img className='list-img' alt="react" src='https://tse1.mm.bing.net/th?id=OIP.lvR5nni7xdPCxU-tC6tzzgHaHa&pid=Api&P=0' /></li>
            <li className='d-flex'><p className='flex-grow-1'>Styling with <strong>css</strong> and <strong>bootstrap</strong></p><img className='list-img' alt="react" src='https://tse3.mm.bing.net/th?id=OIP.BLrezSeZuna1mdA4UzyjLwHaGO&pid=Api&P=0' /></li>
            <li className='d-flex'><p className='flex-grow-1'>Customization with <strong>Material-ui</strong> components</p><img className='list-img' alt="react" src='https://tse4.mm.bing.net/th?id=OIP.0rHhkJGjUw37i-wGtakm3AHaHa&pid=Api&P=0' /></li>
            <strong>for frontend:</strong>
            <li className='d-flex'><p className='flex-grow-1'>Assembling the frontend with <strong>ReactJs</strong></p><img className='list-img' alt="react" src='https://tse1.mm.bing.net/th?id=OIP.lvR5nni7xdPCxU-tC6tzzgHaHa&pid=Api&P=0' /></li>
            <li className='d-flex'><p className='flex-grow-1'>Styling with <strong>css</strong> and <strong>bootstrap</strong></p><img className='list-img' alt="react" src='https://tse3.mm.bing.net/th?id=OIP.BLrezSeZuna1mdA4UzyjLwHaGO&pid=Api&P=0' /></li>
            <li className='d-flex'><p className='flex-grow-1'>Customization with <strong>Material-ui</strong> components</p><img className='list-img' alt="react" src='https://tse4.mm.bing.net/th?id=OIP.0rHhkJGjUw37i-wGtakm3AHaHa&pid=Api&P=0' /></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
