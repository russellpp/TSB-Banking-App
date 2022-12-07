import React from 'react'
import { useNavigate } from 'react-router-dom';
import {useState} from 'react'
import { useEffect } from 'react';
import LoginForm from './LoginForm';
import { useCallback } from 'react';
 



function SignUpForm() {

    const navigate = useNavigate();
    const [accounts, setAccounts] = useState([]);

    const LoginForm = useCallback(()=>{
        navigate('/')
    },[navigate]);


    useEffect(()=>{
        const localAccounts = localStorage.getItem('accounts')
        if(localAccounts){
            setAccounts(JSON.parse(localAccounts))
            
        }

    },[]
    )
    
    let [emailValue, setEmailValue] = useState('');
    let [firstNameValue, setFirstNameValue] = useState('');
    let [accountNumberValue, setAccountNumberValue] = useState('');
    let [passwordValue, setPasswordValue] = useState('');
    let [confirmPasswordValue, setConfirmPasswordValue] = useState('');


    
    /* Getting the value of fields */
    function getEmailValue(email){
        setEmailValue(email.target.value)
        emailValue = email.target.value
    }
    function getFirstNameValue(firstName){
        setFirstNameValue(firstName.target.value)
        firstNameValue = firstName.target.value
    }
    function getAccountNumberValue(accountNumber){
        setAccountNumberValue(accountNumber.target.value)
        accountNumberValue = accountNumber.target.value
    }
    function getPasswordValue(password){
        setPasswordValue(password.target.value)
        passwordValue = password.target.value
    }
    function getConfirmPasswordValue(confirmPassword){
        setConfirmPasswordValue(confirmPassword.target.value)
        confirmPasswordValue = confirmPassword.target.value
    }





    
    /* Sign Up Button Function */
    function signUp(){
        
        const newAccount = 
        {
          name: firstNameValue,
          email:emailValue,
          password:passwordValue,
          accountNumber:accountNumberValue,
          balance:"0",
          expiration:"12/26",
          isLoggedIn:false,
          transactions:[],
          wallets:[]
        }

        if(passwordValue === confirmPasswordValue){

            localStorage.setItem('accounts', JSON.stringify([ 
            ...accounts,
            newAccount
            ]))
            LoginForm()
         }
        else{
            alert('Passwords do not match!')
        }
        
    } 

    

/*  
1. create array of accounts
2. state for fields in signup (account, email...)
3. create signUp button trigger
3.1 get all fields from state and add it to new account object
3.2 push account object to array of accounts
3.3 save array of accounts
*/


  return (
    <div>
       <form>
            <div className="form-inner">
                <h2>Sign Up</h2>
                <div className="form-group">
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" id="name" autoComplete='off' autoFocus onChange={getFirstNameValue}/>
                </div>
                <div className="form-group">
                    <label htmlFor="account">Account Number: </label>
                    <input type="text" name="account" id="account" autoComplete='off' onChange={getAccountNumberValue} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email" autoComplete='off' onChange={getEmailValue}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password: </label> 
                    <input type="password" name="password" id="password" autoComplete = "off" onChange={getPasswordValue}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Confirm password: </label>
                    <input type="password" name="confirmPassword" id="confirmPassword"onChange={getConfirmPasswordValue}/>
                </div>
                <input type="submit" value="Sign Up" onClick = {signUp}/>
                <button className = "logIn" onClick = {LoginForm }>Already have an account? Log in!</button>
            </div>
        </form>
    </div>
  )
}

export default SignUpForm