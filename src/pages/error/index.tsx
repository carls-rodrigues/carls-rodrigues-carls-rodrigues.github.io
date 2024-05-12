
import { useLocation, useNavigate} from 'react-router-dom'
import './error.css'
import { useEffect, useState } from 'react'

export default function ErrorPage() {
  const { state, pathname } = useLocation()
  const [message, setMessage] = useState('The page you are looking for was not found.')
  const [returnTo, setReturnTo] = useState('/')
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()

  const pages = {
    '/': 'home',
    '/about': 'about',
    '/blog': 'blog',
  }
  

  useEffect(() => {
    if(pathname !== '/error') {
      navigate('/error', {replace: true})
    }
  }, [navigate, pathname])

  useEffect(() => {
    document.title = 'Error 404'
    setMessage(state?.message || 'The page you are looking for was not found.')
    setReturnTo(state?.returnTo || '/')
    setIsLoading(false)
    return () => {
      setMessage('')
      setReturnTo('')
    }
  }, [state?.message, state?.returnTo, isLoading])
  if (isLoading) return null
  return (
    <main className="container">
      <div className="error_container">
        <h1>ERROR 404</h1>
        <p>{message}</p>
        <a href={returnTo}>Go back to the {pages[returnTo as never]} page</a>
      </div>
    </main>
  )
}