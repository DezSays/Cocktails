import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from './components/layout/Layout';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BrowseCocktails from './components/BrowseCocktails'

import App from './App';
import Footer from './components/Footer';
import {createStore} from 'redux'; 
import {Provider} from 'react-redux'
import reducer from './reducers/reducer'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())//reducer


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
       <Router>
        <Layout>
          <Routes>
              <Route path='/' element={<App />} />
              <Route path='/CocktailLibrary' element={<BrowseCocktails />} />
          </Routes>
        </Layout>
    </Router>
    <Footer />
  </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
