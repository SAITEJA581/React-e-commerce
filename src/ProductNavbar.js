import React, {useState, useEffect} from 'react'

import logo_gro from './Images/Grocery1.webp';
import logo_mobiles from './Images/Mobile2.webp';
import logo_fash from './Images/Fashion3.webp';
import logo_elec from './Images/Electronics4.webp';
import logo_home from './Images/Home5.webp';
import logo_app from './Images/Appliance6.webp';
import logo_flight from './Images/Travel7.webp';
import logo_top from './Images/Topoffer8.webp';
import logo_beauty from './Images/Toy9.webp';
import logo_bike from './Images/Bike10.webp';


import logo1 from './Images/imgsliderfit1.webp';
import logo2 from './Images/imgsliderfit2.webp';
import logo3 from './Images/imgsliderfit3.webp';
import logo4 from './Images/imgsliderfit4.webp';
import logo5 from './Images/imgsliderfit5.webp';
import logo6 from './Images/imgsliderfit6.webp';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Tippy from '@tippyjs/react';
import Fashion from './Fashion';
import ExpandMoreIcon  from '@mui/icons-material/ExpandMore';
import 'tippy.js/themes/light.css';
import ElecTippy from './ElecTippy';


const ProductNavbar = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const images = [ logo1, logo2, logo3, logo4, logo5, logo6];

   const links = [
                 'https://www.flipkart.com/travel/flights?param=Travel_HPW8-SpiceJet-1499&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiSUFEIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fX19fQ%3D%3D&nnc=134Z6JKS5WMK_IAD&pageUID=1686750776898',
                 'https://www.flipkart.com/furniture/chairs/office-study-chairs/pr?sid=wwe%2Cy7b%2Cfoc&p%5B%5D=facets.price_range.from%3D2400&p%5B%5D=facets.price_range.to%3DMax&otracker=hp_bannerads_5_2.bannerAdCard.BANNERADS_Office%2BChairs_93MKRKIO7CY5',
                 'https://www.flipkart.com/6bo/b5g/~cs-yr1vxer28o/pr?sid=6bo%2Cb5g&collection-tab-name=Intel+Laptops&otracker=hp_bannerads_6_2.bannerAdCard.BANNERADS_intel_O74913WO3XNZ',
                 'https://www.flipkart.com/6bo/~cs-l58eqt2k7a/pr?sid=6bo&collection-tab-name=Zebronics&sort=recency_desc&param=1234&otracker=hp_bannerads_1_2.bannerAdCard.BANNERADS_App_D53WOBW49V84',
                 'https://www.flipkart.com/nothing-phone2-coming-soon-34hg-store?param=3678&otracker=hp_bannerads_2_2.bannerAdCard.BANNERADS_Cat_Mob_HPW_Nothing%2BPhone%2B2-KV_LRQKHTQXGECI',
                 'https://www.flipkart.com/travel/flights?param=Travel_FKHP_DT-HPW_NeverBefore1499&otracker=hp_bannerads_3_2.bannerAdCard.BANNERADS_s_XP0NW8AK6HNR' 
                ];



useEffect (() => {
    const interval = setInterval (() => {
        handleNext();
    }, 5000);
    return () => clearInterval(interval);
});

const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length -1 ? 0  : prevIndex + 1));
};

const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length -1 : prevIndex - 1));
};


  return (
    <>
    <div className='topproduct_container'>
    <div className='topproduct_navbar'>
        <div className='topproduct_items'>
        <div className='topproduct_nav'>
            <a href="https://www.flipkart.com/grocery-supermart-store?marketplace=GROCERY&fm=neo%2Fmerchandising&iid=M_ced6344d-6e97-4f54-bf41-dc30c48a0e57_1_372UD5BXDFYS_MC.CBUR1Q46W5F1&otracker=hp_rich_navigation_1_1.navigationCard.RICH_NAVIGATION_Grocery_CBUR1Q46W5F1&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_1_L0_view-all&cid=CBUR1Q46W5F1" className='product_link'>
                <div className='img_container'>
                    <div className='img_product'>
                        <img className='product_logo' src={logo_gro} alt="" />
                    </div>
                </div>
                <div className='products_name'>Grocery</div>
            </a>
        </div>
        <div className='topproduct_nav'>
            <a href="https://www.flipkart.com/mobile-phones-store?fm=neo%2Fmerchandising&iid=M_c92fd5cd-c3d2-4dd3-88a5-60dd743fa4e7_1_372UD5BXDFYS_MC.ZRQ4DKH28K8J&otracker=hp_rich_navigation_2_1.navigationCard.RICH_NAVIGATION_Mobiles_ZRQ4DKH28K8J&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_2_L0_view-all&cid=ZRQ4DKH28K8J" className='product_link'>
                <div className='img_container'>
                    <div className='img_product'>
                        <img className='product_logo' src= {logo_mobiles} alt='' />
                    </div>
                </div>
                <div className='products_name'>Mobiles</div>
            </a>
        </div>
        <div className='topproduct_nav'>
                <div className='img_container'>
                    <div className='img_product'>
                        <img className='product_logo' src={logo_fash} alt= '' />
                    </div>
                </div>
                <div className='products_name'>
                    <Tippy content = {<Fashion />} interactive = {true} offset={[0,8]} placement='bottom' >
                        <span>Fashion</span>
                    </Tippy>
                    <ExpandMoreIcon className='expand_icons' />
                </div>
        </div>
        <div className='topproduct_nav'>
                <div className='img_container'>
                    <div className='img_product'>
                        <img className='product_logo' src={logo_elec} alt="" />
                    </div>
                </div>
                <div className='products_name'>
                    <Tippy content = {<ElecTippy></ElecTippy>} interactive = {true} offset={[0,8]} placement='bottom'>
                        <span>Electronics</span>
                    </Tippy>
                    <ExpandMoreIcon className='expand_icons' />
                </div>
        </div>
        <div className='topproduct_nav'>
            <a href='https://www.flipkart.com/home-furnishing/pr?sid=jra&marketplace=FLIPKART&otracker=nmenu_sub_Home%20%26%20Furniture_0_Furnishing&fm=neo%2Fmerchandising&iid=M_ee57054b-9d95-4984-aeb5-0dd944b836b1_1_372UD5BXDFYS_MC.A8O1FN5LHOZ5&otracker=hp_rich_navigation_1_1.navigationCard.RICH_NAVIGATION_Home%2B%2526%2BFurniture~Home%2BFurnishings~All_A8O1FN5LHOZ5&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_1_L2_view-all&cid=A8O1FN5LHOZ5' className='product_link'>
                <div className='img_container'>
                    <div className='img_product'>
                        <img className='product_logo' src={logo_home} alt="" />
                    </div>
                </div>
                <div className='products_name'>Home & Furniture</div>
            </a>
        </div>
        <div className='topproduct_nav'>
            <a href='https://www.flipkart.com/tvs-and-appliances-new-clp-store?fm=neo%2Fmerchandising&iid=M_841d2439-37e7-4271-a759-6ad6e065201f_1_372UD5BXDFYS_MC.LO4IWVHA61BX&otracker=hp_rich_navigation_6_1.navigationCard.RICH_NAVIGATION_Appliances_LO4IWVHA61BX&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_6_L0_view-all&cid=LO4IWVHA61BX' className='product_link'>
                <div className='img_container'>
                    <div className='img_product'>
                        <img className='product_logo' src={logo_app} alt="" />
                    </div>
                </div>
                <div className='products_name'>Appliances</div>
            </a>
        </div>
        <div className='topproduct_nav'>
            <a href='https://www.flipkart.com/travel/flights?param=DTNavIcon&fm=neo%2Fmerchandising&iid=M_af10a955-055b-4bad-8ce8-8a72166ca5d5_1_372UD5BXDFYS_MC.V4ZPKTOAO321&otracker=hp_rich_navigation_7_1.navigationCard.RICH_NAVIGATION_Travel_V4ZPKTOAO321&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_7_L0_view-all&cid=V4ZPKTOAO321' className='product_link'>
                <div className='img_container'>
                    <div className='img_product'>
                        <img className='product_logo' src={logo_flight} alt="" />
                    </div>
                </div>
                <div className='products_name'>Travel</div>
            </a>
        </div>
        <div className='topproduct_nav'>
            <a href='https://www.flipkart.com/offers-list/content?screen=dynamic&pk=themeViews%3DDOTD%3Aviewalldesktop~widgetType%3DdealCard~contentType%3Dneo&wid=2.dealCard.OMU&fm=neo%2Fmerchandising&iid=M_7135f6ef-0ad4-4867-8ca2-1d6046d14ed0_1_372UD5BXDFYS_MC.G6ZC4RAJ9OHU&otracker=hp_rich_navigation_8_1.navigationCard.RICH_NAVIGATION_Top%2BOffers_G6ZC4RAJ9OHU&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_8_L0_view-all&cid=G6ZC4RAJ9OHU' className='product_link'>
                <div className='img_container'>
                    <div className='img_product'>
                        <img className='product_logo' src={logo_top} alt="" />
                    </div>
                </div>
                <div className='product_name'>Top Offers</div>
            </a>
        </div>
        <div className='topproduct_nav'>
            <a href='https://www.flipkart.com/beauty-and-grooming/pr?sid=g9b&otracker=categorytree&p%5B%5D=facets.fulfilled_by%255B%255D%3DFlipkart%2BAssured&fm=neo%2Fmerchandising&iid=M_6bed8290-e659-4097-b298-baf348fb3617_1_372UD5BXDFYS_MC.NJKL2WGZ9KLB&otracker=hp_rich_navigation_1_1.navigationCard.RICH_NAVIGATION_Beauty%252C%2BToys%2B%2526%2BMore~Beauty%2B%2526%2BPersonal%2BCare~View%2BAll_NJKL2WGZ9KLB&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_1_L2_view-all&cid=NJKL2WGZ9KLB' className='product_link'>
                <div className='img_container'>
                    <div className='img_product'>
                        <img className='product_logo' src={logo_beauty} alt="" />
                    </div>
                </div>
                <div className='product_name'>Beauty, Toys & More</div>
            </a>
        </div>
        <div className='topproduct_nav'>
            <a href='https://www.flipkart.com/two-wheelers-store?fm=neo%2Fmerchandising&iid=M_43ab6bcc-08be-467d-b2c5-45c5667e805e_1_372UD5BXDFYS_MC.SCJPZ04TFJJM&otracker=hp_rich_navigation_1_1.navigationCard.RICH_NAVIGATION_Two%2BWheelers~Petrol%2BVehicles_SCJPZ04TFJJM&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_1_L1_view-all&cid=SCJPZ04TFJJM' className='product_link'>
                <div className='img_container'>
                    <div className='img_product'>
                        <img className='product_logo' src={logo_bike} alt="" />
                    </div>
                </div>
                <div className='products_name'>Two Wheelers</div>
            </a>
        </div>
    </div>
    </div>
    </div>
    <div className='top_slider'>
            <div className='slider'>
                <div className='slider_container'>

                <div className='link_slider'>
                    <a className='link' href={links[currentIndex]} >
                        <img className='img_move' src={images[currentIndex]} alt='' />
                    </a>
                </div>
                </div> 
             </div> 
             </div> 
            <div className='btn_container btn_left'>
                <button className='btn' onClick={handlePrevious}><ArrowBackIosIcon /></button>
            </div>

            <div className='btn_container btn_right'>
                <button className='btn' onClick={handleNext}><ArrowForwardIosIcon /></button>
            </div>
    </>
  )
}

export default ProductNavbar;