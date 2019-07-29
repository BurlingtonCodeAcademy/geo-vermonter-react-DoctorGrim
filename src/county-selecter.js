import React from 'react'

const CountySelector=({guessCounty, isGamePlaying})=>{

    return <div hidden={!isGamePlaying}>
          <button onClick={()=>guessCounty('ADDISON')}>Addison</button>
          <button onClick={()=>guessCounty('BENNINGTON')}>Bennington</button>
          <button onClick={()=>guessCounty('CALEDONIA')}>Caledonia</button>
          <button onClick={()=>guessCounty('CHITTENDEN')}>Chittenden</button>
          <button onClick={()=>guessCounty('ESSEX')}>Essex</button>
          <button onClick={()=>guessCounty('FRANKLIN')}>Franklin</button>
          <button onClick={()=>guessCounty('GRAND ISLE')}>Grand Isle</button>
          <button onClick={()=>guessCounty('LAMOILLE')}>Lamoille</button>
          <button onClick={()=>guessCounty('ORANGE')}>Orange</button>
          <button onClick={()=>guessCounty('ORLEANS')}>Orleans</button>
          <button onClick={()=>guessCounty('RUTLAND')}>Rutland</button>
          <button onClick={()=>guessCounty('WASHINGTON')}>Washington</button>
          <button onClick={()=>guessCounty('WINDHAM')}>Windham</button>
          <button onClick={()=>guessCounty('WINDSOR')}>Windsor</button>
        
    </div>

}


export default CountySelector;