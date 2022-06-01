import React from 'react'
import { useState } from 'react'
import './Book.css'

const Book = ({ title, body }) => {

    const [isRead, setIsRead] = useState(false)
    const [isMarked, setisMarked] = useState(false)

    const markAsRead = () => {
        setIsRead(state => !state)

    }

    const setIsMarked = () => {
        setisMarked(state => !state)
    }

    return (
        <div className={` card ${isMarked && ' marked'}`}>
            <div className={`bok mb-2 text-center ${isRead && ' read'}`} >
                <h2 > {title} </h2>
                <p> {body} </p>
                <button className='btn btn-secondary' onClick={markAsRead}>{isRead ? 'Mark as unread' : 'Mark as read'}</button>
            </div >
        </div>
    )
}

export default Book