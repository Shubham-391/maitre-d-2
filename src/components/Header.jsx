import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'

function Header() {
    return (
        <>
            <div className='Header'>
                <div className='Max-width-1164 Mx-auto Px-12 H-100 D-flex Flex-col'>
                    <Navbar />
                    <HeroSection/>
                </div>
            </div>
        </>
    )
}

export default Header