import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchProduct } from '../redux/slices/productSlices'

const Header = ({insideHome}) => {
  const dispatch = useDispatch()
  const userCart = useSelector(state => state.cartReducer)
  const userWishlist = useSelector(state=>state.wishlistReducer)
  return (
    <nav className='flex bg-violet-600 w-full p-5 text-white'>
        <Link className='text-2xl font-bold' to={'/'}><i class="fa-solid fa-truck-fast me-2"></i>E Cart </Link>
        <ul className='flex-1 text-right'>
            
        { insideHome &&
            <li className='list-none inline-block px-5 text-black'> <input onChange={(e)=> dispatch(searchProduct(e.target.value.toLocaleLowerCase()))} style={{width:'300px'}} className='rounded p-2' type="text" placeholder='search product..'></input></li>

        }
            

            <li className='list-none inline-block px-5'> <Link to={'/wishlist'}><i class="fa-solid fa-heart text-red-600"></i>Wishlist <span className='bg-black text-white rounded p-1'>{userWishlist?.length}</span></Link></li>

            <li className='list-none inline-block px-5'> <Link to={'/cart'}><i class="fa-solid fa-cart-plus text-green-600 "></i>Cart<span className='bg-black text-white rounded p-1'>{userCart?.length}</span></Link></li>

        </ul>
    </nav>
  )
}

export default Header