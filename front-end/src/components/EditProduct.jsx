import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function EditProduct() {

    const [add, setAdd] = useState(false);

    const [product, setProduct] = useState(
        {
            name: '',
            description: '',
            price: '',
            status: '',
            imageLink: ''
        }
    );

    const { id } = useParams();

    useEffect(() => {
        axios
            .get("http://localhost:8080/products/" + id)
            .then((res) => {
                setProduct(res.data);
            })
    }, [])

    const handleOnchange = (e) => {
        const { name, value } = e.target;
        setProduct(prevData => ({ ...prevData, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setProduct(prevData => ({
            ...prevData, [name]: value
        }));

        axios.put("http://localhost:8080/products/" + id, product)
            .then(() => {
                setAdd(true)
            })

    }

    return (
        <div>
            <h1 className='text-5xl p-3 m-2 text-center'>Update Your Products</h1>
            {
                add && (
                    <h2 className='font-semibold text-green-600 text-2xl text-center p-3'>Pruduct updated successfully</h2>
                )
            }
            {
                !add &&
                <div className='flex flex-col'>
                    <form onSubmit={handleSubmit} className='flex flex-col'>
                        <input onChange={handleOnchange} name='name' value={product.name} className='p-3 m-2' placeholder='Name' />
                        <textarea onChange={handleOnchange} name='description' value={product.description} className='p-3 m-2' placeholder='Description' />
                        <input onChange={handleOnchange} name='price' value={product.price} className='p-3 m-2' placeholder='Price' />
                        <input onChange={handleOnchange} name='status' value={product.status} className='p-3 m-2' placeholder='Available ?' />
                        <input onChange={handleOnchange} name='imageLink' value={product.imageLink} className='p-3 m-2' placeholder='Image link' />
                        <button className='p-3 m-2 bg-green-400 text-2xl'>Update Product</button>
                    </form>
                </div>
            }
        </div>
    )
}

export default EditProduct
