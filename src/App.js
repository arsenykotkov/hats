import { useState } from 'react';
import './App.css';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import Home from './Home';
import News from './News';
import About from './About';
import Model from './Model';
import Contacts from './Contacts';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

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

function Layout(args) {
  return (
      <div style={{
        height: '46px',
        width: '100%',
      }}>

      <Navbar>
        <Nav>
          <NavLink>
              <Link to="/">Home</Link>
          </NavLink>
          <NavLink>
            <Link to="/news">News</Link>
          </NavLink>
          <NavLink>
            <Link to="/about">About</Link>
          </NavLink>
          <NavLink>
            <Link to="/model">Model</Link>
          </NavLink>
          <NavLink>
            <Link to="/contacts">Contacts</Link>
          </NavLink>
        </Nav>
      </Navbar>

      <Outlet />
    </div>
  );
}

export default App;
