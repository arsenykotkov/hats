import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Menu } from 'antd';
import Home from './Home';
import News from './News';
import About from './About';
import Model from './Model';
import Contacts from './Contacts';
import menuItems from './menuItems';

function App() {
  return (
    <div className="App">
      <Menu items={menuItems} mode="horizontal" />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/news' element={<News />} />
        <Route path='/about' element={<About />} />
        <Route path='/model' element={<Model />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
    </div>
  );
}

export default App;
