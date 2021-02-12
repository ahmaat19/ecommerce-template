import React from 'react'
import ProductScreen from './ProductScreen'
import ShoppingCategoryScreen from './ShoppingCategoryScreen'

const ProductListScreen = () => {
  return (
    <div className='row mt-5'>
      <div className='col-lg-3 col-md-3 col-sm-12 col-12'>
        <ShoppingCategoryScreen />
      </div>
      <div className='col-lg-9 col-md-9 col-sm-12 col-12'>
        <div className='form-group '>
          <input
            type='text'
            className='form-control rounded-pill shadow-sm '
            placeholder='Search product '
          />
        </div>
        <ProductScreen />
      </div>
    </div>
  )
}

export default ProductListScreen
