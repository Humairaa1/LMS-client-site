import Lottie from 'lottie-react';
import lottieRegister from '../../../public/registration.json';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

export default function Registration() {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                console.log(result.user);
                toast.success('Registration successful!');
                navigate('/');
                reset();
                updateUserProfile(data.name)
                    .then(() => {
                        console.log('User profile updated');

                    })
                    .catch(error => {
                        console.error('Error updating user profile:', error.message);
                    });

            })
            .catch(error => {
                console.error(error.message);
            });
    }

    // const handleRegister = (e) => {
    //     e.preventDefault();
    //     const form = e.target;
    //     const name = form.name.value;
    //     const email = form.email.value;
    //     const password = form.password.value;

    //     createUser(email, password)
    //         .then(result => {
    //             console.log(result.user);
    //         })
    //         .catch(error => {   
    //             console.error(error.message);
    //         });
    //     form.reset();
    // }

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
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <fieldset className="fieldset">

                                    <label className="label">Name</label>
                                    <input type="text" {...register("name", { required: true })} name='name' className="input" placeholder="Name" />
                                    {errors.name && <span className='text-red-600 mt-2'>Name is required</span>}

                                    <label className="label">Email</label>
                                    <input type="email" {...register("email", { required: true })} name='email' className="input" placeholder="Email" />
                                    {errors.email && <span className='text-red-600 mt-2'>Email is required</span>}

                                    <label className="label">Password</label>
                                    <input type="password" {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 10,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z])/
                                    })} name='password' className="input" placeholder="Password" />
                                    {errors.password?.type === "required" && (
                                        <p className="text-red-600">Password is required</p>
                                    )}
                                    {errors.password?.type === "minLength" && (
                                        <p className="text-red-600">Password must be 6 characters</p>
                                    )}
                                    {errors.password?.type === "maxLength" && (
                                        <p className="text-red-600">Password must be less than 10 characters</p>
                                    )}
                                    {errors.password?.type === "pattern" && (
                                        <p className="text-red-600">Password must have one upercase, one lowercase , one number, one special characters</p>
                                    )}

                                    <input className='btn btn-success text-white' type="submit" value={"Register"} />
                                </fieldset>
                            </form>
                        </div>
                        <p className='mt-2'>Already Have an account? Please <Link to={"/login"} className='font-bold underline text-blue-600'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
