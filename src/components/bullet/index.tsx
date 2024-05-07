import './bullet.css'

type Props = {
  bullet: string;
}

export default function Bullet({ bullet }: Props) {
  return (
    <li className='bullet-li'>
      <span className='bullet'>{bullet}</span>
    </li>
  )
}