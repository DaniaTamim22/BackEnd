import React from 'react'
import { useState } from 'react'

const Navbar = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)



    const userLogin = () => {

        setIsLoggedIn(state => !state)
        // console.log('welcome ' + name + '!')


    }
    return (
        <div className='navbar d-flex'>
            <h1>Book tips</h1>
            <button className='btn btn-primary' onClick={userLogin}>{isLoggedIn ? 'Welcome Dania!' : 'Login'}</button>

        </div>
    )
}

export default Navbar