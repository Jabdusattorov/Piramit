import "./app.scss"
import Page1 from './Pages/Page1';
import Page2Video from './Pages/Page2Video';
import Page3Plans from './Pages/Page3Plans';
import Login from './Pages/Login';
import { Link, Route, Routes } from 'react-router-dom';

import "./Pages/ComponentsPage1/pageAbout1.scss"
import Home from './Pages/Home';
import Nav from './Pages/components/Nav';
import Location from './Pages/Location';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
           <Route path="messages" element={<Nav />}/>
        </Route> 
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<Page1 />} />
        <Route path="/video" element={<Page2Video />} />
        <Route path="/page3" element={<Page3Plans />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </div>
  );
}

export default App
