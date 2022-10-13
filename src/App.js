import { BrowserRouter, Routes, Route }  from 'react-router-dom';
import React from 'react';

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
