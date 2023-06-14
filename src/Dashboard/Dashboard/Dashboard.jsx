import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { FaHome } from 'react-icons/fa';
import { SiGoogleclassroom } from 'react-icons/si';
import { NavLink } from 'react-router-dom';


const Dashboard = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin]= true
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <h2 className='text-4xl font-serif text-center my-10 text-violet-800'>Welcome to dashboard, {user?.displayName}</h2>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-gradient-to-b from-violet-300 via-fuchsia-300 to-violet-300 text-base-content">
                    {
                        isAdmin?
                        <>
                        
                        </>: <>
                        
                        </>
                    }


                    <div className="divider"></div>
                    <li><NavLink to='/'><FaHome /> Home</NavLink></li>
                    <li><NavLink to='/classes'><SiGoogleclassroom />Classes</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;