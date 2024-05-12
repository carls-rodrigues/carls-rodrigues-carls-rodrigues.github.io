import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Blog from './pages/blog';
import BlogPost from './pages/blog/[id]';
import ErrorPage from './pages/error';
import Container from './components/container';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <ErrorPage />
    },
    {
      path: '/about',
      element: <About />,
      errorElement: <ErrorPage />
    },
    {
      path: '/blog',
      element: <Blog />,
      errorElement: <ErrorPage />
    },
    {
      path: '/blog/:bl',
      element: <BlogPost />,
      errorElement: <ErrorPage />
    },
    {
      path: '*',
      element: <ErrorPage />
    }
  ])
  return (
    <Container>
      <RouterProvider router={router} />
    </Container>
  )
}

export default App
