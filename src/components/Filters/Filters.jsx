import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { sortStateAz, sortStateZA } from '../../actions/filterActions'
import { cleanFilter, fetchFilterCountries } from '../../actions/filterActions'


export default function Filters() {
    const dispatch = useDispatch();
    const listCountries = useSelector(state => state.countries.countries);
    //const countryFilter = useSelector(state => state.countries.filteredCountries);

    const [search, setSearch] = useState({
        country:''
    })

    function handleSortAz(e){
        const {name} = e.target;
        console.log(name)
        dispatch(sortStateAz(listCountries))
    }

    function handleSortZa(e){
        const {name} = e.target;
        console.log(name)
        dispatch(sortStateZA(listCountries))
    }

    const continents = Array.from(new Set(listCountries.map(c=> c.region))) 

    
    function handleChangeSearch(e){
    const {value, name} = e.target;
    setSearch (prev => ({
        ...prev,
        [name]: value
    }))
    search.country.length>0 ?  
    dispatch(fetchFilterCountries(search.country,listCountries))
    :
    console.log('Estado Vacio')
    }

    function handleSubmit(e){    
    e.preventDefault()
    //console.log(search.country)
    setSearch({
        country:''
    })
    }

    function cleanSearchFilter(){
        dispatch(cleanFilter())
    }

    return (
        <section>
            {/* Este es el form que permite la busqueda  */}
            <form onSubmit={handleSubmit}>
                <input name='country' value={search.country} type="text" placeholder='Country Name...' onChange={handleChangeSearch}/>
                <input type="submit" value='Search'/>
                <button onClick={cleanSearchFilter} >Clean</button>
            </form>

            {/* Filtros por continente  */}
            <article>
                {continents.map(c=> (
                    <button key={c} >{c}</button>
                ))}
            </article>

            {/* Filtros por Actividad Turistica  */}
            <article>          
                <h1>Este es el espacio para las TA</h1>
            </article>

            {/* Orden de los paises alfabeticamente descendente y ascendente */}
            <article>
                <h1>Orden</h1>
                <button name='ascendente' onClick={handleSortAz}>A-Z</button>
                <button name='descendente' onClick={handleSortZa}>Z-A</button>
            </article>
        </section>
    )
}
