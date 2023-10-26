import { Link } from 'react-router-dom';
import login from '../../assets/images/login/login.svg'
import { useContext, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import toast from 'react-hot-toast';

const Register = () => {

    const { registerUser } = useContext(AuthContext);
    const [error, setError] = useState(null);

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        setError('')
        console.log(photo,name, email, password);

        if (password.length < 6) {
            setError('Password should be at least 6 characters');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setError('Your Password must contain a Capital Letter');
            return;
        }
        else if (!/^(?=.*[!@#$%^&*()_+{}:;<>,.?~\\|-])/.test(password)) {
            setError('Password must contain a Special Character');
            return;
        }

        registerUser(email, password)
        .then(result => {
            const createdUser = result.user;
            updateProfile(createdUser, {
                displayName: name,
                photoURL: photo,
            })
            .then(() => {
                toast.success('Successfully Register!')
                window.location.reload();
            })
            .catch(error => {
                const message = error.message;
                console.log(message);
            })
            console.log(createdUser);
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
                    <h1 className="text-3xl text-center font-bold">Register</h1>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" required />
                        </div>
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
                        <p className='text-red-500'>{error}</p>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Register" />
                        </div>
                       
                    </form>
                    <p className='text-center mb-5'>Already have an account? <Link className='text-orange-500 font-bold' to='/login'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;