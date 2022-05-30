import React from 'react'
import { useState } from 'react'

const Navbar = () => {

    const [isLoggedIn, setisLoggedIn] = useState(false)



    const userLogin = (name) => {
        // console.log('welcome ' + name + '!')


    }
    return (
        <div className='navbar d-flex'>
            <h1>Book tips</h1>
            <button className='btn btn-primary' onClick={userLogin('Dania')}>{isLoggedIn ? 'Login' : 'Welcome Dania!'}</button>

        </div>
    )
}

export default Navbar