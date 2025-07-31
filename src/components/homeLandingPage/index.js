"use client"
import React from 'react'
import HomeNavbar from './homeNavbar'
import HomeHeroSection from './heroSection'
import HomeFeatureSection from './homeFeatureSection'
import "../../app/style/homeLanding.css"
import HomeProjectSteps from './homeStepsProject'

// -------------------------------------------

const HomePage = () => {
    return (
        <>
            <HomeNavbar />
            <HomeHeroSection />
            <HomeFeatureSection />
            <HomeProjectSteps />
        </>
    )
}

export default HomePage