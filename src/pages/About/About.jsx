import './About.css'
import { useParams } from 'react-router-dom'

const About = () => {
  const { info } = useParams()

  return (
    <div className='About'>
      <h1>About Us</h1>
      <p>{info}</p>
    </div>
  )
}

export default About
