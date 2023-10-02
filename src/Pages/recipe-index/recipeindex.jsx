import React from 'react'

const Recipeindex = () => {
    var number = 0;
  return (
    <div>
        {
            alpha.map(item=>{
                return(
                    <div className="numBox" key={number++ }>
                    <h3>{item}</h3>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Recipeindex