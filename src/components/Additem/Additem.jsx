import React from 'react'

export default function Additem() {
  return (
    <div>
         <div className="p-4">
                    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
                        <div>Welcome 'Vendor Name'</div>
                        <div className="space-x-4">
                            <button className="bg-white text-blue-600 px-4 py-2 rounded border border-green-400">Product Status</button>
                            <button className="bg-white text-blue-600 px-4 py-2 rounded border border-green-400">Request Item</button>
                            <button className="bg-white text-blue-600 px-4 py-2 rounded border border-green-400">View Product</button>
                            <button className="bg-white text-blue-600 px-4 py-2 rounded border border-green-400">Log Out</button>
                        </div>
                    </header>
                    <div className="flex mt-4">
                        <div className="bg-blue-600 p-4 rounded-lg w-1/3">
                            <div className="bg-gray-400 text-center py-2 rounded mb-4">Product Name</div>
                            <div className="bg-gray-400 text-center py-2 rounded mb-4">Product Price</div>
                            <div className="bg-gray-400 text-center py-2 rounded mb-4">Product Image</div>
                            <button className="bg-white text-blue-600 px-4 py-2 rounded mx-auto block">Add The Product</button>
                        </div>
                        <div className="ml-4 grid grid-cols-4 gap-4 w-2/3">
                            <div className="bg-blue-600 text-white text-center py-2 rounded">Product Image</div>
                            <div className="bg-blue-600 text-white text-center py-2 rounded">Product Name</div>
                            <div className="bg-blue-600 text-white text-center py-2 rounded">Product Price</div>
                            <div className="bg-blue-600 text-white text-center py-2 rounded">Action</div>
                            <div className="bg-blue-600 text-white text-center py-2 rounded col-span-1">Image</div>
                            <div className="bg-blue-600 text-white text-center py-2 rounded col-span-1">Image Name</div>
                            <div className="bg-blue-600 text-white text-center py-2 rounded col-span-1">Rs/-</div>
                            <div className="bg-blue-600 text-white text-center py-2 rounded col-span-1">
                                <button className="bg-red-600 text-white px-4 py-2 rounded mb-2">Delete</button>
                                <button className="bg-green-600 text-white px-4 py-2 rounded">Update</button>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
  )
}
