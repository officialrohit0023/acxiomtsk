import { Link } from 'react-router-dom'

export default function Home(){
    return(
        <div>
            <Link  to='/adminlogin'><button>Admin</button></Link>
            <Link  to='/vendors'><button>Vendor</button></Link>
            <Link  to='/userlogin'><button>User</button></Link>
            
        </div>
    );
}