import React from 'react'
import {MdLibraryBooks} from 'react-icons/md'
import '../styles/about.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  return (
    <div className='about bg-dark'>
        <div className='abt p-5 '>
        <h1 className='d-flex justify-content-center'>About Al Katef IT Solutions</h1>
        <div className='para d-flex justify-content-center '>
            <p className='d-flex justify-content-center'>
At Al Katef IT Solutions, we have a long history of providing innovative solutions that help businesses succeed in today’s digital world.
 Our story began in 2000, when we started our first business in Abu Dhabi, UAE. Since then, we have expanded our reach and expertise, and
  we are proud to be a leading provider of digital solutions in both India and the UAE.
        </p>
    
        </div>
        <div className='exp d-flex justify-content-center align-items-center mt-5 '>
            <h1>16</h1>
            <p >Years of <br/> Experience</p>
            <h1 className='ms-2' >125+</h1>
            <p >Client<br/>Served</p>
        </div>
        <h2 className='text-center mt-5' >Service We Offer</h2>

        <div className='boxes mt-5'>
            <div  className='box1 text-center mt-3'>
            <MdLibraryBooks className='icon mt-5'/>
            <h4 className='mt-2'>Digital Marketing</h4>
            <p className=' ms-auto mt-2'>Digital marketing:<br/> vital for brand, traffic, sales via <br/>online channels & platforms.</p>
            </div>
            <div  className='box2 text-center mt-3'>
            <MdLibraryBooks className='icon mt-5'/>
            <h4 className='mt-2'>Web Development</h4>
            <p className=' ms-auto mt-2'> Designs and develops visually appealing,<br/> user-friendly, responsive websites. SEO<br/> optimization for visibility and traffic.</p>
            </div>
            <div  className='box3 text-center mt-3'>
            <MdLibraryBooks className='icon mt-5'/>
            <h4 className='mt-2'>Social Media</h4>
            <p className=' ms-auto mt-2'>Promotes business via <br/> popular social media platforms, <br/>expands reach, engages audience.</p>
            </div>
        </div>

        </div>


    </div>
  )
}

export default About