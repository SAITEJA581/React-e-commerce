import React from 'react';
import logo1 from './Images/flipkart name.png';
import logo2 from './Images/explore plus.png';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';
import './Header.css';
import MoreToolTip from './MoreToolTip';
import LoginToolTip from './LoginToolTip';


const Header = () => {

  return (
    <div className='header'>
        <div className='first_header'>
            <img src={logo1} alt='flipkart logo' />
            <div className='first1_header'>
                <span className='explore'>Explore</span>
                <span className='plus'>Plus</span>
                <span><img width={10} src={logo2} alt='logo2'/></span>
            </div>
        </div>
        <div className='second_header'>
            <input type='text' placeholder='Search for products' />
            <SearchIcon className='search_icon' />
        </div>
        <div className='third_header'>
            <Tippy content={<LoginToolTip></LoginToolTip>} theme='light' interactive={true}>
                <button>Login</button>
            </Tippy>
        </div>
        <div className='fourth_header'>
            <a className='link_sell' href='https://seller.flipkart.com/sell-online/?utm_source=fkwebsite&utm_medium=websitedirect'>
                <p>Become a Seller</p>
            </a>
        </div>
        <div className='fifth_header'>
            <Tippy content={<MoreToolTip></MoreToolTip>} theme='light' interactive={true} offset={[0,17]}>
            <span>More</span>
            </Tippy>
            <ExpandMoreIcon className='expand_icon' />
        </div>
        <div className='sixth_header'>
            <ShoppingCartIcon className='cart_icon' />
            <a className='link_sell' href='https://www.flipkart.com/viewcart?exploreMode=true&preference=FLIPKART'>
                <p>Cart</p>
            </a>
        </div>
    </div>    
  )
}

export default Header;