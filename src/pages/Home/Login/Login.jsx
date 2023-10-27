import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import toast from 'react-hot-toast';
import axios from 'axios';

const Login = () => {

    const { loginUser } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        loginUser(email, password)
            .then(() => {
                toast.success('Login Successful')
                const user = { email };
                axios.post('http://localhost:5000/jwt', user, {
                    withCredentials: true,
                })
                    .then(res => {
                        if (res.data.success) {
                            navigate(location?.state ? location.state : "/")
                        }
                    })
            })
            .catch(error => {
                const message = error.message;
                toast.error(message)
            })
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                    <img src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-3xl text-center font-bold">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='text-center mb-5'>New to this site? <Link className='text-orange-500 font-bold' to='/register'>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;