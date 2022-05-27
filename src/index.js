import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "aos/dist/aos.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import * as ReactDOM from 'react-dom/client';
import { legacy_createStore as createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import ListMobil from "./pages/ListMobil";
import Home from "./pages/Home";
import { SignIn } from "./components";
import ListCars  from './components/ListCars';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Protected } from './components';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Provider store={store}>
    <BrowserRouter>
    <Routes>
          <Route path="/" element={<App />} />
          <Route path="/signin" element={<SignIn />} />      
          <Route path="/listmobil" element={ <ListMobil/> } />
           <Route path="/listcars" 
            element={
              <Protected>
                <ListCars />
              </Protected>
            } 
          />
        </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
