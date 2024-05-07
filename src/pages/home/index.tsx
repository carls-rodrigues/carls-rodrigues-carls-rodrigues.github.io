import '../../assets/styles/animation.css';
import './home.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { useState, useEffect } from 'react';
import Container from '../../components/container';


export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    document.title = 'Carlos Rodrigues - Home'
    setIsLoading(false)
  }, [isLoading])
  if(isLoading) return null;
  return (
    <Container>
      <div className='hero'>
        <Header />
        <div className='hero__content text-blur-out'>
          <h1 className='text-pop-up-top'>Carlos Rodrigues</h1>
          <h2>Machine and Deep Learning</h2>
        </div>
        <Footer />
      </div>
    </Container>
  )
}
