import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Blog from './pages/blog';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/blog',
      element: <Blog />
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
