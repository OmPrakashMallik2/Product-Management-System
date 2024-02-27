import axios from 'axios'
import React, { useState } from 'react'

function AddProduct() {

    const [formData, setFormData] = useState(
        {
            name: '',
            description: '',
            price: '',
            status: '',
            imageLink: ''
        }
    )
    const [add, setAdd] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData, [name]: value
        }));
    };

    const handleSubmit = (e) => {
        setAdd(true);
        e.preventDefault();
        axios.post("http://localhost:8080/product", formData);

        setFormData(
            {
                name: '',
                description: '',
                price: '',
                status: '',
                imageLink: ''
            }
        )
    }

    return (
        <div>
            <h1 className='text-5xl p-3 m-2 text-center'>Add Products</h1>
            {
                add && (
                    <h2 className='font-semibold text-green-600 text-2xl text-center p-3'>Pruduct added successfully</h2>
                )
            }
            {
                !add &&
                <div className='flex flex-col'>
                    <form onSubmit={handleSubmit} className='flex flex-col'>
                        <input onChange={handleChange} name='name' value={formData.name} className='p-3 m-2' placeholder='Name' />
                        <textarea onChange={handleChange} name='description' value={formData.description} className='p-3 m-2' placeholder='Description' />
                        <input onChange={handleChange} name='price' value={formData.price} className='p-3 m-2' placeholder='Price' />
                        <input onChange={handleChange} name='status' value={formData.status} className='p-3 m-2' placeholder='Available ?' />
                        <input onChange={handleChange} name='imageLink' value={formData.imageLink} className='p-3 m-2' placeholder='Image link' />
                        <button className='p-3 m-2 bg-green-400 text-2xl'>Add Product</button>
                    </form>
                </div>
            }
        </div>
    )
}

export default AddProduct
