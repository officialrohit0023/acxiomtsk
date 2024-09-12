import React from 'react'
import './Maintainvendor.css'

export default function Maintainvendor() {
  return (
    <div>
        <div className="flex justify-between items-start p-10">
                    <div className="flex flex-col">
                        <div className="button">Home</div>
                        <div className="button">Membership</div>
                        <div className="button">User Management</div>
                    </div>
                    <div className="flex flex-col">
                        <div className="button">Add</div>
                        <div className="button">Update</div>
                        <div className="button">Add</div>
                        <div className="button">Update</div>
                    </div>
                    <div className="flex flex-col items-end">
                        <div className="button">LogOut</div>
                    </div>
                </div>
    </div>
  )
}
