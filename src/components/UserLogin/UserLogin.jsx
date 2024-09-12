import { Link } from 'react-router-dom'
export default function UserLogin(){
    return(
        <div>
            <div className="container">
        <div className="header"><p>Event Management System</p></div>
        <div className="form-group">
            <div className="label">User Id</div>
            <div className="input"><input type="text" /></div>
        </div>
        <div className="form-group">
            <div className="label">Password</div>
            <div className="input"><input type="password" /></div>
        </div>
        <div className="button-group">
            <div className="button"><Link  to='/usersinup'><button>SinUp</button></Link></div>
            <div className="button"><Link  to='/uhome'><button>After Login</button></Link></div>
            <div className="button"> <Link  to='/'><button>Login</button></Link></div>
        </div>
    </div>
        </div>
    );
}