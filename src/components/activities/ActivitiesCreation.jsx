import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux';
import { postFormActivities } from '../../actions/activitiesActions';
import { setIsLoading } from '../../actions/appActions';
import { getCountriesList } from '../../actions/countriesActions';
import Footer from '../Footer/Footer';
import Loader from '../Loader/Loader';
import './Styles/formCreation.css'

export default function ActivitiesCreation() {
    const dispatch = useDispatch()
    const countriesList = useSelector(state => state.countries.countries);
    const loading = useSelector(state => state.app.isLoading);
    const continents = Array.from(new Set(countriesList.map(c=> c.region))).sort();
    //const subregionContinent = Array.from(new Set(countriesList.map(c=> c.subregion))).sort();

    
    useEffect( () => {
        const listCountries = async ()=>{
            dispatch(setIsLoading(true))
            await dispatch(getCountriesList());
            dispatch(setIsLoading(false))
        }
        listCountries();
    },[dispatch])
    
    const [input, setInput] = useState({
        name:'',
        season:'',
        duration:'',
        dificulty:'',
        countries:[],
        description:''

    });
    const [multiSelectListOne, setmultiSelectListOne] = useState({
        continent:''
    })

    const [multiSelectListTwo, setMultiSelectListTwo] = useState({
        subRegion:''
    })

    const [error, setError] = useState('')
    const keysError = Object.keys(error)
    const valueError = Object.values(error)

    

    function multiListOnchangeOne(e){
        const {value,name} = e.target
        const data = {...multiSelectListOne, [name]:value }
        setmultiSelectListOne(data)
        setMultiSelectListTwo('')
    }

    function multiListOnchangeTwo(e){
        const {value,name} = e.target
        const data = {...multiSelectListTwo, [name]:value }
        setMultiSelectListTwo(data)
    }

    const subRegionContinentListF = Array.from(new Set(countriesList.filter(s=> s.region === multiSelectListOne.continent)
    .map(c => c.subregion).sort()))


    function validatePrueba(input){
        let errors = {};
        if(!input.name){
            errors.name = 'Campo requerido no puede estar vacio'
        }else if(!/^[a-zA-Z\s]*$/.test(input.name)){
            errors.name = 'Solo puede ingresar letras, no debe ingresar numeros ni caracteres especiales'
        }
        if(!input.duration){
            errors.duration = 'Debe ingresar los minutos que toma la actividad'
        }else if(input.duration > 360){
            errors.duration = 'La actividad no puede durar mas de 340 minutos'
        }else if(!/^[0-9]*$/.test(input.duration)){
            errors.duration = 'Solo puede ingresar numeros'
        }
        if(!input.dificulty){
            errors.dificulty = 'Debe seleccionar la dificultad de la actividad'
        }
        return errors
    }

    const  handleInputChange = (e)=> {
        const {name, value, type, checked} = e.target;
        const data = {...input, [name]: type === 'checkbox' ? checked : value }
        setInput(data)
        setError(validatePrueba(data))
    }

    const handleChangeSelectMultiple = (e)=> {
        let options = e.target.options;
        let selectedOptions = [];
        for (let i=0; i<options.length; i++){
            if(options[i].selected){
                selectedOptions.push(options[i].value);
            }
        }
        setInput(prev => ({
            ...prev,
            countries: selectedOptions
        }))
    }


    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(input)
        setInput({
            name:'',
            id:'',
            season:'',
            duration:'',
            description:'',
            dificulty:'',     
        })
        dispatch(postFormActivities(input))
        alert('Activity created successfully')
    }

return (
    <div>
        <h1>Tourist Activity</h1>
        <form className='formulario' action="" onSubmit= {handleSubmit}>

            <fieldset>
                <legend>General</legend>
                <label className='labelInput' htmlFor="name">Enter the name of the tourist activity</label>
                <input type="text" key='name' name= 'name' value={input.name} required id='name' onChange={handleInputChange} placeholder='Activity...' />
                {!error.name ? null : <span className='danger' >{error.name}</span>}

                <label className='labelInput' htmlFor="description">Briefly describe the tourist activity</label>
                <textarea name='description' key='description' value={input.description} id='description' cols='80' rows='5' onChange={handleInputChange} ></textarea>  
            </fieldset>

            <fieldset>
                <legend>Details</legend>
                <label className='labelInput' htmlFor='season'>Select the best season to carry out the tourist activity</label>
                <select id='season' name="season" key='season' value={input.season} onChange={handleInputChange} >
                    <option disabled      value=''      >Season</option>
                    <option name='Summer' value='Summer'>Summer</option>
                    <option name='Winter' value='Winter'>Winter</option>
                    <option name='Spring' value='Spring'>Spring</option>
                    <option name='Autumn' value='Autumn'>Autumn</option>
                </select>

                <label className='labelInput' htmlFor="dificulty">Select the difficulty level</label>
                <select name='dificulty' id='dificulty' key='dificulty' value={input.dificulty} onChange={handleInputChange} >                    
                    <option value='' disabled >Level</option>
                    <option value="1">Very Low</option>
                    <option value="2">Low</option>
                    <option value="3">Middle</option>
                    <option value="4">High</option>
                    <option value="5">Very High</option>
                </select>
                {!error.dificulty ? null : <span className='danger' >{error.dificulty}</span>}
    
                <label className='labelInput' htmlFor="duration">Enter the duration of the tourist activity in minutes</label>
                <input type="text" value={input.duration} name='duration' id='duration' placeholder='Minutes...' onChange={handleInputChange} />
                {!error.duration ? null : <span className='danger'>{error.duration}</span>}
            </fieldset>

            <fieldset>
                <legend>Countries</legend>

                <label className='labelInput' htmlFor="continentInput">select a continent</label>
                <select name="continent" id='continentInput' key='continent' value={multiSelectListOne.continent} onChange={multiListOnchangeOne}>
                <option value='' disabled >Continent</option>
                    {continents.map((c,i) => (
                        <option key={i} value={c}>{c}</option>
                    ))}
                </select>

                <label className='labelInput' htmlFor="subRegionInput">select a region</label>
                {subRegionContinentListF ? 

                <select name="subRegion" id='subRegionInput' key='subRegion' value={multiSelectListTwo.subRegion} onChange={multiListOnchangeTwo}>
                    <option value='' >Region</option>
                    {subRegionContinentListF.map((s,i) => (
                        <option key={i} value={s}>{s}</option>
                    ))}
                </select>                 
                :
                'Select a Continent'
                }

                <label className='labelInput' htmlFor="countries">Select the countries in which the tourist activity can be carried out</label>
                {!loading ? 
                <select key='countries' name="countries" id="countries" onChange={handleChangeSelectMultiple} multiple size="5">
                    {countriesList.filter(c=> multiSelectListTwo.subRegion  ? 
                                            c.region === multiSelectListOne.continent && c.subregion === multiSelectListTwo.subRegion
                                            :c.region === multiSelectListOne.continent).map(c=> (
                        <option key={c.id} name={c.name} value={c.id}>{c.name}</option>
                        ))}
                </select>
                : <Loader/>}
            </fieldset>

            <fieldset>
                { !valueError.length >0 ? <input type="submit" value='Crear Actividad' /> : 
                <h2>Please review the following fields {keysError.map((e,i) => (
                    <li key={i} >{e.toUpperCase()}</li>
                ))}</h2>
                }
            </fieldset>

        </form>
        <Footer/>
        {/* <div>
            <input type='checkbox' name='hard' id='inputDificultyHard' checked={input.hard} onChange={handleInputChange}  />
            <label htmlFor="inputDificultyHard">hard</label>
        </div> */}
    </div>    
    )
}
