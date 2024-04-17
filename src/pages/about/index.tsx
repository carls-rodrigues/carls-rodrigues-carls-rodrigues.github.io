import { useLoaderData } from "react-router-dom"
import Header from "../../components/header"
import AvatarImg from '../../assets/avatar.jpeg'
import AboutInnerSection from "../../components/about"
import './about.css'
import { icons } from "../../assets/svg"
import { AppConfig } from "../../@types/types"
import { useEffect } from "react"

export default function AboutMe() {
  const data: AppConfig = useLoaderData() as AppConfig;
  useEffect(() => {
    document.title = "About Me - " + data.name
 }, [data.name]);
  return (
    <div className="container">
      <div className="about-hero ">
        <Header data={data.menu} />
        {/* <header className="header">
          <nav id="menu"></nav>
          <button id="language" onClick={() => null} type="button"></button>
        </header> */}
        <div className="about__content">
          <section className="about-left">
            <div className="about-avatar">
              <img src={AvatarImg} alt="Carlos Rodrigues"/>
            </div>
            <div className="about-head">
              <h3>{data['about-page'].name}</h3>
              <p>{data['about-page'].short_biography}</p>
            </div>
            <div id="menu-left" className="about-menu">
              <ul>
                {
                  data['about-page'].user_info?.map((info, index: number) => {
                    return (
                      <li key={index}>
                        <img src={icons[info.title.toLowerCase() as never]} />
                        {info.title === 'Location' ? (
                          <span>{info.title}</span>

                        ): (
                          <a href={info.link} target="_blank">{info.title}</a>
                        )}
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </section>
          <section className="about-right">
            <AboutInnerSection sectionTitle="Education" data={data["about-page"].education} />
            <AboutInnerSection sectionTitle="Work experience" data={data['about-page'].experience} />
            <AboutInnerSection sectionTitle="Publications" data={data['about-page'].publications} />
            <AboutInnerSection sectionTitle="Awards" data={data['about-page'].awards} />
            <AboutInnerSection sectionTitle="Teaching" data={data['about-page'].teaching} />
            <AboutInnerSection sectionTitle="Services and leadership" data={data['about-page'].service_and_leadership} />
            <AboutInnerSection sectionTitle="Skills" data={data['about-page'].skills} />
          </section>
        </div>
        <footer className="footer">
          <p>@2024 Carlos Rodrigues</p>
        </footer>
      </div>
    </div>
  )
}