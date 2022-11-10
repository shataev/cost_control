import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { ErrorPage } from './pages/ErrorPage';
import App from './App';
import { CostsPage } from './pages/CostsPage';
import { AddCostPage } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: 'add-cost',
        element: <AddCostPage/>,
      },
      {
        path: 'costs',
        element: <CostsPage/>,
      },
    ]
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
