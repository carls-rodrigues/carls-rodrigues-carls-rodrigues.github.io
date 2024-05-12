import './about.css';
import Header from '../../components/header';
import { about_page } from '../../config';
import { useEffect, useState } from 'react';
import AboutContentSection from '../../components/about-section';

export type AboutUserData = {
  sectionTitle: string;
  sectionData: typeof about_page.data.awards;
}

export default function About() {
  const [data, setData] = useState<AboutUserData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setData([])
    for (const key in about_page.data) {
      const section = key.charAt(0).toUpperCase() + key.slice(1);
      const sectionData: AboutUserData = {
        sectionTitle: section.split('_').map(c => c.charAt(0).toUpperCase() + c.slice(1)).join(' '),
        sectionData: about_page.data[key as never]
      }
      setData(prev => [...prev, sectionData])
    }
    document.title = 'About - ' + about_page.name
    setLoading(false)
  }, [loading])
  if (loading) return null
  return (
    <section className='about-hero'>
      <Header />
      <div className='about__content'>
        <div className='about-left'>
          <div className="about-avatar">
            <img src="/avatar.jpeg" alt={about_page.name} />
          </div>
          <div className="about-head">
            <h3>{about_page.name}</h3>
            <p>{about_page.short_biography}</p>
          </div>
          <div className="about-menu">
            <ul>
              {
                about_page.user_info.map((item, index) => {
                  const icon_name = `/svg/${item.title.toLowerCase().split(' ').join('-')}.svg`;
                  return (
                    <li key={index}>
                      <img src={icon_name} />
                      {
                        item.link ? <a href={item.link} target='_blank'>{item.title}</a> : <span>{item.content}</span>
                      }
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
        <div className='about-right'>
          {
            data.map((item, index) => {
              return (
                <div key={index} className='about-inner-section'>
                  <AboutContentSection data={item} />
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}
