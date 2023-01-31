import React from 'react'
import './Styles/Card.css'
import { Link } from 'react-router-dom'

export default function Card({name, capital, region, flags,id, coatOfArms}) {
  return (
    <div className='cardPrimary'>
        <section className='cardInfo'>
            <Link className='cardTitle' to={`/countries/${id}`}>{name}</Link>
            {capital ?
            capital.map(cap => (<h4 className='cardInfoComplement' key={cap} > Capital: {cap}</h4>))
            : 'Whitout Capital City'
          }
            <h4 className='cardInfoComplement' >Continent: {region} </h4>
        </section>
        <section className='cardImage'>
            <img className='cardFlag' src={flags} alt="Flag of Country .png" />
        </section>
        {/* <section  >
            <img className='cardFlag' src={coatOfArms} alt="Coat of arms.svg" />
        </section> */}
    </div>
  )
}
