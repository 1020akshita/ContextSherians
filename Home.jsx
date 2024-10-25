import React, { useEffect, useState } from 'react'
import axios from '../utils/axios'

const Home = () => {
    const [product, setProduct] = useState([])
    const getProducts = () => {

        axios.get("/products").then(res => {
            console.log(res.data)
            setProduct(res.data)
        }).catch(err => {
            console.error(err)
        }) 
    }

    const AddProducts = () => {
        // const data = '/products'
        axios.post("/products", {
            title: 'test product',
            price: 13.5,
            description: 'lorem ipsum set',
            image: 'https://i.pravatar.cc',
            category: 'electronic'
        }).then(result => {
            console.log(result.data)
        }).catch(err => {
            console.error(err, "err")
        })
    }
    useEffect(() => {
        getProducts()
    }, [])
    return (
        <div>
            {/* <button onClick={getProducts} className='px-3 py-2  bg-gray-600 rounded ml-4'>Get Data</button> */}
            <button onClick={AddProducts} className='px-3 py-2  bg-gray-600 rounded ml-4 text-white'>Add Product</button>

            <div className='overflow-hidden text-black '>
                <ul className=''>
                    {product.length > 0 ? product.map(e => <li key={e.id} className='rounded w-2/3  px-5 py-2 bg-gray-200 mt-1'>{e.title}</li>) :
                        <h1 className='text-white'>Loading..</h1>}
                </ul>
            </div>
        </div >
    )
}

export default Home
