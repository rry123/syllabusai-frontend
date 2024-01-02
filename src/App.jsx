import React from 'react'
import Playground from './components/Playground'
import HomePage from './pages/Home';
import HistoryPage from './pages/HistoryPage'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/playground",
    element: <HomePage></HomePage>,
  },
  {
    path: "/history",
    element: <HistoryPage/>,
  },


]);

export default function App() {
  return (
    <div  className='w-screen flex flex-col items-center justify-center'>
      <RouterProvider router={router} />
    </div>
  )
}
