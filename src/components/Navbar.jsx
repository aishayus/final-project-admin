import React from 'react'
import profile from '../assets/profile.png'

const Navbar = () => {
    return (
        <div className='max-padd-container flexBetween py-2'>
            <h1 className='bold-24'>Zhabest <h4 className='bold-16'>Admin Panel</h4></h1>
            <img src={profile} alt='profileImg' height={46} width={46} className='rounded-full'/>
        </div>
    )
}

export default Navbar
