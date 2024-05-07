import './header.css';
import { useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const menu = [
    {
      name: 'home',
      uri: '/'
    },
    {
      name: 'about me',
      uri: '/about'
    },
    {
      name: 'blog',
      uri: '/blog'
    },
    {
      name: 'curriculum vitae',
      uri: 'http://lattes.cnpq.br/0176590198026811'
    }
  ];
  return (
    <header className='header'>
      <nav>
        {
          menu.map((item, index) => {
            if (location.pathname === item.uri) return null;
            return (
              <a key={index} href={item.uri} target={item.name === 'curriculum vitae' ? '_blank' : ''}>
                {item.name}
              </a>
            )
          })
        }
      </nav>
    </header >
  )
}
