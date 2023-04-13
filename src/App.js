import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import Banner from './Components/Home/Banner.js';
import Page1 from './Pages/Page1.js';
import Page2 from './Pages/Page2.js'
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page1/>}/>
          <Route path="/next" element={<Page2/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
