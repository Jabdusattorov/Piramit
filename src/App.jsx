import "./app.scss"
import Page1 from './Pages/Page1';
import Page2Video from './Pages/Page2Video';
import Page3Plans from './Pages/Page3Plans';
import Login from './Pages/Login';
import { Link, Route, Routes } from 'react-router-dom';

import "./Pages/ComponentsPage1/pageAbout1.scss"
import LeftButton from "./Pages/components/LeftButton";
import RightBUtton from './Pages/components/RightButton';

function App() {
  return (
    <div className="App">
      <LeftButton />
      <RightBUtton />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/page1' element={<Page1 />} />
        <Route path='/page2' element={<Page2Video />} />
        <Route path='/page3' element={<Page3Plans />} />
      </Routes>
    </div>
  )
}

export default App
