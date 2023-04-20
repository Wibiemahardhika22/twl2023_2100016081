import React from 'react'
import CardComponent from '../Components/CardComponent'

const About = () => {
  return (
    <>
      <h3 className='font-bold text-2xl flex flex-col items-center py-10'>About Me</h3>
      <CardComponent 
        name = "Wibie Mahardhika Adi"
        id = "2100016081"
        description = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque beatae placeat saepe exercitationem, architecto ex."
      />
    </>
  )
}
export default About