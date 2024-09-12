import React from 'react'

export default function Maintainuser() {
  return (
    <div>
        <div className="bg-gray-400 p-10 rounded-lg shadow-lg">
    <div className="flex justify-between mb-10">
        <button className="bg-white border-2 border-green-500 text-black py-2 px-4 rounded-lg">Home</button>
        <button className="bg-white border-2 border-green-500 text-black py-2 px-4 rounded-lg">LogOut</button>
    </div>
    <div className="flex space-x-10">
        <div className="space-y-10">
            <button className="bg-white border-2 border-green-500 text-black py-2 px-4 rounded-lg">Membership</button>
            <button className="bg-white border-2 border-green-500 text-black py-2 px-4 rounded-lg">User Management</button>
        </div>
        <div className="space-y-4">
            <button className="bg-white border-2 border-green-500 text-black py-2 px-4 rounded-lg">Add</button>
            <button className="bg-white border-2 border-green-500 text-black py-2 px-4 rounded-lg">Update</button>
        </div>
        <div className="space-y-4">
            <button className="bg-white border-2 border-green-500 text-black py-2 px-4 rounded-lg">Add</button>
            <button className="bg-white border-2 border-green-500 text-black py-2 px-4 rounded-lg">Update</button>
        </div>
    </div>
</div></div>
  )
}
