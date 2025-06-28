import Lottie from 'lottie-react';
import lottieLogin from '../../../public/login.json';
import { Link } from 'react-router-dom';

export default function Login() {

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        // Here you can add your login logic, like calling an API
        console.log("Email:", email);
        console.log("Password:", password);
    }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen mb-5">
                <div className="hero-content flex-col lg:flex-row gap-10">
                    <div className="text-center lg:text-left">
                       <Lottie animationData={lottieLogin}></Lottie>
                    </div>
                    <div className='card w-full max-w-sm '>
                        <h1 className="text-5xl font-bold mb-4">Login now!</h1>
                        <div className="bg-base-100 shrink-0 shadow-2xl">                      
                        <form onSubmit={handleLogin} className="card-body">
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" name='password' className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <input className='btn btn-success text-white' type="submit" value={"Login"} />
                            </fieldset>
                        </form>
                    </div>
                    <p className='mt-2'>Have no account? Please <Link to={"/register"} className='font-bold underline text-blue-600'>Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
