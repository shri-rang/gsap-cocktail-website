import React from 'react'
import {allCocktailLists} from '../../constants/index.js'
import { useState } from 'react';

const Menu = () => {
  
  const [currentIndex, setCurrentIndex ] = useState(0);

   const  totalCocktails = allCocktailLists.length;

  const  goToSlide = (index) =>{
        const newIndex =  (index + totalCocktails ) % totalCocktails;
        setCurrentIndex(newIndex);
  }

  return (
     <section  id='menu' aria-labelledby='menu-heading'  >
       <img src="/images/slider-left-leaf.png" alt="left-leaf" id="m-left-leaf" />
        <img src="/images/slider-right-leaf.png" alt="right-leaf" id="m-right-leaf"/>
           <h2 id= "menu-heading"  className='sr-only' > Cocktail Menu </h2>
           <nav className='cocktail-tabs' >
             {allCocktailLists.map( (cocktail, index )=>{

                const isActive = index === currentIndex;
                    
                  return (
                     <button key = {cocktail.id} className= {` ${isActive ? 'text-white border-white' : 'text-white/50 border-white/50'   } `}  
                      onClick= { ()=> goToSlide(index) } >
                     {cocktail.name}
                     </button>
                  )   
             }  ) }  
           </nav>
           <div className='content'>
               <div className='arrows' >
                  <button className='text-left'  onClick={ ()=> goToSlide(currentIndex -1 ) }  >

                  </button>
               </div>
           </div>
     </section>
  )
}

export default Menu