import React from 'react'
import {CgDanger} from 'react-icons/cg'

export default function EmptySearch() {
    return (
        <div>
            <h1><CgDanger/> No Results <CgDanger/> </h1>  
            <h1><CgDanger/> Check the Search <CgDanger/>  </h1>
        </div>
    )
}
