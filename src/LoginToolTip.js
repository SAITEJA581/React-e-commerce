import React from 'react'

import svgImage from '../src/icon/flipkartplus.svg';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import svgorders from './icon/orders.svg'
import './LoginToolTip.css';

const LoginToolTip = () => {
  return (
    <div className='logintool'>
        <div className='logintool_in'>
            <h2 className='new_customer'>New Customer?</h2>
            <a href="https://www.flipkart.com/" className='sign_up'>Sign Up</a>
        </div>
        <hr />
        <div className='logintool_in'>
          <AccountCircleIcon />
          <a href="https://www.flipkart.com/account/login?ret=%2Faccount%2F%3Frd%3D0%26link%3Dhome_account" className='link_rel'>My Profile</a>
        </div>
        <hr />
        <div className='logintool_in'>
          <img src={svgImage} alt="logo" />
          <a href="https://www.flipkart.com/plus" className='link_rel'>Flipkart Plus Zone</a>
        </div>
        <hr />
        <div className='logintool_in'>
          <img src={svgorders} alt="" />
          <a href="https://www.flipkart.com/account/login?ret=%2Faccount%2Forders%3Flink%3Dhome_orders" className='link_rel'>Orders</a>
        </div>
        <hr />
        <div className='logintool_in'>
          <FavoriteIcon />
          <a href="https://www.flipkart.com/account/login?ret=%2Fwishlist%3Flink%3Dhome_wishlist" className='link_rel'>Wishlist</a>
        </div>
        <hr />
        <div className='logintool_in'>
          <ConfirmationNumberIcon />
          <a href="https://www.flipkart.com/account/login?ret=%2Faccount%2Frewards%3Flink%3Dhome_rewards" className='link_rel'>Rewards</a>
        </div>
        <hr />
        <div className='logintool_in'>
          <AccountBalanceWalletIcon />
          <a href="https://www.flipkart.com/the-gift-card-store?link=home_giftcard" className='link_rel'>Gift Rewards</a>
        </div>
    </div>
  )
}

export default LoginToolTip;