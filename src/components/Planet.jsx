import React from 'react'

export default function Planet({ population, terrain, name }) {
    return (
        <div className='card'>
           <h3>{ name }</h3> 
           <p>Population - { population }</p>
           <p>Terrain - { terrain }</p>
        </div>
    )
}
