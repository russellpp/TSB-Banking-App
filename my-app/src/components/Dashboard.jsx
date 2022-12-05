import React from 'react'
import Account from './dashcomponents/Account'
import logo from './assets/logo.png'
import logout from './assets/logout.png'
/* import Transactions from './dashcomponents/Transactions' */
import Deposit from './dashcomponents/Deposit'
import Withdraw from './dashcomponents/Withdraw'
import Transactions from './dashcomponents/Transactions'
import Send from './dashcomponents/Send'
import Expenses from './dashcomponents/Expenses'
import {useState} from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
/* import LoginForm from './LoginForm'
 */
function Dashboard() {

  const [currentUser, setCurrentUser] = useState(null);
  const [accounts, setAccounts] =useState([]);
  const navigate = useNavigate();



  useEffect(()=>{
    const localAccounts = localStorage.getItem('accounts')
      if(localAccounts){
        setAccounts(JSON.parse(localAccounts))
      }
  },[]
  )


    useEffect(()=>{
      if(accounts.length > 0){
        
        const loggedInAccount = accounts.find((account)=>account.isLoggedIn)
        setCurrentUser(loggedInAccount)
        localStorage.setItem('accounts', JSON.stringify(accounts))
      } 

    }, [accounts, currentUser]);



  return (
      <div className="dashboardBox">
        <nav className="dashboardNav">
            <img src ={logo} alt="logo" className="logo"></img>
            <h1>Bank</h1>
            <div className='logoutButton'><img src = {logout} alt="logout" onClick={() => navigate(-1)} /></div>
        </nav>
        <div className="main">
            <div className='account'>
              <Account currentUser = {currentUser} accounts = {accounts} />
            </div>
            
            <div className='buttonContainer'>
              <Deposit setCurrentUser = {setCurrentUser} currentUser = {currentUser} accounts = {accounts} setAccounts = {setAccounts}/>
              <Withdraw setCurrentUser = {setCurrentUser} currentUser = {currentUser} accounts = {accounts} setAccounts = {setAccounts}/>
              <Send />
              <Expenses/>
            </div>
            <div className='transaction'>
               <Transactions currentUser = {currentUser}/> 
            </div>
         </div>
      </div> 
  )
}

export default Dashboard
