import { SignUp } from '@clerk/clerk-react';
import "./Auth.css"
export default function Signup(){
    return(
        <div className='auth'>
        <SignUp signInUrl='/login' forceRedirectUrl={"/"}/>
        </div>
    )
};