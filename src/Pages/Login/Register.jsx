import React from 'react';
import { useForm } from "react-hook-form";
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Register = () => {
    const [show, setShow] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handlePasswordToggle = () => {
        setShow(!show)
    }

    const onSubmit = data =>{
        console.log(data)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>


                {/* Name */}
                <label className="label">
                    <span className="label-text">Your Name*</span>
                </label>
                <input type='text' {...register("name", { required: true })} />
                {errors.name && <span className='text-red-500'>Name is required</span>}


                {/* Photo URL */}
                <label className="label">
                    <span className="label-text">Your Photo URL*</span>
                </label>
                <input type='text' {...register("photo", { required: true })} />
                {errors.photo && <span className='text-red-500'>Photo URL is required</span>}


                {/* Gender */}
                <label className="label">
                    <span className="label-text">Gender</span>
                </label>
                <input {...register("gender")} />
                <select defaultValue={"Gender"}  {...register("gender")}>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                </select>


                {/* Email */}
                <label className="label">
                    <span className="label-text">Your Email*</span>
                </label>
                <input type='email' {...register("email", { required: true })} />
                {errors.email && <span className='text-red-500'>Email is required</span>}


                {/* Password */}
                <label className="label">
                    <span className="label-text">Your Password*</span>
                </label>
                <input className='relative' type={show ? 'text' : 'password'} {...register("password", { required: true })} />
                <FaEye onClick={handlePasswordToggle} className='absolute bottom-[190px] right-12 text-slate-500 hover:text-slate-700' />
                {errors.password && <span className='text-red-500'>Password is required</span>}


                {/* Confirm Password */}
                <label className="label">
                    <span className="label-text">Confirm Password*</span>
                </label>
                <input type='password' {...register("confirm", { required: true })} />
                {errors.confirm && <span className='text-red-500'>Confirming password is required</span>}


                {/* Submit */}
                <input className="btn btn-primary" type="submit" value="Sign up" />
            </form>

            <p className="text-center my-2 "><small>Already have an account? <Link className="btn-link" to='/login'>Login</Link></small></p>
        </div>
    );
};

export default Register;