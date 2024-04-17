import { useEffect, useState } from 'react'
import './header.css'
import { useLocation } from 'react-router-dom'
import { Menu } from '../../@types/types';
import { icons } from '../../assets/svg';

type Props = {
  data: Menu
}

export default function Header({data}: Props) {
  const [menu, setMenu] = useState<any[]>([])
  const [language, setLanguage] = useState<string>(localStorage.getItem("language") ?? 'en')
  const location = useLocation();
  const currentPath = location.pathname
  function switchLanguage() {
    if (language === "en") {
      localStorage.setItem("language", "pt");
      setLanguage("pt");
    } else {
      localStorage.setItem("language", "en");
      setLanguage("en");
    }
    window.location.reload();
  }
  useEffect(() => {
    for (const [key, value] of Object.entries(data)) {
      if(currentPath === `/${value}` || currentPath === `${value}`) {
        continue
      }
      setMenu(prev => {
        if (prev.some(item => item.key === key)) {
          return prev
        }
        return [...prev, {key, value}]
      })
    }
  }, [data, currentPath])
  return (
    <header className="header">
      <nav>
        <ul>
          {
            menu.map((item, index) => (
              <li key={index}>
                {
                  item.key.includes('curriculum') ? (
                    <a key={item.key} href={`${item.value}`} target='_blank'>{item.key}</a>
                  ):
                  (<a key={item.key} href={`${item.value}`}>{item.key}</a>)
                }
              </li>
            ))
          }
        </ul>
        </nav>
      <button onClick={switchLanguage} type="button">
        <img src={language === 'en' ? icons.usa : icons.brazil} />
      </button>
    </header>
  )
}