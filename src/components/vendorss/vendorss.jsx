import React from 'react'
import './vendorss.css'

export default function Vendorss() {
  return (
    <div>
          <div className="flex flex-col items-center">
                    <div className="flex justify-between w-full p-4">
                        <div className="button">Home</div>
                        <div className="flex space-x-4">
                            <div className="nav-button">Vendor</div>
                            <div className="nav-button">Florist</div>
                        </div>
                        <div className="button">LogOut</div>
                    </div>
                    <div className="flex justify-center space-x-4 mt-10">
                        <div className="card">
                            <div>Vender 1</div>
                            <div>Contact Details</div>
                            <div className="button">Shop Item</div>
                        </div>
                        <div className="card">
                            <div>Vender 2</div>
                            <div>Contact Details</div>
                            <div className="button">Shop Item</div>
                        </div>
                        <div className="card">
                            <div>Vender 3</div>
                            <div>Contact Details</div>
                            <div className="button">Shop Item</div>
                        </div>
                        <div className="card">
                            <div>Vender 4</div>
                            <div>Contact Details</div>
                            <div className="button">Shop Item</div>
                        </div>
                    </div>
                </div>
    </div>
  )
}
