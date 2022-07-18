import './App.css';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import Home from './Home';
import News from './News';
import About from './About';
import Model from './Model';
import Contacts from './Contacts';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='news' element={<News />} />
        <Route path='about' element={<About />} />
        <Route path='model' element={<Model />} />
        <Route path='contacts' element={<Contacts />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
      <>
        <Link to="/">Home</Link>
        <Link to="/news">News</Link>
        <Link to="/about">About</Link>
        <Link to="/model">Model</Link>
        <Link to="/contacts">Contacts</Link>
        <Outlet />
      </>
  );
}

export default App;
