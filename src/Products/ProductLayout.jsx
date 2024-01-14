import React from 'react'
import Categories from './Categories'
import Products from './Products'
import Category from './Category'
import { Outlet } from 'react-router-dom'
function ProductLayout() {
  return (
 <>
 <div className='row'>
  <div className='col-sm-8'></div>


  <Outlet/>
   <div className='col-sm-4'></div>
 <Categories/>
 </div>

 </>  
  )
}

export default ProductLayout
