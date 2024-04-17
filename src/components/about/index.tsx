type AboutPageProps = Array<{
  title: string
  bullets: string[]
}>

type Props = {
  sectionTitle: string
  data: AboutPageProps
}

export default function AboutInnerSection({sectionTitle, data}: Props) {
  return (
    <div className="about-inner-section">
      <h1 className='about-section-title'>{sectionTitle}</h1>
      {
        data.length > 0 && (
        <ul>
          {
            data.map((section, index) => {
              return (
                  <li key={index}>
                    <span>{section.title}</span>
                    {
                      section.bullets?.length > 0 && (
                        <ul>
                          {
                            section.bullets.map((bullet, index) => {
                              return (
                                <li key={index}><span>{bullet}</span></li>
                              )
                            })
                          }
                        </ul>
                      )
                    }
                  </li>
              )
            })
          }
        </ul>
      )}
    </div>
  )
}