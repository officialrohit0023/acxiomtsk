
import './AdminLogin.css'
import { Link } from 'react-router-dom'
 function AdminLogin(){
  return (<div>
        <div className="container">
        <div className="header"><p>Event Management System</p></div>
        <div className="form-group">
            <div className="label">Admin Id</div>
            <div className="input"><input type="text" /></div>
        </div>
        <div className="form-group">
            <div className="label">Password</div>
            <div className="input"><input type="password" /></div>
        </div>
        <div className="button-group">
            <div className="button"><Link  to='/adminsinup'><button>SinUp</button></Link></div>
            <div className="button"><Link  to='/ahome'><button>After Login</button></Link></div>
            <div className="button"> <Link  to='/'><button>Login</button></Link></div>
        </div>
    </div>
    </div>);
  }
  export default AdminLogin;
  
