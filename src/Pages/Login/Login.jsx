import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext)
    const [show, setShow] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handlePasswordToggle = () => {
        setShow(!show)
    }
    const onSubmit = data => {
        console.log(data)
        signIn(data.email, data.password)
            .then(res => {
                const loggedUser = res.user
                console.log(loggedUser)
                form.reset()
            })
            .catch(error => {
                if (error.message == 'Firebase: Error (auth/wrong-password).') {
                    setError('Wrong Password given')
                }
            })
    }

    const handleLogInWithGoogle = () => {
        googleSignIn()
            .then(res => {
                const loggedUser = res.user
                console.log(loggedUser)
                form.reset()
            })
            .catch(err => setError(err.message))
    }

    return (
        <div className="hero min-h-screen login-page-cover-photo">

            <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-violet-100">
                <div className="card-body">
                    <h1 className="text-3xl text-center font-semibold mb-5">Login to your account</h1>

                    <button onClick={handleLogInWithGoogle} className="btn bg-white w-60 mx-auto">
                        <span className='mr-2 text-xl'><FcGoogle /> </span> Continue with google
                    </button>

                    <div className="divider">OR</div>

                    <form onSubmit={handleSubmit(onSubmit)}>


                        {/* Email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Email*</span>
                            </label>
                            <input className="input input-bordered" type='email' {...register("email", { required: true })} />
                            {errors.email && <span className='text-red-500'>Email is required</span>}
                        </div>


                        {/* Password */}
                        <div className="form-control">

                            <label className="label">
                                <span className="label-text">Your Password*</span>
                                <span className="underline label-text-alt text-primary">Forgot password?</span>
                            </label>
                            <input className='relative input input-bordered' type={show ? 'text' : 'password'} {...register("password", { required: true })} />
                            <FaEye onClick={handlePasswordToggle} className='absolute bottom-[200px] right-12 text-slate-500 hover:text-slate-700' />
                            {errors.password && <span className='text-red-500'>Password is required</span>}
                        </div>


                        {/* Checkbox */}
                        <div className="form-control mt-5">
                            <label className="flex items-center gap-3 cursor-pointer">
                                <input type="checkbox" className="checkbox checkbox-sm" />
                                <span className="label-text">Remember me for 30 days</span>

                            </label>
                        </div>


                        {/* Submit */}
                        <input className="btn btn-primary mt-5" type="submit" value="Login" />

                    </form>
                </div>

                <p className="text-center mb-4 text-xl  "><small>Don't have an account? <Link className="btn-link" to='/register'>Register</Link></small></p>
            </div>
        </div>

    );
};

export default Login;