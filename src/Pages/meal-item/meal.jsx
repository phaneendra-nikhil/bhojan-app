import React from 'react'
import './meal.css'
import { Navigate, useNavigate } from 'react-router-dom';
const Meal = ({data}) => {
  console.log(data);
  const navigate=useNavigate();
  return (
    <>
    {
      (!data) ? "Not Found" : data.map(item=>{
        return(
          <div className='card'>
            <img className='card-img' src={item.strMealThumb} alt="" />
            <h3>{item.strMeal}</h3>
            <button className='view-btn' key={item.idMeal} onClick={()=>{navigate(`/${item.idMeal}`)}}><i class="uil uil-arrow-right"></i></button>
         </div>

        )
      })
    }
    
    </>
  )
}

export default Meal