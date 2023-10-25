import { useContext } from 'react';
import logo from '../../../assets/logo.svg'
import { Link } from "react-router-dom";
import { AuthContext } from '../../../provider/AuthProvider';

const Navbar = () => {

    const { logout, user } = useContext(AuthContext);

    const handleLogout = () => {
        logout()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                const message = error.message;
                console.log(message);
            })
    }

    const navLinks = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        {
            user ? <div>
                {user &&  <div className='flex flex-col lg:flex-row justify-center items-center gap-3'> {user.displayName} <img className='w-[50px] rounded-full' src={user.photoURL} alt="" /><button className='py-1 px-2 font-medium rounded-lg bg-[#FF3811] text-white' onClick={handleLogout}>Logout </button></div> }
            </div> :
    <li><Link to='/login'>Login</Link></li>
}
    </>

    return (
    <div className="navbar bg-base-100 h-32">
        <div className="navbar-start">
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {navLinks}
                </ul>
            </div>
            <Link className="btn btn-ghost normal-case text-xl"><img src={logo} alt="" /></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                {navLinks}
            </ul>
        </div>
        <div className="navbar-end">
            <button className="btn btn-outline btn-error">Appointment</button>
        </div>
    </div>
);
};

export default Navbar;