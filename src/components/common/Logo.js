import React from 'react'
import { Link } from 'react-router-dom'

export default function Logo({url, className}) {
    return (
        <>
            <Link to="/" className={className}>
                {/* <img src={url} alt="logo" /> */}
                <h2 style={{fontSize: '3em'}}>Valley</h2>
            </Link>
        </>
    )
}
