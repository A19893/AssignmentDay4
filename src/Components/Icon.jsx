import React from 'react';
import NightlightIcon from '@mui/icons-material/Nightlight';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
const Icon = (props) => {
  return (
    <>
        {(()=>{
            if(props.Hours>=0 && props.Hours<=5){
                return(
               <NightlightIcon fontSize='large'/>
                )
            }
            else if(props.Hours>5 && props.Hours<=17){
                return(
              <WbSunnyIcon fontSize='large'/>
                )
            }
            else{
                return(
                    <NightlightIcon fontSize='large'/>
                     )
            }
        })()}
    </>
  );
}

export default Icon;
