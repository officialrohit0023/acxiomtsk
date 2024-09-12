import React from 'react'
import { Link } from 'react-router-dom'

export default function UHome() {
  return (
    <div><div className="flex flex-col items-center justify-center min-h-screen">
    <div className="bg-blue-600 text-white text-center py-2 w-full">
        WELCOME USER
    </div>
    <div className="flex justify-center space-x-4 mt-8">
       <Link to='/vendorss'><button className="bg-blue-600 text-white py-2 px-4 rounded-md">Vendor</button></Link> 
        <button className="bg-blue-600 text-white py-2 px-4 rounded-md">Cart</button>
        <button className="bg-blue-600 text-white py-2 px-4 rounded-md">Guest List</button>
        <button className="bg-blue-600 text-white py-2 px-4 rounded-md">Order Status</button>
    </div>
    <div className="mt-8">
        <button className="bg-blue-600 text-white py-2 px-4 rounded-md">LogOut</button>
    </div>
</div></div>
  )
}
