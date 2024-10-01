import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";
import reportWebVitals from './reportWebVitals';
import Public from './routes/Public';
import ProtectedRouteWrapper from './routes/ProtectedRouteWrapper';
import { LoginProvider } from './LoginContext';
import Protected from './routes/Protected';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/public",
    element: <Public />
  },
  {
    path: "/protected",
    element: <ProtectedRouteWrapper><Protected /></ProtectedRouteWrapper>
    
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <LoginProvider>
    <RouterProvider router={router} />
  </LoginProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
