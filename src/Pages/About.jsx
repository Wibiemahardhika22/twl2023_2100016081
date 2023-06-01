import React from 'react'
import AboutComponent from '../Components/AboutComponent'
import FooterComponent from '../Components/FooterComponent'
import HeaderComponent from '../Components/HeaderComponent'

const About = () => {
    return (
        <>
            <HeaderComponent
                title="Tentang Saya"
            />
            <AboutComponent />
            <FooterComponent />
        </>
    )
}

export default About