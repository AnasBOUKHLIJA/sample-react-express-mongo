import React, { useMemo } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import { ToastContainer } from 'react-toastify';
import { ToastProvider } from './Context/Toast';
import { BackdropProvider } from './Context/Backdrop';
import ScrollToTop from "./ScrollToTop";

import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
        <ToastProvider>
          <BackdropProvider >
            <BrowserRouter>
              <ScrollToTop />
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </BrowserRouter>
            <ToastContainer />
          </BackdropProvider>
        </ToastProvider>
    </div>
  );
}

export default App;
