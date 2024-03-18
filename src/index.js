import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home'
import Movies from './components/Movies';
import Genres from './components/Genres';
import EditMovie from './components/EditMovie';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <Home />},
      {
        path: "/movies", 
        element: <Movies />
      },
      {
        path: "/genres", 
        element: <Genres />
      },
      {
        path: "/admin/movie/0", 
        element: <EditMovie />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);