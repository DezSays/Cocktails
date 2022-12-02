import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from './components/layout/Layout';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BrowseCocktails from './components/BrowseCocktails'
import Recipes from './components/Recipes'
import App from './App';
import Footer from './components/Footer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
       <Router>
        <Layout>
          <Routes>
              <Route path='/' element={<App />} />
              <Route path='/BrowseCocktails' element={<BrowseCocktails />} />
              <Route path='/Recipes' element={<Recipes />} />
          </Routes>
        </Layout>
    </Router>
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
