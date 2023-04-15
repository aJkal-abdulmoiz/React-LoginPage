import './App.css';
import {FaFacebook} from 'react-icons/fa'
import {FaGoogle} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import "./app.css";


const App=()=>{
  return(
    <div className="cover">
      <h1>Welcome</h1>

      <div className="inputcontainers">

        <input type="email" placeholder="Username"/>
        <input type="password" placeholder="Password"/>

      </div>
      
      <div className="login-btn">
        <div  type="button" className="link-button">
          Login
        </div>
      
      </div>
      <div className="link-contianer">
        <a href="https://support.google.com/accounts/answer/41078?hl=en&co=GENIE.Platform%3DDesktop" className="small">Forgot password</a>

      </div>
     

      
      <p className="Text">or Login using</p>

      <div className="other-Login">
        <div className="icons">
        <a className='fb' href="https://www.facebook.com/">
            <FaFacebook size='23px' color='white'/>
        </a>
        <a href="https://accounts.google.com/v3/signin/identifier?dsh=S-1425033444%3A1681474238538150&continue=https%3A%2F%2Faccounts.google.com%2F&followup=https%3A%2F%2Faccounts.google.com%2F&ifkv=AQMjQ7QmnHJS4iH0Q-pnyq7a9oAbqawOqCiJECjw3EN-cbTa1hC8Hi9cW975aIHButpyL_rmcnIGZA&passive=1209600&flowName=GlifWebSignIn&flowEntry=ServiceLogin">
          <FaGoogle size='20px' color='white'/>
        </a>
        <a href="https://www.instagram.com/">
          <FaInstagram size='20px' color='white'/>
        </a>
          
          
          

      </div>
      

      </div>
      



    </div>
  )
}







export default App;
