import {Routes,Route } from 'react-router-dom';
import Page1 from './Pages/Page1.js';
import Page2 from './Pages/Page2.js';
import Page3 from './Pages/Page3.js';
import './App.css';

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Page1/>}/>
          <Route path="/category" element={<Page2/>}/>
          <Route path="/next" element={<Page3/>}/>
        </Routes>
    </>
  );
}

export default App;
