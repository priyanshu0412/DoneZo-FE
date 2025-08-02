"use client"
import React from 'react'
import HomeNavbar from './homeNavbar'
import HomeHeroSection from './heroSection'
import HomeFeatureSection from './homeFeatureSection'
import HomeProjectSteps from './homeStepsProject'
import HomeCompanySection from './homeCompanySection'
import HomeCallToAction from './homeCallToAction'
import HomeFooter from './homeFooter'
import "../../app/style/homeLanding.css"

// -------------------------------------------

const HomePage = () => {
    return (
        <>
            <HomeNavbar />
            <HomeHeroSection />
            <HomeFeatureSection />
            <HomeCallToAction />
            <HomeProjectSteps />
            <HomeCompanySection />
            <HomeFooter />
        </>
    )
}

export default HomePage