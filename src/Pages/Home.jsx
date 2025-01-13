import React, { useState } from 'react'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchProducts } from '../redux/slices/productSlices'
Link

const Home = () => {
    const dispatch = useDispatch()

    const {allProducts,loading,errorMsg} = useSelector(state =>state. productReducer)
    console.log(allProducts,loading,errorMsg);

    const [currentPage,setCurrentPage] = useState(1)
    const productPerPage = 8;
    const totalPages =Math.ceil( allProducts?.length/productPerPage)
    const currentPageProductLastindex = currentPage* productPerPage
    const currentPageProductFirstindex = currentPageProductLastindex- productPerPage
    const visibleAllProducts = allProducts?.slice(currentPageProductFirstindex,currentPageProductLastindex)


    useEffect(()=>{
        dispatch(fetchProducts())
    },[])

    const navigateForward = ()=>{
        if(currentPage != totalPages){
            setCurrentPage(currentPage + 1)
        }
    }
    const navigateBackward= ()=>{
        if(currentPage != 1){
            setCurrentPage(currentPage -1)
        }
    }


  return (
    <>
    <Header insideHome={true}/>

    <div className='container px-4 mx-auto' style={{paddingTop:'100px'}}> 
        {
             loading?
            <div className='flex justify-center items-center my-5 text-lg'>
                <img width={'80px'} height={'80px'} src="https://i.pinimg.com/originals/71/3a/32/713a3272124cc57ba9e9fb7f59e9ab3b.gif" alt="" />
                Loading...

            </div>
            :
        
             <>
                    <div className='grid grid-cols-4 gap-4'>
                        {
                            allProducts?.length > 0 ?
                           visibleAllProducts?.map(product=>(
                                <div className='rounded border p-2 shadow'>
                                    <img width={'100%'} height={'200px'} src={product?.thumbnail} alt="" />
                                    <div className='text-center'>
                                        <h3 className='text-xl font-bold'>{product?.title}</h3>
                                        <Link to={`${product?.id}/view`} className="bg-violet-600 p-1 mt-3 text-white inline-block"> View more...</Link>
                                    </div>
                                </div>

                            )
                            
                        )
                            
                           :
                           <div className='flex  justify-center items-center font-bold text-red-600 my-5 text-lg'>
                                Product Not Found!!
                           </div>

                         
    
                        }
                    
                </div>
                <div className='text-center font-bold mt-20'>
                    <span onClick={navigateBackward} className='cursor-pointer'><i class="fa-solid fa-backward me-2"></i></span>
                    <span>{currentPage} of {totalPages}</span>
                    <span onClick={navigateForward} className='cursor-pointer'><i class="fa-solid fa-forward ms-2"></i></span>
                </div>
             </>
        
        }
     
    </div>
    </>
  )
}

export default Home