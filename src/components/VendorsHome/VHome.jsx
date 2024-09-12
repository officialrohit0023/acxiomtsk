import React,{ useEffect, useState } from "react";
import { Link } from 'react-router-dom'

export default function VHome() {
    
    return (
        <div className="text-center">
            <div className="bg-gray-400 text-black py-4 px-8 mb-8">
                <p>Welcome</p>
                <p>Vendor</p>
            </div>
            <div className="flex justify-center space-x-4">       
                <button className="bg-gray-300 text-black py-2 px-4 rounded">Your Item</button>
                <Link  to='/additem'><button className="bg-gray-300 text-black py-2 px-4 rounded">Add new Item</button></Link>
                <button className="bg-gray-300 text-black py-2 px-4 rounded">Transaction</button>
                <button className="bg-gray-300 text-black py-2 px-4 rounded">LogOut</button><br />
               
                

            </div>
        </div>
    );
}