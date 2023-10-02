import React from 'react'

const Contact = () => {
  return (
    <div className="contact-section">
      <h1>contact</h1>

      <div className="contact-card">

        <div className="card-1">
          <h3>Let me know...</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque saepe quia ea non maxime aliquid corrupti illo suscipit dignissimos error? Cupiditate tenetur sed provident inventore dignissimos doloremque? Molestias aut qui ea pariatur vel autem dicta modi est. Atque, similique eius?</p>
          <button>Read More</button>
        </div>

        <div className="card-2">
          <form action="">
            <input type="email" placeholder='enter mail' required/>
            <textarea rows="3" placeholder='message'required />
            <button type='submit'>submit</button>
          </form>
        </div>
        
      </div>

    </div>
  )
}

export default Contact