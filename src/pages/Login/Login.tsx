import Form from "../../components/Form/Form"
import {inputLogin} from "../../../public/assets/tsArray/auth"


function Login() {
  return (
    <div>

<Form title = "Login to Account"
       desc="please enter your email and password to continue"
       inputs={inputLogin}
       btn="Sign in"
       end ="Don't have an account , "
       url = "http://vica.website/api/login"
       link="/auth/signup"
       linkText="Create Account"
    

       
       />
    </div>
  )
}

export default Login