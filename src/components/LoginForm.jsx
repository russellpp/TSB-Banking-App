import React, {useState} from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



function LoginForm() {
    const [details, setDetails] = useState({email:"", password:""});

      const [currentUser, setCurrentUser] = useState (null);
      const [error, setError] = useState("");
      const [accounts, setAccounts] = useState([]);
      const navigate = useNavigate();
      

      /* useEffect(()=>{
        if(user){
          localStorage.setItem('user', JSON.stringify(user))
            navigate("/Dashboard")
           

        }
      }, [navigate,user]
      ) */

      
      useEffect(()=>{
       
        if(accounts.length === 0){
        const localAccounts = localStorage.getItem('accounts')
        if(localAccounts){
           setAccounts(JSON.parse(localAccounts)) 
        }
      }
      }, [accounts]
      )

      


    

      const login = details =>{
        let hasLoggedIn = false;
        
        
        
        
        const updatedAccounts = accounts.map((account)=>{
          console.log(accounts)
          if(details.email === account.email && details.password === account.password){
            hasLoggedIn = true
            const loggedInAccount = {
              ...account,
              isLoggedIn: true
            } 
            return loggedInAccount
          }
          else{
            return account
          }
        })
        console.log(hasLoggedIn)

        if(hasLoggedIn){
          localStorage.setItem('accounts',JSON.stringify(updatedAccounts))
          navigate("/Dashboard")
        }
        else{
          setError("Invalid email/password")
        }
      }

    const submitHandler = e =>{
        e.preventDefault();

      login(details);
    }
   
    function SignUpForm(){
        navigate("/SignUpForm")

    }

    
  return (
    <div>
      
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Login</h2>
                {(error !=="") ? (<div className = "error">{error}</div>) : ""}
                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email" autoComplete='off' onChange={e => setDetails({...details, email:e.target.value})} value={details.email} autoFocus />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" onChange={e => setDetails({...details, password:e.target.value})} value={details.password}/>
                </div>
                <input type="submit" value="Log in" onClick={login}/>
                <button className = "signUp" onClick = {SignUpForm}>Don't have an account? Sign Up!</button>
                
            </div>
        </form>
    </div>
  )
}


export default LoginForm;
