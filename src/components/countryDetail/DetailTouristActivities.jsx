import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './Styles/DetailAT.css'

export default function DetailTouristActivities() {
    const countryDetail = useSelector(state => state.countryDetail.countryDetail)

    return (
        <div className='mainDetailTA'>
            {countryDetail.TouristActivities && countryDetail.TouristActivities.length > 0 ?
                <article>
                    {countryDetail.TouristActivities.map(ct =>(
                        <fieldset className='detailTAMain' >
                            <legend>Tourist Activities</legend>
                            <h2>Activity: {ct.name} </h2>
                            <h2>Dificulty: {ct.dificulty}</h2>
                            <h2>Duration: {ct.duration} minutes</h2>
                            <h2>Season: {ct.season}</h2>
                        </fieldset>
                    ))}
                </article>
            : 
            <fieldset className='detailTAMain' >
                <legend>Tourist Activities</legend>
                <h1>No hay actividades turisticas para este pais</h1>
                <Link to='/activities'>Crear Actividad</Link>                
            </fieldset>
            // : 
            // <fieldset className='detailTAMain' >
            //     <legend>Tourist Activities</legend>
            //     <h1>No hay actividades turisticas para este pais</h1>
            //     <Link to='/activities'>Crear Actividad</Link>                
            // </fieldset>
            } 
        </div>
    )
    }
