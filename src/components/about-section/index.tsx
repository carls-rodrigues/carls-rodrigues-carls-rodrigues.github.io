import './about-section.css'
import { AboutUserData } from "../../pages/about"
import Bullets from '../bullets'

type Props = {
  data: AboutUserData
}

export default function AboutContentSection({ data }: Props) {
  return (
    <>
      <h1 className='about-section-title'>{data.sectionTitle}</h1>
      <ul>
        {
          data.sectionData?.map((subData, index) => {
            return (
              <li key={index} className='sub-li'>
                <span className='sub-title'>{subData.title}</span>
                <Bullets data={subData.bullets} />
              </li>
            )
          })
        }
      </ul>
    </>
  )
}