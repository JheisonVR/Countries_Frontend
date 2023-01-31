import React, { useEffect } from 'react'
import Loader from '../Loader/Loader'
import { setIsLoading } from '../../actions/appActions'
import { useDispatch, useSelector } from 'react-redux'
import { getCountriesList } from '../../actions/countriesActions'
import Cards from './Cards'
import './Styles/Home.css'
import Footer from '../Footer/Footer'

export default function Home() {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.app.isLoading)

    useEffect( () => {
        const listCountries = async ()=>{
            dispatch(setIsLoading(true))
            await dispatch(getCountriesList());
            dispatch(setIsLoading(false))
        }
        listCountries();
    },[dispatch])

    return (
        <div>
            {loading? <Loader/> :
            <section className='homeMainContainer' >
                <section>
                    <Cards/>
                </section>
                <section>
                    <Footer/>
                </section>
            </section>
            }      
        </div>
    )
}
