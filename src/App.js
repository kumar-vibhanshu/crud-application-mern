import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import AllUsers from './components/AllUsers';
import AddUser from './components/AddUser';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/alluser' element={<AllUsers />} />
        <Route path='/adduser' element={<AddUser />}/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
