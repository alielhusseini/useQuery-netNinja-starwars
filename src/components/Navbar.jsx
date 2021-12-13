import React from 'react'

export default function Navbar({ setPage }) {
    return (
        <nav>
            <button onClick={() => setPage('people')}>People</button>
            <button onClick={() => setPage('planets')}>Planets</button>
        </nav>
    )
}
