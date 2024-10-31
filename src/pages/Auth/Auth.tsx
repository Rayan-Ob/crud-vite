import { Outlet } from 'react-router'

import "./Auth.css"

function Auth() {
    return (

        <div className='auth'>

            {/* auth refer to signup page and login page */}
            <Outlet />
        </div>
    )
}

export default Auth