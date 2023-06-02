import { Link } from "react-router-dom";
import './App.css';
const Header = ()=>{
    return (
    <div>
     <h1>React Context-API</h1>
     <ul className="nav">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/cart'>Cart</Link></li>
     </ul>
    </div>
    )
}
export default Header;