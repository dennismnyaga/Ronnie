/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../app/hooks'
import { fetchProducts, getProductsStatus, selectAllProducts } from '../features/products/productsSlice'
import ProductsExcerpt from '../features/products/ProductsExcerpt'

const HomePage = () => {
    const dispatch = useAppDispatch()

    const prods = selectAllProducts;
    const prodsStatus = getProductsStatus;

    console.log('Products ', prods )



    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    let content;

    if(prodsStatus === 'loading'){
        content =  <div>Loading...</div>
    } else if (prodsStatus === 'succeeded'){
        content = prods.map((product) => (
            <ProductsExcerpt key={product.id} product={product} />
        ))
    }
  return (
    <>
    {content}
    <Link to='about/'>About Page</Link>
    </>
  )
}

export default HomePage