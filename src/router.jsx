import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import ProtectedRoute from './ProtectedRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: '/home',
            element: <Home />,
          },
          {
            path: '/about',
            element: <About />,
          },
          {
            path: '/contact',
            element: <Contact />,
          },
        ],
      },
    ],
  },
]);
