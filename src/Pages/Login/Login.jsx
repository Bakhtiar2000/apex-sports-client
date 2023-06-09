import React from 'react';

const Login = () => {



    return (
        <dialog id="my_modal" className="modal">
            <form method="dialog" className="modal-box">
                <button htmlFor="my-modal-3" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

                {/* content goes here */}

            </form>
            <form method="dialog" className="modal-backdrop">
                <button></button>
            </form>
        </dialog>
    );
};

export default Login;