import React from 'react'
import './sidebar.css';
import logout from '../assets/shutdown.png'
import customerLogo from '../assets/customer.png'
import transferLogo from '../assets/transfer.png'
import withdrawLogo from '../assets/withdraw (1).png'
import depositLogo from '../assets/deposit (1).png'




function Sidebar() {
  return (
    <div className='sideBarContainer'>
        <div className='sideBarTop'>
            TSB
        </div>
        <nav className='sideBarNav'>
            <ul className='sideBarNavList'>
                <li><img src ={customerLogo} alt="customer logo" className="customerLogo"/><span className='manageUsers'>Manage Users</span></li>
                <li><img src ={depositLogo} alt="deposit logo" className="depositLogo"/><span className='depositOption'>Deposit</span></li>
                <li><img src ={withdrawLogo} alt="withdraw logo" className="withdrawLogo"/><span className='withdrawOption'>Withdraw</span></li>
                <li><img src ={transferLogo} alt="transfer logo" className="transferLogo"/><span className='transferOption'>Transfer</span></li>
            </ul>
        </nav>
        <footer className='sideBarBottom'>
            <img src ={logout} alt="logo" className="logoutAdmin"/>
        </footer>
    </div>
  )
}

export default Sidebar
