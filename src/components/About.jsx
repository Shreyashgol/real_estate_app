import React,{useState,useContext} from 'react'

const About = () => {
  const [length,setLength] = useState(0)
  const a1 = () => {
    setLength(length+1)
  }
  return (
    <div>About</div>
  )
}

export default About