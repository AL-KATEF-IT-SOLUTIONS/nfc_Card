import React from 'react'
import {MdLibraryBooks} from 'react-icons/md'
import '../styles/about.css'

const About = () => {
  return (
    <div className='about bg-dark'>
        <div className='abt p-5 '>
        <h1 className='d-flex justify-content-center'>About Me</h1>
        <div className='para d-flex justify-content-center '>
            <p className='d-flex justify-content-center w-50'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos assumenda, ea dicta impedit 
            magni delectus alias repellat placeat ducimus. Cumque, error. Officia nisi eligendi obcaecati
             ab sapiente. Officia, placeat dolorem!
        </p>
    
        </div>
        <div className='exp d-flex justify-content-center align-items-center mt-5 '>
            <h1>12</h1>
            <p className='ms-3'>Years of <br/> Experience</p>
            <h1 className='ms-3'>125+</h1>
            <p className='ms-3'>Client<br/>Served</p>
        </div>
        <h2 className='text-center mt-5' >Service I offer</h2>
        <div className='d-flex justify-content-center align-items-center mt-5'>
            <div  className='box text-center'>
            <MdLibraryBooks className='icon mt-5'/>
            <h4 className='mt-2'>heading</h4>
            <p className=' ms-auto mt-2'>Lorem ipsum dolor sit amet <br/> consectetur adipisicing elit.<br/> Quo iure cum quisquam!</p>
            </div>
            <div  className='box text-center'>
            <MdLibraryBooks className='icon mt-5'/>
            <h4 className='mt-2'>heading</h4>
            <p className=' ms-auto mt-2'>Lorem ipsum dolor sit amet <br/> consectetur adipisicing elit.<br/> Quo iure cum quisquam!</p>
            </div>
            <div  className='box text-center'>
            <MdLibraryBooks className='icon mt-5'/>
            <h4 className='mt-2'>heading</h4>
            <p className=' ms-auto mt-2'>Lorem ipsum dolor sit amet <br/> consectetur adipisicing elit.<br/> Quo iure cum quisquam!</p>
            </div>
           
        </div>

        </div>


    </div>
  )
}

export default About