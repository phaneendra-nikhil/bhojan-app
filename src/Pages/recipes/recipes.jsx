import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
var id="";
import {useNavigate } from 'react-router-dom';
import './recipes.css'

const Recipes = () => {
  const navigate=useNavigate();
  const [item,setItem] = useState();
  const {MealId} = useParams();
  
  if(MealId!=""){
    fetch(`https:/www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`)
    .then(res=>res.json())
    .then(data=>{
      setItem(data.meals[0]);
    })
  }
  if(item){
    const url = item.strYoutube;
    const str = url.split("=");
    id=str[str.length-1];
  }
  return (
    <>
       {
        (!item)?"":(<>
        
      <button className='back-btn' title='Home' onClick={()=>{navigate('/')}}><i class="uil uil-arrow-left"></i></button>
      
      <div className="recipe-container">

        <div className="recipe-content">
            <div className="inner-content">
              <img className='recipe-img' src={item.strMealThumb} alt="" />
              <h1>{item.strMeal}</h1>
              <h2>{item.strArea}</h2>
              <p>{item.strCategory}</p>
            </div>
            <div className="recipe-data">
              <h2>Ingredients</h2>
              <h4>{item.strIngredient1}: {item.strMeasure1}</h4>
              <h4>{item.strIngredient2}: {item.strMeasure2}</h4>
              <h4>{item.strIngredient3}: {item.strMeasure3}</h4>
              <h4>{item.strIngredient4}: {item.strMeasure4}</h4>
              <h4>{item.strIngredient5}: {item.strMeasure5}</h4>
              <h4>{item.strIngredient6}: {item.strMeasure6}</h4>
              <h4>{item.strIngredient7}: {item.strMeasure7}</h4>
              <h4>{item.strIngredient8}: {item.strMeasure8}</h4>
            </div>
         </div>

            <div className="instructions">
              <h2>Instructions</h2>
              <p>{item.strInstructions}</p>

               <div className="yt-video">
                   <iframe src={`https://www.youtube.com/embed/${id}`} alt=" "></iframe>
               </div>
            </div>
           
      </div>
          </>)
       }
    </>
  )
}

export default Recipes