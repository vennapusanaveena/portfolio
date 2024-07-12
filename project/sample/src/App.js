import About from './About';
import './App.css';
import Edu from './Edu';
import Hi from './Hi';
import Img from './image';
import Contact from './Contact.js';

function App() {
  return(
    <div className="App">
      <h1 className='portfolio'>portfolio</h1>
      <div className='dis'>
        <Hi/>
        <Img/>
      </div>
      <Edu/>
      <About/>
      <Contact/>

    </div>
  );
}

export default App;
