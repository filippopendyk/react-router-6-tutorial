import { BrowserRouter, Routes, Route }  from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Error from './pages/Error';

function App() {
  return <BrowserRouter> 
    <Routes>
        <Route path='/' element={<Home/>}>
          <Route path='about' element={<About/>} />
          <Route path='products' element={<Products/>} />
          <Route path='*' element={<Error />} />
        </Route>
        <Route path='dashboard' element={<div>Dashboard</div>}>
          <Route path='stats' element={<div>Stats</div>}/>
        </Route>
    </Routes>
  </BrowserRouter>;
}

export default App;
