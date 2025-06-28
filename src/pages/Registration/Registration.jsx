import Lottie from 'lottie-react';
import lottieRegister from '../../../public/registration.json';

export default function Registration() {

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
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
                    <div className="text-center lg:text-left w-[300px] md:w-[600px]">
                        <Lottie animationData={lottieRegister}></Lottie>
                    </div>
                    <div className='card w-full max-w-sm '>
                        <h1 className="text-5xl font-bold mb-4">Register now!</h1>
                        <div className="bg-base-100 shrink-0 shadow-2xl">
                            <form onSubmit={handleRegister} className="card-body">
                                <fieldset className="fieldset">
                                    <label className="label">Name</label>
                                    <input type="text" name='name' className="input" placeholder="Email" />
                                    <label className="label">Email</label>
                                    <input type="email" name='email' className="input" placeholder="Email" />
                                    <label className="label">Password</label>
                                    <input type="password" name='password' className="input" placeholder="Password" />                                   
                                    <input className='btn btn-success text-white' type="submit" value={"Register"} />
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
