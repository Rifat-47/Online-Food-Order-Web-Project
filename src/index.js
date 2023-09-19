import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import Login from './components/UserAccess/Login';
import Register from './components/UserAccess/Register';
import { RouterProvider, createBrowserRouter, Routes, Route, BrowserRouter } from "react-router-dom";

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <App />,
//     },
//     {
//         path: "/login",
//         element: <Login />,
//     }]);

ReactDOM.render(
    // <RouterProvider router={router} />, document.getElementById('root'));
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
        </Routes>
    </BrowserRouter>, document.getElementById('root'));
