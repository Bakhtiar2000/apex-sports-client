import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { FaHome } from 'react-icons/fa';
import { TbHomeMove } from 'react-icons/tb';
import { SiGoogleclassroom } from 'react-icons/si';
import { MdManageAccounts, MdOutlinePendingActions } from 'react-icons/md';
import { RiListSettingsFill } from 'react-icons/ri';
import { BiAddToQueue, BiSelectMultiple } from 'react-icons/bi';
import { IoSchool } from 'react-icons/io5';
import { NavLink, Outlet } from 'react-router-dom';


const Dashboard = () => {
    const { user } = useContext(AuthContext)
    const isAdmin = false
    const isInstructor = true
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <h2 className='text-4xl font-serif text-center my-10 text-violet-800'>Welcome to dashboard, {user?.displayName}</h2>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-gradient-to-b from-violet-300 via-fuchsia-300 to-violet-300 text-base-content">
                    {
                        isAdmin ?
                            <>
                                <li><NavLink to='/dashboard/adminHome'><FaHome /> Admin Home</NavLink></li>
                                <li><NavLink to='/dashboard/manageClasses'><RiListSettingsFill /> Manage classes</NavLink></li>
                                <li><NavLink to='/dashboard/manageUsers'><MdManageAccounts /> Manage users</NavLink></li>
                            </>

                            : isInstructor ?
                                <>
                                    <li><NavLink to='/dashboard/instructorHome'><FaHome /> Instructor Home</NavLink></li>
                                    <li><NavLink to='/dashboard/addAClass'><BiAddToQueue /> Add a class</NavLink></li>
                                    <li><NavLink to='/dashboard/myClasses'><IoSchool /> My classes</NavLink></li>
                                </>

                                : <>
                                    <li><NavLink to='/dashboard/studentHome'><FaHome /> Student Home</NavLink></li>
                                    <li><NavLink to='/dashboard/selectedClasses'><MdOutlinePendingActions /> My selected classes</NavLink></li>
                                    <li><NavLink to='/dashboard/enrolledClasses'><BiSelectMultiple /> My enrolled classes</NavLink></li>
                                </>
                    }


                    <div className="divider"></div>
                    <li><NavLink to='/'><TbHomeMove /> Home</NavLink></li>
                    <li><NavLink to='/classes'><SiGoogleclassroom />Classes</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;