import { SignIn} from '@clerk/clerk-react';
import "./Auth.css"

export default function Login(){
    return(
        <div className='auth'>
        <SignIn signUpUrl='/signup' forceRedirectUrl={"/"}/>
        </div>
    )
};