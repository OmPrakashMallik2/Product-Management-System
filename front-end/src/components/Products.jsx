import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Products() {

    const [product, setProduct] = useState([]);
    const [problem, setProblem] = useState("");

    useEffect(() => {
        axios
            .get("http://localhost:8080/products")
            .then((res) => {
                setProduct(res.data);
            }).catch((err) => {
                setProblem("There is a proplem in server side");
            })
    }, []);

    const deleteProduct = (id) => {
        axios
            .delete("http://localhost:8080/products/" + id)
            .then((res) => {
                setProduct(product.filter(item => item.id !== id));
            })
    }

    return (
        <div className='bg-green-100'>
            <h1 className='text-5xl text-center py-3'>Products</h1>
            <div className='grid grid-cols-3 gap-10'>
                {problem && (
                    <h2>{problem}</h2>
                )}

                {product.map((myProduct) => (
                    <div key={myProduct.id} className='bg-white shadow-green-800 shadow-2xl rounded-md p-5 flex flex-col items-center'>
                        <img className='w-32 p-2 bg-white' src={myProduct.imageLink} alt='product-image' />
                        <h1 className='text-xl font-semibold'>{myProduct.name}</h1>
                        <p className='text-sm text-neutral-800 text-left'>{myProduct.description}</p>
                        <h3 className='text-xl font-semibold'>₹ {myProduct.price}</h3>
                        <h3 className='text-red-400 font-semibold'>{myProduct.status}</h3>
                        <div className='flex text-white justify-around mt-4' >
                            <button className='bg-red-300 mx-2 p-3' onClick={() => deleteProduct(myProduct.id)}>Delete</button>
                            <button >
                                <Link className='bg-blue-300 mx-2 p-3' to={`/editproduct/${myProduct.id}`}>Update</Link>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products
