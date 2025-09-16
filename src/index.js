import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './routeExample/Login';
import Profile from './routeExample/Profile';
import Signup from './routeExample/Signup';
import Dashboard from './routeExample/Dashboard';
import Navigation from './routeExample/Navigation';
import Main from './PropDriling/Main';
import UseRef from './Hooks/UseRef';
import UseReducer from './Hooks/UseReducer';
import Memoization from './Hooks/Memoization';
import UseMemo from './Hooks/UseMemo';
import CustomHook from './Hooks/CustomHook';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  // <Main/>
  // <UseRef/>
  // <UseReducer/>
  // <Memoization/>
  // <UseMemo/>
  <CustomHook/>
    // <App color="pink" size="25" />
    // BrowserRouter -> Routes -> Route (Multiple) -> Route(Multiple)
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Navigation/>}>
    //     <Route index element={<Login/>}/>
    //     <Route path="profile" index element={<Profile/>}/>
    //     <Route path="signup"index element={<Signup/>}/>
    //     <Route path="dashboard"index element={<Dashboard/>}/>
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
