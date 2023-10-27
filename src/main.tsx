import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import './styles/tailwind.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/Roots.tsx';
import Home from './pages/home/Index.tsx';
import About from './pages/about/Index.tsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root')!);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
