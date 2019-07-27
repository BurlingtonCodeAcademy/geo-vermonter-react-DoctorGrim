import React from 'react'

const CountySelector=({guessCounty, isGamePlaying})=>{

    return <div hidden={!isGamePlaying}>
        <ul>
          <li><button onClick={()=>guessCounty('ADDISON')}>Addison</button></li>
          <li><button onClick={()=>guessCounty('BENNINGTON')}>Bennington</button></li>
          <li><button onClick={()=>guessCounty('CALEDONIA')}>Caledonia</button></li>
          <li><button onClick={()=>guessCounty('CHITTENDEN')}>Chittenden</button></li>
          <li><button onClick={()=>guessCounty('ESSEX')}>Essex</button></li>
          <li><button onClick={()=>guessCounty('FRANKLIN')}>Franklin</button></li>
          <li><button onClick={()=>guessCounty('GRAND ISLE')}>Grand Isle</button></li>
          <li><button onClick={()=>guessCounty('LAMOILLE')}>Lamoille</button></li>
          <li><button onClick={()=>guessCounty('ORANGE')}>Orange</button></li>
          <li><button onClick={()=>guessCounty('ORLEANS')}>Orleans</button></li>
          <li><button onClick={()=>guessCounty('RUTLAND')}>Rutland</button></li>
          <li><button onClick={()=>guessCounty('WASHINGTON')}>Washington</button></li>
          <li><button onClick={()=>guessCounty('WINDHAM')}>Windham</button></li>
          <li><button onClick={()=>guessCounty('WINDSOR')}>Windsor</button></li>
        </ul>
    </div>

}


export default CountySelector;