import React from 'react'
import './Book.css'

const Book = ({ title, body }) => {
    return (
        <div className='bok mb-2'>
            <h2 > {title} </h2>
            <p> {body} </p>
            <button >Mark as read</button>
        </div>
    )
}

export default Book