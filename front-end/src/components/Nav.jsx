import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <div className='flex justify-between px-10 py-5 bg-green-500'>
            <div className='w-2/4'>
                <Link to="/" className='text-3xl font-semibold'>
                    Product Managmenet System
                </Link>
            </div>

            <div className='flex justify-around w-2/4'>
                <Link className='text-2xl' to="/addproduct">AddProduct</Link>
            </div>
        </div>
    )
}

export default Nav
