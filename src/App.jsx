import React from 'react'
import Playground from './components/Playground'
import HomePage from './pages/Home';
import HistoryPage from './pages/HistoryPage'
import { SignOutButton, SignInButton, SignedIn, SignedOut } from "@clerk/clerk-react"

import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import LandingPage from './pages/LandingPage';
import AnswerPage from './pages/AnswerPage';
import AnalysePage from './pages/AnalysePage';

const router = createHashRouter([
  {
    path: "/playground",
    element: <HomePage></HomePage>,
  },
  {
    path: "/",
    element: <HomePage></HomePage>,
  },
  {
    path: "/history",
    element: <HistoryPage/>,
  },
  {
    path: "/answer",
    element: <AnswerPage/>,
  },
  {
    path: "/analyse",
    element: <AnalysePage/>,
  },
  {
  path:"*",
  element:<HomePage></HomePage>,
  },

]);

export default function App() {
  return (
    <div>
    <SignedOut>
       
      <LandingPage/>
    </SignedOut>
    <SignedIn>
      <div  className='w-screen flex flex-col items-center justify-center'>
        <RouterProvider router={router} />
      </div>
  </SignedIn>
    
  </div>
  )
}
