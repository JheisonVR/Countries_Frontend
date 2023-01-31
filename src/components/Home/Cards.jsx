import React, { useState, useEffect } from 'react'
import Card from './Card'
import { useDispatch, useSelector } from 'react-redux'
import './Styles/Cards.css'
import EmptySearch from './EmptySearch'
import { getCountriesList } from '../../actions/countriesActions'
import { sortCountriesAZ, sortCountriesZA, cleanFilter, continentFilter, activitieFilter,
  populationSortUpToDown, populationSortDownToUp  } from '../../actions/filterActions'
import { getAllActivities } from '../../actions/activitiesActions'
import {MdManageSearch, MdNavigateNext, MdNavigateBefore, MdCleaningServices} from 'react-icons/md'
import {BiWorld} from 'react-icons/bi'
import {BsFillEmojiSunglassesFill} from 'react-icons/bs'
import {GoListOrdered} from 'react-icons/go'

export default function Cards() {
  const dispatch = useDispatch();
  const touristActivities = useSelector(state => state.activities.touristActivities)
  const countriesSort = useSelector(state => state.countries.sortCountries);
  const listCountries = useSelector(state => state.countries.countries);
  const longitud = listCountries.length;
  const continents = Array.from(new Set(listCountries.map(c=> c.region)));


  useEffect( () => {
    dispatch(getAllActivities())
//eslint-disable-next-line         
},[countriesSort])
  
  const [search, setSearch] = useState('');
  const [currentpage, setCurrentPage] = useState(0)
  

  let resultsFilter = [];
  !search ? resultsFilter = listCountries.slice(currentpage,currentpage+9)
  : resultsFilter = listCountries.filter(country => 
    country.name.toLowerCase().includes(search.toLowerCase()))


function handleNextPage(){
  currentpage < longitud-9 &&
  setCurrentPage(currentpage+9)
  console.log('El estado es:', currentpage)
  console.log('El Total es:', longitud)
  
}

function handlePrevPage(){
  currentpage > 8 &&
  setCurrentPage(currentpage-9)
  console.log(currentpage)
}


  function handleChangeInputPrueba(e){
    //console.log(searched)
    setSearch(e.target.value)
  }

  function cleanInput(){
    setSearch('');
    setCurrentPage(0);
    dispatch(getCountriesList())
  }

  async function sortAZ(){
    const a_z = listCountries.sort((a,b)=> {
      if (a.name < b.name) {
          return -1;
      }
      if (a.name > b.name) {
          return 1;
      }
      return 0;
    })
    await dispatch(sortCountriesAZ(a_z))
    setCurrentPage(0)
    await dispatch(cleanFilter())
  }

  async function sortZA(){
    const z_a = listCountries.sort((a,b)=> {
      if (a.name < b.name) {
          return 1;
      }
      if (a.name > b.name) {
          return -1;
      }
      return 0;
    })
    await dispatch(sortCountriesZA(z_a))
    setCurrentPage(0)
    await dispatch(cleanFilter())
  }

  function filterContinent(cont){
    const countriesCont = listCountries.filter(c => c.region === cont)
    dispatch(continentFilter(countriesCont));
    dispatch(cleanFilter());
    setCurrentPage(0)
  }

  function filterTActivities(activity){
    const resultsFilter = touristActivities.filter(t => t.name === activity)
    const countries =  resultsFilter[0].Countries
    dispatch(activitieFilter(countries))
  }

  function sortPopulationUpToDown(){
    const upToDown = listCountries.sort((a,b)=> {
      if (a.population < b.population) {
        return 1;
    }
      if (a.population > b.population) {
        return -1;
    }
    return 0;
    })
    dispatch(populationSortUpToDown(upToDown))
    setCurrentPage(0)
    dispatch(cleanFilter())
  }

  function sortPopulationDownToUp(){
    const downToUp = listCountries.sort((a,b)=> {
      if (a.population < b.population) {
        return -1;
      }
      if (a.population > b.population) {
        return 1;
      }
      return 0;
    })
    dispatch(populationSortDownToUp(downToUp))
    setCurrentPage(0)
    dispatch(cleanFilter())
  }


  return (
    <div className='CardsMainContainer'>
      <section className='filters'>
        <article className='FilterContainSearch'>
          <label htmlFor="test"><MdManageSearch/> Country Search</label>
          <input value={search} type="text" id='test' placeholder='Country Name...' onChange={handleChangeInputPrueba} />
        </article>

        <article className='filterContinentMain'>
          <h1 className='filterContinentTitle'><BiWorld/> Continents</h1>
          {
            continents.map((con, index) =>(
              <button key={index} onClick={()=> filterContinent(con)}>{con}</button>
            ))
          }
        </article>

        <article className='filterContinentMain' >
        <h1 className='filterContinentTitle'><BsFillEmojiSunglassesFill/> Tourist Activities</h1>
          {/* <p className='textFilterTA'>Tourist Activities</p> */}
          {touristActivities.length>0 ? 
            <article className='filterContinentMain'>
              {touristActivities.map((t) => (
                <button onClick={()=> filterTActivities(t.name)} key={t.id}>{t.name}</button>))}
            </article>
          :
          <p className='textFilterTA'>No hay actividades creadas</p>
          }
        </article>

        <article className='filterContinentMain'>
          <h1 className='filterContinentTitle'><GoListOrdered/> Order</h1>
          <h1 className='filterContinentTitle'>Alphabetical</h1>
          <button onClick={sortAZ} >A-Z</button>
          <button onClick={sortZA} >Z-A</button>
          <h1 className='filterContinentTitle'>Amount of Population</h1>
          <button onClick={sortPopulationDownToUp}>Down to Up</button>
          <button onClick={sortPopulationUpToDown}>Up to Down</button>
        </article>

        <article className='filterContinentMain'>
          <h1 className='filterContinentTitle'>Clean Filters</h1>
          <button onClick={cleanInput}><MdCleaningServices/> Clean</button>
        </article>
      </section>

{/*       ------------------------------------------          */}

        { resultsFilter.length ? 
        
          <article className='matrizCards'>
            <article className='filterPagesMain'>
              <h1 className='filterPagesTitle'><GoListOrdered/>Pages</h1>
              <button className='filterPageNext' onClick={handlePrevPage} ><MdNavigateBefore/> Prev</button>
              <button className='filterPagePrev' onClick={handleNextPage} >Next <MdNavigateNext/></button>
            </article>
            {resultsFilter.map(p=> (
                <Card
                    key={p.id}
                    name={p.name}
                    capital= {p.capital}
                    region= {p.region}
                    flags= {p.flags}
                    id={p.id}
                    population={p.population}
                    coatOfArms={p.coatOfArms}              
                />                
            ))}
          <article className='filterPagesMain'>
            <h1 className='filterPagesTitle'><GoListOrdered/>Pages</h1>
            <button className='filterPageNext' onClick={handlePrevPage} ><MdNavigateBefore/> Prev</button>
            <button className='filterPagePrev' onClick={handleNextPage} >Next <MdNavigateNext/></button>
          </article>
          </article>  
          :
          <article>
            <EmptySearch/>
          </article>
        }

    </div>
  )
}
