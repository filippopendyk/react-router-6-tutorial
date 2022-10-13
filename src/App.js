import { BrowserRouter, Routes, Route }  from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';

function App() {
  return <BrowserRouter> 
    <Routes>
        <Route path='/' element={<div>home page</div>}/>
        <Route 
          path='testing' 
          element={
            <div>
              <h2>testing</h2>
            </div>
          }
        />
    </Routes>
  </BrowserRouter>;
}

export default App;
