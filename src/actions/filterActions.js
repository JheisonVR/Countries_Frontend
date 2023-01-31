export const FILTER_COUNTRIES = 'filter/countries';
export const CLEAN_FILTER = 'filter/clean';
export const SORT_COUNTRIESAZ = 'sortAZ/Countries';
export const SORT_COUNTRIESZA = 'sortZA/Countries';
export const SORT_CONTINENT = 'sortContinent/Countries';
export const FILTER_ACTIVITY = 'filterActivitie/Countries';
export const SORT_POPULATION_AZ = 'sortPopulationAZ/Countries';
export const SORT_POPULATION_ZA = 'sortPopulationZA/Countries'



export function sortCountriesAZ (value){
    return{
        type:SORT_COUNTRIESAZ,
        payload:value
    }
}

export function sortCountriesZA (value){
    return{
        type:SORT_COUNTRIESZA,
        payload:value
    }
}

export function cleanFilter(){
    return{
        type:CLEAN_FILTER,
        payload:[]
    }
}

export function continentFilter(value){
    return{
        type:SORT_CONTINENT,
        payload:value
    }
}

export function activitieFilter(value){
    return{
        type: FILTER_ACTIVITY,
        payload:value
    }
}

export function populationSortUpToDown(value){
    return{
        type: SORT_POPULATION_ZA,
        payload: value
    }
}

export function populationSortDownToUp(value){
    return{
        type: SORT_POPULATION_AZ,
        payload: value
    }
}

















// export function filterCountries(value){
//     return {
//         type:FILTER_COUNTRIES,
//         payload:value
//     }
// }

// export const fetchFilterCountries = (termino, estado) => (dispatch) =>{
//     if(termino){
//         const terminoFiltrado = estado.filter(element => element.name.toLowerCase().includes(termino.toLowerCase()))
//         dispatch(filterCountries(terminoFiltrado))
//     }else{
//         dispatch(cleanFilter())
//     }
// }

// export const sortStateAz = (estado, tipo)=> (dispatch)=>{
//     if(tipo === 'ascendente'){
//         const ordenAsc = estado.sort((a,b)=> a.name.localeCompare(b.name))
//         dispatch(sortCountriesAZ(ordenAsc))
//     }
// }

// export const sortStateAz = (estado)=> (dispatch)=>{
//         const ordenAsc = estado.sort((a,b)=> {
//             if (a.name < b.name) {
//                 return -1;
//             }
//             if (a.name > b.name) {
//                 return 1;
//             }
//             return 0;
//         })
//         dispatch(sortCountriesAZ(ordenAsc))
//     }

// // export const sortStateZA = (estado, tipo)=> (dispatch)=>{
// //     if(tipo === 'descendente'){
// //         const ordenDesc = estado.sort((a,b)=> b.name.localeCompare(a.name))
// //         dispatch(sortCountriesZA(ordenDesc))
// //     }
// // }

// export const sortStateZA = (estado)=> (dispatch)=>{
//     const ordenDsc = estado.sort((a,b)=> {
//         if (a.name < b.name) {
//             return 1;
//         }
//         if (a.name > b.name) {
//             return -1;
//         }
//         return 0;
//     })
//     dispatch(sortCountriesZA(ordenDsc))
// }