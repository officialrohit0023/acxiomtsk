import React from 'react'
import './AHome.css'
import { Link } from 'react-router-dom'

export default function AHome() {
  return (
    <div>
                        <div className="container">
                    <div className="row">
                        <div className="button">Home</div>
                        <div className="button">LogOut</div>
                    </div>
                    <div className="center-button">
                        <div className="button">Welcome Admin</div>
                    </div>
                    <div className="row">
                        <Link to='/maintainuser'><div className="button">Maintain User</div></Link>
                        <Link to='/maintaivendor'><div className="button">Maintain Vendor</div></Link>
                        
                    </div>
                </div>
    </div>
  )
}
