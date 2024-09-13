import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFoundError from './Pages/ERROR_404/NotFoundError.tsx';
import NavBar from './components/NavBar/NavBar.tsx';
import Login from './Pages/Login/Login.tsx';
import Homepage from './Pages/HomePage/Homepage.tsx';
import Cryptocurrencies from './Pages/CryptoCurrencies/Cryptocurrencies.tsx';
import Register from './Pages/Register/Register.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import CryptoCard from './components/CryptoCard/CryptoCard.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <Homepage />
      </>
    ),
    errorElement: <NotFoundError />
  },
  {
    path: "/cryptocurrencies",
    element: (
      <>
        <NavBar />
        <Cryptocurrencies />
      </>
    ),
    errorElement: <NotFoundError />
  },
  {
    path: "/register",
    element: (
      <>
        <NavBar />
        <Register />
      </>
    ),
    errorElement: <NotFoundError />
  },
  {
    path: "/login",
    element: (
      <>
        <NavBar />
        <Login />
      </>
    ),
    errorElement: <NotFoundError />
  },
  {
    path: "/cryptocurrencies/:id",
    element:(
      <>
        <NavBar />
        <CryptoCard />
      </>
    ),
    errorElement: <NotFoundError />
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
