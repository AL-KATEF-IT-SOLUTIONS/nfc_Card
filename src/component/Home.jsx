import React from 'react';
import '../styles/home.css';
import img from "./images/web 2.png"

const Home = () => {
  return (
    <div className='container cap d-flex'>

        <div className='caption'>
            <h1>Hi <span className='coma'>,</span></h1>
            <h1 >I am <span className='name'>James Ross</span> </h1>

            <div className='content mt-3'>
          <p>Product and Visual interface designer in Google.Specialize in <br/>
          ui ux and product development & responsive web  design</p>
        </div>

        <div className='button mt-5'>
          <button className='btn'>Save to Contact</button>
        </div>

        </div>
        
    


        <div className='img'>
          <img src={img} alt="" />

        </div>

    </div>
  )
}

export default Home