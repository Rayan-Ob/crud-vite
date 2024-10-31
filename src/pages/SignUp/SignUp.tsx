
import Form from '../../components/Form/Form'
import {inputSignUp} from "../../../public/assets/tsArray/auth"



function SignUp() {
  return (
    <div>
      <Form title="Create an Account"
        desc="create an accout to continue"
        inputs={inputSignUp}
        btn="Sign Up"
        end="Already have an account ? "
        url = "http://vica.website/api/register"
        link="/auth"
        linkText= "Login"
        
     
      />
    </div>
  )
}

export default SignUp