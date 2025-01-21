import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import MainLayout from './Layout/MainLayout'
import Homepage from './Pages/Homepage'

const App = () => {
 
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Homepage />} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
