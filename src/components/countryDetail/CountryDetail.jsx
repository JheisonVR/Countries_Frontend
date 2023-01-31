import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux';
import Loader from '../Loader/Loader'
import { setIsLoading } from '../../actions/appActions';
import { fetchCuntryDetail } from '../../actions/countrieDetail';
import DetailTouristActivities from './DetailTouristActivities';
import './Styles/DetailCountry.css'
import Footer from '../Footer/Footer'
import {GiCapitol, GiMountains} from 'react-icons/gi'
import {BiWorld} from 'react-icons/bi'
import {RxRulerSquare} from 'react-icons/rx'
import {IoIosPeople} from 'react-icons/io'



export default function CountryDetail() {
    let params = useParams();
    const dispatch = useDispatch()
    const countryDetail = useSelector(state => state.countryDetail.countryDetail)

    useEffect(()=>{
      const getDetail = async ()=>{
        dispatch(setIsLoading(true))
        await dispatch(fetchCuntryDetail(params.id))
        dispatch(setIsLoading(false))
      }
      getDetail()
      //eslint-disable-next-line 
    },[])

    // const handleClic = () =>{
    //   console.log(params)
    // }

  return (
    <div >
      {countryDetail ? 
        <section className='detailMainContainer'>

          <article className='detailImage'>
            <img className='flag' src={countryDetail.flags} alt="flag_Country" />          
          </article>

          <article className='detailShield'>
            {countryDetail.coatOfArms && <img className='shield' src={countryDetail.coatOfArms} alt='coatOfArms'/> }
          </article>


          <article className='detailTitle'>
            <h1>{countryDetail.name}</h1>
          </article>

          <fieldset className='stadisticsMain' >
            <legend>Stadistics</legend>
            <article className='detailLocation'>
                <h2><GiCapitol/> Capital: {countryDetail.capital} </h2>  
                <h2><BiWorld/>  Continent: {countryDetail.region}</h2>
                <h2> <GiMountains/>  Subregion: {countryDetail.subregion}</h2>              
            </article>
            <article className='detailExtension'>
              <h2> <RxRulerSquare/> Area: {countryDetail.area && countryDetail.area.toLocaleString('en-US')} Km²</h2>
              <h2> <IoIosPeople/> Poblation: {countryDetail.population && countryDetail.population.toLocaleString('en-US')} personas</h2>
              {/* <button onClick={handleClic}>Clic</button> */}
            </article>
          </fieldset>
          
          <article className='detailActivitiesMainContainer' >
            <DetailTouristActivities />
          </article>
        </section>
      : <Loader/> 
      }
      <Footer/>
    </div>
  )
}