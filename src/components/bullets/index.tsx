import './bullets.css'
import Bullet from "../bullet"

type Props = {
  data: string[]
}

export default function Bullets({ data }: Props) {
  if (!data) return null
  return (
    <ul className='bullets-ul'>
      {
        data?.map((bullet, index) => {
          return (
            <Bullet key={index} bullet={bullet} />
          )
        })
      }
    </ul>
  )
}