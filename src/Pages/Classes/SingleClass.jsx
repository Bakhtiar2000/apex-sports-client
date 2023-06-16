import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import UserRoleRoute from '../../Routes/UserRoleRoute';
import useSelection from '../../Hooks/useSelection';

const SingleClass = ({ usedClass }) => {
    const { _id, name, price, instructor, available_seats, image } = usedClass
    const [disabled, setDisabled]= useState(false)
    const {user}= useContext(AuthContext)
    const navigate= useNavigate()
    const location= useLocation()
    const [currentUser]= UserRoleRoute()
    const [, refetch]= useSelection()
    // console.log(currentUser)

    useEffect(() => {
        if (currentUser.role === 'admin' || currentUser.role === 'instructor' || available_seats === 0) setDisabled(true);
    }, [currentUser.role, available_seats]);

    const handleSelectClass = () => {
        
        if(user && user?.email){
            const selected= {classId: _id, name, instructor, image, email: user.email, price}
            fetch('http://localhost:5000/selections', {
                method: 'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selected)
            })
            .then(res=> res.json())
            .then(data=> {
                console.log(data)
                if(data.insertedId){
                    setDisabled(true)
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Class has been selected',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
        else{
            Swal.fire({
                title: 'PLease login to select a class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}})
                }
              })
        }

    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Instructor: {instructor}</p>
                <p>Available Seats: {available_seats}</p>
                <p>Price: {price}$</p>
                <div className="card-actions justify-end">
                    <button disabled={disabled} onClick={() => handleSelectClass(usedClass)} className="btn btn-primary">Select</button>
                </div>
            </div>
        </div>
    );
};

export default SingleClass;


{/*  */ }