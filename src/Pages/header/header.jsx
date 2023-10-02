import React, { useEffect, useState } from 'react'
import Meal from '../meal-item/meal'

import Recipeindex from '../recipe-index/recipeindex'

const Header = () => {
  const[url,setUrl] = useState("https:/www.themealdb.com/api/json/v1/1/search.php?f=a");
  const[item,setItem] = useState();
  const[show,setShow] = useState(false);
  const[search,setSearch]=useState("");
 
  useEffect(()=>{
    fetch(url).then(res=>res.json()).then(data=>{
      
      setItem(data.meals);
      setShow(true);

    })
  },[url])

  const searchRecipe=(evt)=>{
    if(evt.key=="Enter"){
      setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
    }
  }
  
  return (
    
    <header>
        <div className="header-title">
          <h2>Savoring every bite like it's the first and the last.</h2>
          <small id='caption-1'>Let's the feast begin...</small>
          
          <div className="paragraph">
          <p>"A recipe has no soul. You, as the cook, must bring soul to the recipe."</p>
          <small id='caption-2'>-Thomas Keller</small>
          </div>
        </div>
        <div className="search-bar">
          <input type="search" placeholder='search recipes' onChange={e=> setSearch(e.target.value)} onKeyPress={searchRecipe} required/>
          
        </div>
        <div className="container">
          {
          show ?<Meal data={item} /> :"Not Found"      
          }

        </div>

        
    </header>
  )
}

export default Header