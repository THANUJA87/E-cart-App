import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div style={{height:'250px', marginTop:'100px'}} className='mt-5 w-full bg-violet-600 text-white'>
        <div className='flex justify-between p-5'>
            <div className='intro' style={{width:'400px'}}>
                <h5 className='text-xl font-bold'><i class="fa-solid fa-truck-fast me-2"></i> E Cart</h5>
                <p>Designed and Buid with all the love in the world by the luminar team with the help pf our contributions </p>
                <p>code licensed luminar by </p>
                <p>currently v5.3.2</p>
            </div>
            <div className='flex flex-col '>
                <h5 className='text-xl font-bold ' >Links </h5>
                <Link to={'/'} style={{textDecoration:'none', color:'white'}}>Home Page </Link>
                <Link to={'/wishlist'} style={{textDecoration:'none', color:'white'}}>Wishlist </Link>
                <Link to={'/cart'} style={{textDecoration:'none', color:'white'}}>Cart</Link>
            </div>
            <div className='flex flex-col '>
                <h5 className='text-xl font-bold ' >Guides</h5>
                <a href="https://www.npmjs.com/package/react-router-dom" style={{textDecoration:'none',color:'white'}} target='_blank'>React</a>
                <a href="https://www.tailwind.com/" style={{textDecoration:'none',color:'white'}} target='_blank'>Tailwind</a>
                <a href="https://redux.js.org/" style={{textDecoration:'none',color:'white'}} target='_blank'>Redux</a>
                <a href="https://vite.dev/" style={{textDecoration:'none',color:'white'}} target='_blank'>Vite</a>
            </div>
            <div className='flex flex-col'>
                <h5 className='text-xl font-bold'>contact Us </h5>
                <div className='flex '>
                    <input type="text" placeholder='enter your email' className='rounded p-1' />
                    <button className='btn btn-info ms-2'><i class="fa-solid fa-arrow-right"></i></button>
                </div>
                <div className='flex flex-row justify-between mt-3 '>
                    <a href="https://x.com/" style={{textDecoration:'none', color:'white'}} target='_blank'><i class="fa-brands fa-twitter"></i></a>
                    <a href="https://www.facebook.com/" style={{textDecoration:'none', color:'white'}} target='_blank'><i class="fa-brands fa-facebook"></i></a>
                    <a href="https://www.youtube.com/"  style={{textDecoration:'none', color:'white'}} target='_blank'><i class="fa-brands fa-youtube"></i></a>
                    <a href="https://www.instagram.com/"  style={{textDecoration:'none', color:'white'}} target='_blank'><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://play.google.com/store/apps/details?id=com.google.android.contacts&hl=en_IN"  style={{textDecoration:'none', color:'white'}} target='_blank'><i class="fa-solid fa-phone"></i></a>

                </div>
        

            </div>

        </div>
    </div>
  )
}

export default Footer