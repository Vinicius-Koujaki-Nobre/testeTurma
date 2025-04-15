import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import './index.css'
import App from './App.jsx'
import Contact from './Contact.jsx';
import Media from './Media';
import Imc from './Imc';

import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Req from './Req';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/media",
    element: <Media />,
  },
  {
    path: "/imc",
    element: <Imc/>,
  },
  {
    path: "/requirement",
    element: <Req />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Analytics />
    <SpeedInsights />
    <RouterProvider router={router} />
  </StrictMode>,
)

