import './blog.css'
import { useEffect, useState } from 'react'
import Header from '../../components/header'
import Container from '../../components/container'
import { articles } from './articles'

export default function Blog() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    document.title = 'Blog'
    setIsLoading(false)
  }, [isLoading])

  if(isLoading) return null;
  
  return (
    <Container>
      <section className="blog-hero">
        <Header />
        <div className="blog__content">
          {
            articles.map((article) => (
              <a href={`/blog/${article.title}`} key={article.id} className="blog__content-grid__box">
                <div className="blog__content-grid__box">
                  <h1>{article.title}</h1>
                  <p>{article.content.substring(0, 580)}...</p>
                </div>
              </a>
            ))
          }
        </div>
        <footer className="footer">
          <p>@2024 Carlos Rodrigues</p>
        </footer>
      </section>
    </Container>
  )
}