import React, { useState } from 'react';
import './Fashion.css';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const Fashion = () => {

const [displayItem, setDisplayItem] = useState(null);

const handleHover = (item) => {
    setDisplayItem(item);
};

  return (
  <div className='fashion_containers'>
    <div className='fashion_details'>
        <div className='left_right'>
            <div className='fashion left_side'>
                <div className= {
                    `fashion_item ${displayItem === 'men-top' ? 'active' : ''}`}
                     onMouseEnter={() => handleHover('men-top')} >
                    <a className='fashion_link' href='https://www.flipkart.com/clothing-and-accessories/topwear/pr?sid=clo,ash&p[]=facets.ideal_for%255B%255D%3DMen&p[]=facets.ideal_for%255B%255D%3Dmen&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_edc21f6e-7cd5-4edd-bfd3-5164ecd84f98_1_372UD5BXDFYS_MC.6XNZG1FYFBZT&otracker=hp_rich_navigation_1_1.navigationCard.RICH_NAVIGATION_Fashion~Men%2527s%2BTop%2BWear_6XNZG1FYFBZT&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_1_L1_view-all&cid=6XNZG1FYFBZT'>Men's Top Wear
                        <ArrowForwardIosIcon className='fas-icon' />
                    </a>
                </div>
                <div className= {
                    `fashion_item ${displayItem === 'men-bottom' ? 'active' : ''}`}
                     onMouseEnter={() => handleHover('men-bottom')} >
                    <a className='fashion_link' href='https://www.flipkart.com/clothing-and-accessories/bottomwear/pr?sid=clo,vua&p[]=facets.ideal_for%255B%255D%3DMen&p[]=facets.ideal_for%255B%255D%3Dmen&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_2ed52a97-697f-4f60-8c51-6137b375b60f_1_372UD5BXDFYS_MC.8HARX8UX7IX5&otracker=hp_rich_navigation_2_1.navigationCard.RICH_NAVIGATION_Fashion~Men%2527s%2BBottom%2BWear_8HARX8UX7IX5&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_2_L1_view-all&cid=8HARX8UX7IX5'>Men's Bottom Wear
                        <ArrowForwardIosIcon className='fas-icon' />
                    </a>
                </div>
                <div className= {
                    `fashion_item ${displayItem === 'women' ? 'active' : ''}`}
                     onMouseEnter={() => handleHover('women')} >
                    <a className='fashion_link' href='https://www.flipkart.com/clothing-and-accessories/~cs-aerg0b0afc/pr?sid=clo&collection-tab-name=KK%2CSets%2CDM%2CSarees&fm=neo%2Fmerchandising&iid=M_e76370b5-46c6-4efc-99b1-2a307e10b766_1_372UD5BXDFYS_MC.HQXTE43PO8HC&otracker=hp_rich_navigation_3_1.navigationCard.RICH_NAVIGATION_Fashion~Women%2BEthnic_HQXTE43PO8HC&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_3_L1_view-all&cid=HQXTE43PO8HC'>Women Ethnic
                        <ArrowForwardIosIcon className='fas-icon' />
                     </a>
                </div>
                <div className= {
                    `fashion_item ${displayItem === 'women-western' ? 'active' : ''}`}
                     onMouseEnter={() => handleHover('women-western')} >
                    <a className='fashion_link' href='https://www.flipkart.com/clothing-and-accessories/~cs-ahd69o77qf/pr?sid=clo&collection-tab-name=Western%20Wear&fm=neo%2Fmerchandising&iid=M_8e508c24-d65c-4f16-adf5-f00f24cea26f_1_372UD5BXDFYS_MC.K4M2S29QJWT9&otracker=hp_rich_navigation_4_1.navigationCard.RICH_NAVIGATION_Fashion~Women%2BWestern_K4M2S29QJWT9&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_4_L1_view-all&cid=K4M2S29QJWT9'>Women western
                        <ArrowForwardIosIcon className='fas-icon' />
                    </a>
                </div>
                <div className= {
                    `fashion_item ${displayItem === 'men-footwear' ? 'active' : ''}`}
                     onMouseEnter={() => handleHover('men-footwear')} >
                    <a className='fashion_link' href='https://www.flipkart.com/mens-footwear/pr?sid=osp,cil&otracker=nmenu_sub_Men_0_Footwear&fm=neo%2Fmerchandising&iid=M_d1fdb7a1-09be-4601-a5d3-eeb6e8deea0c_1_372UD5BXDFYS_MC.PR9Y9GHWCY6G&otracker=hp_rich_navigation_5_1.navigationCard.RICH_NAVIGATION_Fashion~Men%2BFootwear_PR9Y9GHWCY6G&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_5_L1_view-all&cid=PR9Y9GHWCY6G'>Men Footwear
                        <ArrowForwardIosIcon className='fas-icon' />
                    </a>
                </div>
                <div className= {
                    `fashion_item ${displayItem === 'women-footwear' ? 'active' : ''}`}
                     onMouseEnter={() => handleHover('women-footwear')} >
                    <a className='fashion_link' href='https://www.flipkart.com/womens-footwear/pr?sid=osp,iko&fm=neo%2Fmerchandising&iid=M_a2fa2013-da86-41f3-a76d-8eeac7ca47e1_1_372UD5BXDFYS_MC.DN868DQ1FHU3&otracker=hp_rich_navigation_6_1.navigationCard.RICH_NAVIGATION_Fashion~Women%2BFootwear_DN868DQ1FHU3&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_6_L1_view-all&cid=DN868DQ1FHU3'>Women Footwear
                        <ArrowForwardIosIcon className='fas-icon' />
                    </a>
                </div>
                <div className= {
                    `fashion_item ${displayItem === 'watch' ? 'active' : ''}`}
                     onMouseEnter={() => handleHover('watch')} >
                    <a className='fashion_link' href='https://www.flipkart.com/watches/wrist-watches/pr?sid=r18,f13&p[]=facets.ideal_for%255B%255D%3DCouple&p[]=facets.ideal_for%255B%255D%3DWomen&p[]=facets.ideal_for%255B%255D%3DMen%2B%2526%2BWomen&p[]=facets.ideal_for%255B%255D%3DMen&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_736ae19f-b990-43e0-ae59-7b23ab2a04c9_1_372UD5BXDFYS_MC.CI9JK83AKS5H&otracker=hp_rich_navigation_7_1.navigationCard.RICH_NAVIGATION_Fashion~Watches%2Band%2BAccessories_CI9JK83AKS5H&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_7_L1_view-all&cid=CI9JK83AKS5H'>Watches and Accessories
                        <ArrowForwardIosIcon className='fas-icon' />
                    </a>
                </div>
                <div className= {
                    `fashion_item ${displayItem === 'bags' ? 'active' : ''}`}
                     onMouseEnter={() => handleHover('bags')} >
                    <a className='fashion_link' href='https://www.flipkart.com/all/~cs-xt03i9k5xc/pr?sid=all&collection-tab-name=Bags+and+Luggage&fm=neo%2Fmerchandising&iid=M_f709b39c-588b-4ff6-914f-f69bfa5b900c_1_372UD5BXDFYS_MC.X8KIDQHRP5Q0&otracker=hp_rich_navigation_8_1.navigationCard.RICH_NAVIGATION_Fashion~Bags%252C%2BSuitcases%2B%2526%2BLuggage_X8KIDQHRP5Q0&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_8_L1_view-all&cid=X8KIDQHRP5Q0'>Bags, Suitcases & Luggage
                        <ArrowForwardIosIcon className='fas-icon' />
                    </a>
                </div>
                <div className= {
                   `fashion_item ${displayItem === 'kids' ? 'active' : ''}`}
                     onMouseEnter={() => handleHover('kids')} >
                    <a className='fashion_link' href='https://www.flipkart.com/clothing-and-accessories/pr?sid=clo&otracker=categorytree&p%5B%5D=facets.ideal_for%255B%255D%3DGirls&p%5B%5D=facets.ideal_for%255B%255D%3DBoys&p%5B%5D=facets.ideal_for%255B%255D%3DBoys%2B%2526%2BGirls&p%5B%5D=facets.ideal_for%255B%255D%3DBaby%2BBoys%2B%2526%2BBaby%2BGirls&p%5B%5D=facets.ideal_for%255B%255D%3DBaby%2BBoys&p%5B%5D=facets.ideal_for%255B%255D%3DBaby%2BGirls&otracker=nmenu_sub_Baby%20%26%20Kids_0_Kids%27%20Clothing&fm=neo%2Fmerchandising&iid=M_63b7eec7-0f93-4483-b3fb-590fc5e3b97c_1_372UD5BXDFYS_MC.0QYFBACHTZGW&otracker=hp_rich_navigation_9_1.navigationCard.RICH_NAVIGATION_Fashion~Kids_0QYFBACHTZGW&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_9_L1_view-all&cid=0QYFBACHTZGW'>Kids
                        <ArrowForwardIosIcon className='fas-icon' />
                    </a>
                </div>
                <div className= {
                    `fashion_item ${displayItem === 'winter' ? 'active' : ''}`}
                     onMouseEnter={() => handleHover('winter')} >
                    <a className='fashion_link' href='https://www.flipkart.com/fashion-trendy-store?fm=neo%2Fmerchandising&iid=M_ba299fd7-fbff-4403-ac0e-8126224b7949_1_372UD5BXDFYS_MC.BUW2OH9BTFCI&otracker=hp_rich_navigation_11_1.navigationCard.RICH_NAVIGATION_Fashion~Winter_BUW2OH9BTFCI&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_11_L1_view-all&cid=BUW2OH9BTFCI'>Winter
                        <ArrowForwardIosIcon className='fas-icon' />
                    </a>
                </div>
            </div>
            <div className='fashion_rightside'>
                {displayItem === 'men-top' && (
                <>
                <span className='left_names'>MORE IN MEN'S TOP WEAR</span>
                <a className='fashion_rightlink' href='https://www.flipkart.com/clothing-and-accessories/topwear/pr?sid=clo,ash&p[]=facets.ideal_for%255B%255D%3DMen&p[]=facets.ideal_for%255B%255D%3Dmen&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_6e5d19df-0bfc-41bf-8673-278836e264e9_1_372UD5BXDFYS_MC.AHHHWF67UPNB&otracker=hp_rich_navigation_1_1.navigationCard.RICH_NAVIGATION_Fashion~Men%2527s%2BTop%2BWear~All_AHHHWF67UPNB&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_1_L2_view-all&cid=AHHHWF67UPNB'>All
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/mens-tshirts/pr?sid=clo,ash,ank,edy&fm=neo%2Fmerchandising&iid=M_cb1de22a-5e1b-44e8-a6a9-effbb993790f_1_372UD5BXDFYS_MC.IF56C41VGEYS&otracker=hp_rich_navigation_2_1.navigationCard.RICH_NAVIGATION_Fashion~Men%2527s%2BTop%2BWear~Men%2527s%2BT-Shirts_IF56C41VGEYS&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_2_L2_view-all&cid=IF56C41VGEYS'>Men's T-shirts
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/mens-casual-shirts/pr?sid=clo,ash,axc,mmk,kp7&fm=neo%2Fmerchandising&iid=M_ef13cb3a-f1df-4139-98fa-9a8d93e31e68_1_372UD5BXDFYS_MC.S4ITKV5A4VL6&otracker=hp_rich_navigation_3_1.navigationCard.RICH_NAVIGATION_Fashion~Men%2527s%2BTop%2BWear~Men%2527s%2BCasual%2BShirts_S4ITKV5A4VL6&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_3_L2_view-all&cid=S4ITKV5A4VL6'>Men's Casual Shirts
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/mens-formal-shirts/pr?sid=clo,ash,axc,mmk,bk1&fm=neo%2Fmerchandising&iid=M_b2f36238-6737-40e2-ad73-75c273970691_1_372UD5BXDFYS_MC.V795R35ST9K6&otracker=hp_rich_navigation_4_1.navigationCard.RICH_NAVIGATION_Fashion~Men%2527s%2BTop%2BWear~Men%2527s%2BFormal%2BShirts_V795R35ST9K6&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_4_L2_view-all&cid=V795R35ST9K6'>Men's Formal Shirts
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/clothing-and-accessories/kurtas-ethnic-sets-and-bottoms/kurtas/mens-kurtas/pr?sid=clo,cfv,cib,jks&fm=neo%2Fmerchandising&iid=M_e70de488-a82f-4378-a268-6980009ee3d9_1_372UD5BXDFYS_MC.2K34NMKQ2F8P&otracker=hp_rich_navigation_5_1.navigationCard.RICH_NAVIGATION_Fashion~Men%2527s%2BTop%2BWear~Men%2527s%2BKurtas_2K34NMKQ2F8P&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_5_L2_view-all&cid=2K34NMKQ2F8P'>Men's Kurtas
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/mens-ethnic-sets/pr?sid=clo,cfv,itg,pme&fm=neo%2Fmerchandising&iid=M_9ca4f444-c253-45a6-9fea-fc2d27c851b7_1_372UD5BXDFYS_MC.8V5QSI5GE4QH&otracker=hp_rich_navigation_6_1.navigationCard.RICH_NAVIGATION_Fashion~Men%2527s%2BTop%2BWear~Men%2527s%2BEthnic%2BSets_8V5QSI5GE4QH&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_6_L2_view-all&cid=8V5QSI5GE4QH'>Men's Etnic Sets
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/blazers/pr?sid=clo,upk,fj9,qd3&fm=neo%2Fmerchandising&iid=M_f934804d-16bc-4fbd-b75c-802fb5b89287_1_372UD5BXDFYS_MC.LGFIYK1098US&otracker=hp_rich_navigation_7_1.navigationCard.RICH_NAVIGATION_Fashion~Men%2527s%2BTop%2BWear~Men%2527s%2BBlazers_LGFIYK1098US&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_7_L2_view-all&cid=LGFIYK1098US'>Men's Blazers
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/clothing-and-accessories/raincoats/men-and-women-raincoats/pr?sid=clo,mz5,jbj&fm=neo%2Fmerchandising&iid=M_c5e45553-f9e3-40c3-ba85-25a059dfbbb4_1_372UD5BXDFYS_MC.3KGKYVOW2XM8&otracker=hp_rich_navigation_8_1.navigationCard.RICH_NAVIGATION_Fashion~Men%2527s%2BTop%2BWear~Men%2527s%2BRaincoat_3KGKYVOW2XM8&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_8_L2_view-all&cid=3KGKYVOW2XM8'>Men's Raincoat
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/clothing-and-accessories/windcheaters/mens-windcheaters/pr?sid=clo,8j5,ly8&fm=neo%2Fmerchandising&iid=M_d3d24e32-634e-4230-8b7f-90cbc01a0f7b_1_372UD5BXDFYS_MC.VHTSVNAICILF&otracker=hp_rich_navigation_9_1.navigationCard.RICH_NAVIGATION_Fashion~Men%2527s%2BTop%2BWear~Men%2527s%2BWindcheaters_VHTSVNAICILF&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_9_L2_view-all&cid=VHTSVNAICILF'>Men's Windcheaters
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/clothing-and-accessories/blazers-waistcoats-and-suits/suits/mens-readymade-suits/pr?sid=clo,upk,sxw,doc&fm=neo%2Fmerchandising&iid=M_31012eaa-5bd3-4da9-9d8f-381420edca84_1_372UD5BXDFYS_MC.CMNRF7555NU5&otracker=hp_rich_navigation_10_1.navigationCard.RICH_NAVIGATION_Fashion~Men%2527s%2BTop%2BWear~Men%2527s%2BSuit_CMNRF7555NU5&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_10_L2_view-all&cid=CMNRF7555NU5'>Men's Suit
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/clothing-and-accessories/fabrics/shirt-and-trouser-fabrics/pr?sid=clo,qfi,alw&p[]=facets.ideal_for%255B%255D%3DMen&p[]=facets.ideal_for%255B%255D%3DMen&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_68bfcfb7-d99f-4218-9d58-916614e020a1_1_372UD5BXDFYS_MC.889FIIVHW6BP&otracker=hp_rich_navigation_11_1.navigationCard.RICH_NAVIGATION_Fashion~Men%2527s%2BTop%2BWear~Men%2527s%2BFabrics_889FIIVHW6BP&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_11_L2_view-all&cid=889FIIVHW6BP'>Men's Fabrics
                </a>
                </>
                )}
                {displayItem === 'men-bottom' && (
                <>
                <span className='left_names'>MORE IN MEN'S BOTTOM WEAR</span>
                <a className='fashion_rightlink' href='https://www.flipkart.com/clothing-and-accessories/bottomwear/pr?sid=clo,vua&p[]=facets.ideal_for%255B%255D%3DMen&p[]=facets.ideal_for%255B%255D%3Dmen&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_7e4a0488-9d5f-4ae3-9198-04b3dc3d36ca_1_372UD5BXDFYS_MC.AX3QICES0ARQ&otracker=hp_rich_navigation_1_1.navigationCard.RICH_NAVIGATION_Fashion~Men%2527s%2BBottom%2BWear~All_AX3QICES0ARQ&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_1_L2_view-all&cid=AX3QICES0ARQ'>All
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/mens-jeans/pr?sid=clo,vua,k58,i51&fm=neo%2Fmerchandising&iid=M_8a0f2962-f2b9-4aca-8fa2-974f3351fd44_1_372UD5BXDFYS_MC.AWKDIFDJVHWO&otracker=hp_rich_navigation_2_1.navigationCard.RICH_NAVIGATION_Fashion~Men%2527s%2BBottom%2BWear~Men%2527s%2BJeans_AWKDIFDJVHWO&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_2_L2_view-all&cid=AWKDIFDJVHWO'>Men's Jeans
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/mens-trousers/pr?sid=clo,vua,mle,lhk&fm=neo%2Fmerchandising&iid=M_19c9e53f-0b88-406e-9901-d5a8e1090395_1_372UD5BXDFYS_MC.8YCIPON6GIXZ&otracker=hp_rich_navigation_3_1.navigationCard.RICH_NAVIGATION_Fashion~Men%2527s%2BBottom%2BWear~Men%2527s%2BTrousers_8YCIPON6GIXZ&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_3_L2_view-all&cid=8YCIPON6GIXZ'>Men's Trousers
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/mens-track-pants/pr?sid=clo,vua,jlk,6ql&fm=neo%2Fmerchandising&iid=M_24f9c123-3210-4e92-b28d-956ccb00f207_1_372UD5BXDFYS_MC.UGWKX2XK8IBE&otracker=hp_rich_navigation_4_1.navigationCard.RICH_NAVIGATION_Fashion~Men%2527s%2BBottom%2BWear~Men%2527s%2BTrackpants_UGWKX2XK8IBE&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_4_L2_view-all&cid=UGWKX2XK8IBE'>Men's Trackpants
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/mens-shorts/pr?sid=clo,vua,e8g,kc7&fm=neo%2Fmerchandising&iid=M_e0d1c31f-d7a8-454b-8777-adf42b20646f_1_372UD5BXDFYS_MC.5ID80LFLDBHG&otracker=hp_rich_navigation_5_1.navigationCard.RICH_NAVIGATION_Fashion~Men%2527s%2BBottom%2BWear~Men%2527s%2BShorts_5ID80LFLDBHG&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_5_L2_view-all&cid=5ID80LFLDBHG'>Men's Shorts
                </a>
                <a className='fashion_rightlink'href='https://www.flipkart.com/clothing-and-accessories/bottomwear/cargos/mens-cargos/pr?sid=clo,vua,rqy,nli&fm=neo%2Fmerchandising&iid=M_da52ea4c-0f3b-42a8-a65c-1ee89bb4ddae_1_372UD5BXDFYS_MC.UPEHDCY4NPIL&otracker=hp_rich_navigation_6_1.navigationCard.RICH_NAVIGATION_Fashion~Men%2527s%2BBottom%2BWear~Men%2527s%2BCargos_UPEHDCY4NPIL&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_6_L2_view-all&cid=UPEHDCY4NPIL'>Men's Cargos
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/clothing-and-accessories/bottomwear/threefourths/mens-threefourths/pr?sid=clo,vua,eum,4qq&fm=neo%2Fmerchandising&iid=M_475d3c39-4d9c-4c7b-bd23-8e618a4793bc_1_372UD5BXDFYS_MC.0ZIF97SJWUSV&otracker=hp_rich_navigation_7_1.navigationCard.RICH_NAVIGATION_Fashion~Men%2527s%2BBottom%2BWear~Men%2527s%2BThreefourths_0ZIF97SJWUSV&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_7_L2_view-all&cid=0ZIF97SJWUSV'>Men's Threefourths
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/clothing-and-accessories/sleepwear/pyjamas-and-lounge-pants/mens-pyjamas-and-lounge-pants/pr?sid=clo,1hc,a7m,b4p&fm=neo%2Fmerchandising&iid=M_b7acd811-1561-41b5-ab51-edf74888b218_1_372UD5BXDFYS_MC.6RZOK8653ADP&otracker=hp_rich_navigation_8_1.navigationCard.RICH_NAVIGATION_Fashion~Men%2527s%2BBottom%2BWear~Men%2527s%2BPyjamas%2B%2526%2BLoungepants_6RZOK8653ADP&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_8_L2_view-all&cid=6RZOK8653ADP'>Men's Pyjamas & Loungepants
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/clothing-and-accessories/kurtas-ethnic-sets-and-bottoms/dhotis/pr?sid=clo,cfv,nnk&fm=neo%2Fmerchandising&iid=M_587ff43c-27a2-4972-8a19-2f51c22209a0_1_372UD5BXDFYS_MC.HNDPMMAE08W8&otracker=hp_rich_navigation_9_1.navigationCard.RICH_NAVIGATION_Fashion~Men%2527s%2BBottom%2BWear~Men%2527s%2BDhoti_HNDPMMAE08W8&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_9_L2_view-all&cid=HNDPMMAE08W8'>Men's Dhoti
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/clothing-and-accessories/kurtas-ethnic-sets-and-bottoms/ethnic-pyjamas/mens-ethnic-pyjamas/pr?sid=clo,cfv,e1p,5l2&fm=neo%2Fmerchandising&iid=M_76b8676e-7070-4942-aff7-e56df7855668_1_372UD5BXDFYS_MC.NV1KV5FTDQKK&otracker=hp_rich_navigation_10_1.navigationCard.RICH_NAVIGATION_Fashion~Men%2527s%2BBottom%2BWear~Men%2527s%2BEthnic%2BPyjama_NV1KV5FTDQKK&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_10_L2_view-all&cid=NV1KV5FTDQKK'>Men's Ethnic Pyjama
                </a>
                </>
                )}
                {displayItem === 'women' && (
                <>
                <span className='left_names'>MORE IN WOMEN ETHNIC</span>
                <a className='fashion_rightlink' href='https://www.flipkart.com/clothing-and-accessories/~cs-aerg0b0afc/pr?sid=clo&collection-tab-name=KK%2CSets%2CDM%2CSarees&fm=neo%2Fmerchandising&iid=M_657a58a7-b816-4193-aa09-d388aa577e87_1_372UD5BXDFYS_MC.1JDXQ3645XEK&otracker=hp_rich_navigation_1_1.navigationCard.RICH_NAVIGATION_Fashion~Women%2BEthnic~All_1JDXQ3645XEK&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_1_L2_view-all&cid=1JDXQ3645XEK'>All
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/sarees-store?fm=neo%2Fmerchandising&iid=M_177a8800-9d39-4138-9899-d1ebfaa71523_1_372UD5BXDFYS_MC.O6X4IDANANVI&otracker=hp_rich_navigation_2_1.navigationCard.RICH_NAVIGATION_Fashion~Women%2BEthnic~Women%2BSarees_O6X4IDANANVI&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_2_L2_view-all&cid=O6X4IDANANVI'>Women Sarees
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/clothing-and-accessories/ethnic-wear/kurtas/women-kurtas-and-kurtis/pr?sid=clo,cfv,cib,rkt&q=kurtas+kurtis&otracker=categorytree&otracker=nmenu_sub_Women_0_Kurtas%20%26%20Kurtis&fm=neo%2Fmerchandising&iid=M_59158e4c-89a5-4e80-b395-076e53885c51_1_372UD5BXDFYS_MC.0VYNO3UZWA0J&otracker=hp_rich_navigation_3_1.navigationCard.RICH_NAVIGATION_Fashion~Women%2BEthnic~Women%2BKurtas%2B%2526%2BKurtis_0VYNO3UZWA0J&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_3_L2_view-all&cid=0VYNO3UZWA0J'>Women Kurtas & Kurtis
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/womens-ethnic-sets/pr?sid=clo,cfv,itg,tys&fm=neo%2Fmerchandising&iid=M_7e84258a-feb9-4888-bb4c-559a9d33972b_1_372UD5BXDFYS_MC.C30ZN2DPGI1O&otracker=hp_rich_navigation_4_1.navigationCard.RICH_NAVIGATION_Fashion~Women%2BEthnic~Women%2BKurta%2BSets%2B%2526%2BSalwar%2BSuits_C30ZN2DPGI1O&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_4_L2_view-all&cid=C30ZN2DPGI1O'>Women Kurta Sets & Salwar Suits
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/womens-kurtas-kurtis/pr?sid=clo%2Ccfv%2Ccib%2Crkt&otracker%5B%5D=categorytree&otracker%5B%5D=nmenu_sub_Women_0_Kurtas+%26+Kurtis&p%5B%5D=facets.type%255B%255D%3DEthnic%2BDress&fm=neo%2Fmerchandising&iid=M_782a903e-0bb1-4560-a519-2e2dc340edfe_1_372UD5BXDFYS_MC.EZOMEYYV9QG3&otracker=hp_rich_navigation_5_1.navigationCard.RICH_NAVIGATION_Fashion~Women%2BEthnic~Ethnic%2BDresses_EZOMEYYV9QG3&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_5_L2_view-all&cid=EZOMEYYV9QG3'>Ethnic Dresses
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/dress-materials/pr?sid=clo,qfi,xcx,ms4&fm=neo%2Fmerchandising&iid=M_711ce74e-1a21-4381-b928-fc2675507fdc_1_372UD5BXDFYS_MC.AV7G3ATDMOJV&otracker=hp_rich_navigation_6_1.navigationCard.RICH_NAVIGATION_Fashion~Women%2BEthnic~Women%2BDress%2BMaterials_AV7G3ATDMOJV&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_6_L2_view-all&cid=AV7G3ATDMOJV'>Women Dress Materials
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/womens-gowns/pr?sid=clo,odx,od7,0xx&fm=neo%2Fmerchandising&iid=M_5831b164-86f0-4ec2-9a29-a88e890ab6bb_1_372UD5BXDFYS_MC.XQBTPB1P323S&otracker=hp_rich_navigation_7_1.navigationCard.RICH_NAVIGATION_Fashion~Women%2BEthnic~Women%2BGowns_XQBTPB1P323S&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_7_L2_view-all&cid=XQBTPB1P323S'>Women Gowns
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/womens-lehenga-cholis/pr?sid=clo,hlg,wrp&fm=neo%2Fmerchandising&iid=M_1d5acfcb-c4ee-41ac-88f3-899f9680f0af_1_372UD5BXDFYS_MC.PYW8FGDTQD8L&otracker=hp_rich_navigation_8_1.navigationCard.RICH_NAVIGATION_Fashion~Women%2BEthnic~Women%2BLehenga%2BCholis_PYW8FGDTQD8L&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_8_L2_view-all&cid=PYW8FGDTQD8L'>Women Lehanga & Cholis
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/all/~cs-h107ol6olz/pr?sid=all&collection-tab-name=Leggings+and+Patialas&fm=neo%2Fmerchandising&iid=M_1f523421-e78a-4dbf-bce6-66a79ed2ef1f_1_372UD5BXDFYS_MC.TDTRMO7V6Q68&otracker=hp_rich_navigation_9_1.navigationCard.RICH_NAVIGATION_Fashion~Women%2BEthnic~Women%2BLeggings%2B%2526%2BPatialas_TDTRMO7V6Q68&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_9_L2_view-all&cid=TDTRMO7V6Q68'>Women Leggings & Patialas
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/clothing-and-accessories/kurtas-ethnic-sets-and-bottoms/~cs-fv9vswhoey/pr?sid=clo%2Ccfv&collection-tab-name=Palazzo%20and%20Sharara&fm=neo%2Fmerchandising&iid=M_ee4ab458-69e3-4e59-b0f4-c4a13f9a51e3_1_372UD5BXDFYS_MC.9PBM8BJ0RX06&otracker=hp_rich_navigation_10_1.navigationCard.RICH_NAVIGATION_Fashion~Women%2BEthnic~Women%2BPalazzos%2B%2526%2BShararas_9PBM8BJ0RX06&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_10_L2_view-all&cid=9PBM8BJ0RX06'>Women Palazzos & Shararas
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/clothing-and-accessories/saree-and-accessories/blouse/women-blouse/pr?sid=clo%2C8on%2C5n9%2Chny&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_f8732898-d812-40e7-a776-23bc13bb03e6_1_372UD5BXDFYS_MC.KBVOPYNR0MX2&otracker=hp_rich_navigation_11_1.navigationCard.RICH_NAVIGATION_Fashion~Women%2BEthnic~Women%2BBlouse_KBVOPYNR0MX2&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_11_L2_view-all&cid=KBVOPYNR0MX2'>Women Blouse
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/womens-dupattas/pr?sid=clo,qd8,t6b,pjy&fm=neo%2Fmerchandising&iid=M_13afdf14-1093-4fca-8228-60bce1b7b80d_1_372UD5BXDFYS_MC.F91Z911S2GPH&otracker=hp_rich_navigation_12_1.navigationCard.RICH_NAVIGATION_Fashion~Women%2BEthnic~Women%2BDupatta_F91Z911S2GPH&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_12_L2_view-all&cid=F91Z911S2GPH'>Women Dupatta</a>
                </>
                )}
                {displayItem === 'women-western' && (
                <>
                <span className='left_names'>MORE IN WOMEN WESTERN</span>
                <a className='fashion_rightlink' href='https://www.flipkart.com/clothing-and-accessories/~cs-ahd69o77qf/pr?sid=clo&collection-tab-name=Western%20Wear&fm=neo%2Fmerchandising&iid=M_4dcc1dbe-1448-4ecb-b5bb-145b8e970c3c_1_372UD5BXDFYS_MC.YZI2WS8TL1IA&otracker=hp_rich_navigation_1_1.navigationCard.RICH_NAVIGATION_Fashion~Women%2BWestern~All_YZI2WS8TL1IA&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_1_L2_view-all&cid=YZI2WS8TL1IA'>All
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/womens-tops/pr?sid=clo,ash,ohw,36j&fm=neo%2Fmerchandising&iid=M_01e00fac-ce48-477f-ba3b-80c765e743b9_1_372UD5BXDFYS_MC.1KTYWEYQ9HU1&otracker=hp_rich_navigation_2_1.navigationCard.RICH_NAVIGATION_Fashion~Women%2BWestern~Women%2BTops_1KTYWEYQ9HU1&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_2_L2_view-all&cid=1KTYWEYQ9HU1'>Women Tops
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/womens-dresses/pr?sid=clo,odx,maj,jhy&fm=neo%2Fmerchandising&iid=M_1631b6bb-1c44-46bb-bc85-50b3e8fcdf56_1_372UD5BXDFYS_MC.4XBLC9R100Y6&otracker=hp_rich_navigation_3_1.navigationCard.RICH_NAVIGATION_Fashion~Women%2BWestern~Women%2BDresses_4XBLC9R100Y6&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_3_L2_view-all&cid=4XBLC9R100Y6'>Women Dresses
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/clothing-and-accessories/topwear/tshirts/womens-tshirts/pr?sid=clo,ash,ank,loi&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_b4955d5f-8ff3-4551-bf72-9f0c1ae97812_1_372UD5BXDFYS_MC.1KKBTKLG889W&otracker=hp_rich_navigation_4_1.navigationCard.RICH_NAVIGATION_Fashion~Women%2BWestern~Women%2BT-shirts%2B%2526%2BPolo%2BT-shirts_1KKBTKLG889W&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_4_L2_view-all&cid=1KKBTKLG889W'>Women T-shirts & Polo- T-shirts
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/womens-jeans/pr?sid=clo,vua,k58,4hp&fm=neo%2Fmerchandising&iid=M_eb5a208d-1838-41f6-8964-4ce7405ac46e_1_372UD5BXDFYS_MC.WGEMEC905KL0&otracker=hp_rich_navigation_5_1.navigationCard.RICH_NAVIGATION_Fashion~Women%2BWestern~Women%2BJeans_WGEMEC905KL0&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_5_L2_view-all&cid=WGEMEC905KL0'>Women Jeans
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/womens-night-suits/pr?sid=clo,1hc,5d2,cny&fm=neo%2Fmerchandising&iid=M_cc0abe40-9cf2-4a79-955c-b134c676be10_1_372UD5BXDFYS_MC.9J2BZUB8EHSG&otracker=hp_rich_navigation_7_1.navigationCard.RICH_NAVIGATION_Fashion~Women%2BWestern~Women%2BNightsuit_9J2BZUB8EHSG&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_7_L2_view-all&cid=9J2BZUB8EHSG'>Women Nightsuit
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/clothing-and-accessories/bottomwear/track-pants/womens-track-pants/pr?sid=clo,vua,jlk,hp8&fm=neo%2Fmerchandising&iid=M_77c3235c-c4df-4782-a2b2-161013278544_1_372UD5BXDFYS_MC.36CX8ZX9S4R7&otracker=hp_rich_navigation_8_1.navigationCard.RICH_NAVIGATION_Fashion~Women%2BWestern~Women%2BTrack%2BPants_36CX8ZX9S4R7&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_8_L2_view-all&cid=36CX8ZX9S4R7'>Women Track Pants
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/clothing-and-accessories/bottomwear/trousers/womens-trousers/pr?sid=clo,vua,mle,8ie&fm=neo%2Fmerchandising&iid=M_0a7f12fa-6dd9-4c13-9aae-d19a8a5554f9_1_372UD5BXDFYS_MC.TKNE1MKAH90O&otracker=hp_rich_navigation_9_1.navigationCard.RICH_NAVIGATION_Fashion~Women%2BWestern~Women%2BTrouser_TKNE1MKAH90O&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_9_L2_view-all&cid=TKNE1MKAH90O'>Women Trouser
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/womens-jumpsuits/pr?sid=clo,h4p,fpl,cl5&fm=neo%2Fmerchandising&iid=M_2c95374b-8a50-4943-b65c-9ac245e89f97_1_372UD5BXDFYS_MC.GFHVU7KC0H01&otracker=hp_rich_navigation_10_1.navigationCard.RICH_NAVIGATION_Fashion~Women%2BWestern~Women%2BJumpsuit_GFHVU7KC0H01&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_10_L2_view-all&cid=GFHVU7KC0H01'>Women Jumpsuit
                </a>
                </>
                )}
                {displayItem === 'men-footwear' && (
                <>
                <span className='left_names'>MORE IN MEN FOOTWEAR</span>
                <a className='fashion_rightlink' href='https://www.flipkart.com/mens-footwear/pr?sid=osp,cil&otracker=nmenu_sub_Men_0_Footwear&fm=neo%2Fmerchandising&iid=M_095ce1fe-8638-4804-9385-6da7d3d5fa89_1_372UD5BXDFYS_MC.2LSPLKSXM6EG&otracker=hp_rich_navigation_1_1.navigationCard.RICH_NAVIGATION_Fashion~Men%2BFootwear~All_2LSPLKSXM6EG&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_1_L2_view-all&cid=2LSPLKSXM6EG'>All
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/mens-footwear/sports-shoes/pr?sid=osp,cil,1cu&fm=neo%2Fmerchandising&iid=M_1f11067c-84ef-4840-89f4-11b41c69c535_1_372UD5BXDFYS_MC.7M0KJVL57137&otracker=hp_rich_navigation_2_1.navigationCard.RICH_NAVIGATION_Fashion~Men%2BFootwear~Men%2527s%2BSports%2BShoes_7M0KJVL57137&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_2_L2_view-all&cid=7M0KJVL57137'>Men's Sports Shoes
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/mens-footwear/casual-shoes/pr?sid=osp,cil,e1f&fm=neo%2Fmerchandising&iid=M_0e1023d6-4e93-41de-a974-7a8abfa53ce8_1_372UD5BXDFYS_MC.30OZVDNS8SCQ&otracker=hp_rich_navigation_3_1.navigationCard.RICH_NAVIGATION_Fashion~Men%2BFootwear~Men%2527s%2BCasual%2BShoes_30OZVDNS8SCQ&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_3_L2_view-all&cid=30OZVDNS8SCQ'>Men's Casual Shoes
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/mens-footwear/sandals-floaters/pr?sid=osp,cil,e83&fm=neo%2Fmerchandising&iid=M_8c9efa53-c62b-4562-bb15-dfb69adb0adf_1_372UD5BXDFYS_MC.ZVU5H91P4CA2&otracker=hp_rich_navigation_4_1.navigationCard.RICH_NAVIGATION_Fashion~Men%2BFootwear~Men%2527s%2BSandals%2B%2526%2BFloaters_ZVU5H91P4CA2&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_4_L2_view-all&cid=ZVU5H91P4CA2'>Men's Sandals & Floaters
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/mens-footwear/slippers-flip-flops/pr?sid=osp,cil,e1r&fm=neo%2Fmerchandising&iid=M_b6c1761a-2cc3-4b98-996d-55eddab5a7d2_1_372UD5BXDFYS_MC.UY0E6JGJEXUC&otracker=hp_rich_navigation_5_1.navigationCard.RICH_NAVIGATION_Fashion~Men%2BFootwear~Men%2527s%2BSlippers%2B%2526%2BFlip%2BFlops_UY0E6JGJEXUC&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_5_L2_view-all&cid=UY0E6JGJEXUC'>Men's Slippers & Flip Flops
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/mens-footwear/formal-shoes/pr?sid=osp,cil,ssb&fm=neo%2Fmerchandising&iid=M_97a5d137-2b68-43c3-92aa-6b2a2c4d9f64_1_372UD5BXDFYS_MC.B4VVNIFCXDI1&otracker=hp_rich_navigation_6_1.navigationCard.RICH_NAVIGATION_Fashion~Men%2BFootwear~Men%2527s%2BFormal%2BShoes_B4VVNIFCXDI1&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_6_L2_view-all&cid=B4VVNIFCXDI1'>Men's Formal Shoes
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/mens-footwear/ethnic-shoes/pr?sid=osp,cil,ssd&fm=neo%2Fmerchandising&iid=M_7845b491-a709-46ed-91a6-c2b600c1920c_1_372UD5BXDFYS_MC.IRZTLT64M5EN&otracker=hp_rich_navigation_7_1.navigationCard.RICH_NAVIGATION_Fashion~Men%2BFootwear~Men%2527s%2BEthnic%2BShoes_IRZTLT64M5EN&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_7_L2_view-all&cid=IRZTLT64M5EN'>Men's Ethnic Shoes
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/get-active-store?fm=neo%2Fmerchandising&iid=M_972c58a5-e486-4dfd-ada1-d82670cc19de_1_372UD5BXDFYS_MC.8JLIJKF8YIHI&otracker=hp_rich_navigation_8_1.navigationCard.RICH_NAVIGATION_Fashion~Men%2BFootwear~Active%2BFootwear_8JLIJKF8YIHI&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_8_L2_view-all&cid=8JLIJKF8YIHI'>Active Footwear
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/mens-footwear/~cs-ko0k7u2ux3/pr?sid=osp%2Ccil&collection-tab-name=Combo+Slippers&p%5B%5D=facets.price_range.from%3DMin&p%5B%5D=facets.price_range.to%3D499&p%5B%5D=facets.brand%255B%255D%3DPampy%2BAngel&p%5B%5D=facets.brand%255B%255D%3DPAMPY%2BANGEL&p%5B%5D=facets.brand%255B%255D%3DKapyansh&p%5B%5D=facets.brand%255B%255D%3DKAPYANSH&p%5B%5D=facets.brand%255B%255D%3DRefoam&p%5B%5D=facets.brand%255B%255D%3DBrauch&p%5B%5D=facets.brand%255B%255D%3DCHARAN&p%5B%5D=facets.brand%255B%255D%3D4STEP&p%5B%5D=facets.brand%255B%255D%3DShoe%2BMate&p%5B%5D=facets.brand%255B%255D%3DAppett&p%5B%5D=facets.brand%255B%255D%3DSAM-ERA&p%5B%5D=facets.brand%255B%255D%3DReforce&p%5B%5D=facets.brand%255B%255D%3DLiberty&p%5B%5D=facets.brand%255B%255D%3DKapani%2BFashion&p%5B%5D=facets.brand%255B%255D%3DEarton&p%5B%5D=facets.brand%255B%255D%3DBahamas&p%5B%5D=facets.brand%255B%255D%3DBAHAMAS&pageUID=1597073345171&fm=neo%2Fmerchandising&iid=M_c8b3a114-b12b-489b-86d7-dfb6bcbeeaa8_1_372UD5BXDFYS_MC.SWHCNI6UPQO7&otracker=hp_rich_navigation_9_1.navigationCard.RICH_NAVIGATION_Fashion~Men%2BFootwear~Combo%2BFootwear_SWHCNI6UPQO7&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_9_L2_view-all&cid=SWHCNI6UPQO7'>Combo Footwear
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/mens-footwear/shoe-care/pr?sid=osp,cil,ja7&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_8e2241d9-ce53-42bb-ab54-f4b197f62a1e_1_372UD5BXDFYS_MC.ARBW61OE2E22&otracker=hp_rich_navigation_10_1.navigationCard.RICH_NAVIGATION_Fashion~Men%2BFootwear~Shoe%2BCare_ARBW61OE2E22&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_10_L2_view-all&cid=ARBW61OE2E22'>Shoe Care
                </a>
                </>
                )}
                {displayItem ==='women-footwear' && (
                <>
                <span className='left_names'>MORE IN WOMEN FOOTWEAR</span>
                <a className='fashion_rightlink' href='https://www.flipkart.com/womens-footwear/pr?sid=osp,iko&fm=neo%2Fmerchandising&iid=M_ffb53ea0-9f8f-4add-8ff0-8e3cfb14c24e_1_372UD5BXDFYS_MC.UEQS5GUOMJDP&otracker=hp_rich_navigation_1_1.navigationCard.RICH_NAVIGATION_Fashion~Women%2BFootwear~All_UEQS5GUOMJDP&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_1_L2_view-all&cid=UEQS5GUOMJDP'>All
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/womens-footwear/flats/pr?sid=osp,iko,9d5&fm=neo%2Fmerchandising&iid=M_3fa0a80b-4d0d-4803-9f1a-e927b7b958eb_1_372UD5BXDFYS_MC.I20M5XEF12IK&otracker=hp_rich_navigation_2_1.navigationCard.RICH_NAVIGATION_Fashion~Women%2BFootwear~Women%2BFlats_I20M5XEF12IK&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_2_L2_view-all&cid=I20M5XEF12IK'>Women Flats
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/womens-footwear/heels/pr?sid=osp,iko,6q1&fm=neo%2Fmerchandising&iid=M_aa940053-5294-4182-8db6-e433820c6821_1_372UD5BXDFYS_MC.416MUHZDV29Y&otracker=hp_rich_navigation_3_1.navigationCard.RICH_NAVIGATION_Fashion~Women%2BFootwear~Women%2BHeels_416MUHZDV29Y&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_3_L2_view-all&cid=416MUHZDV29Y'>Women Heals
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/womens-footwear/wedges/pr?sid=osp,iko,jpm&fm=neo%2Fmerchandising&iid=M_f6e38b98-fb2f-46a9-bb35-f4285c28237a_1_372UD5BXDFYS_MC.2B98C7N9YM3N&otracker=hp_rich_navigation_4_1.navigationCard.RICH_NAVIGATION_Fashion~Women%2BFootwear~Women%2BWedges_2B98C7N9YM3N&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_4_L2_view-all&cid=2B98C7N9YM3N'>Women Wedges
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/womens-footwear/slippers-flip-flops/pr?sid=osp,iko,iz7&fm=neo%2Fmerchandising&iid=M_83a7f879-9e63-4da3-b2e9-adf31cdd7beb_1_372UD5BXDFYS_MC.6DZZP5R3P74E&otracker=hp_rich_navigation_5_1.navigationCard.RICH_NAVIGATION_Fashion~Women%2BFootwear~Women%2BSlipper%2BFlip%2BFlops_6DZZP5R3P74E&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_5_L2_view-all&cid=6DZZP5R3P74E'>Women Slipper Flip Flops
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/womens-footwear/casual-shoes/pr?sid=osp,iko,sx7&fm=neo%2Fmerchandising&iid=M_8c34e393-9ede-41d0-bc10-98c8208a21d0_1_372UD5BXDFYS_MC.A4XKXOT6D9D9&otracker=hp_rich_navigation_6_1.navigationCard.RICH_NAVIGATION_Fashion~Women%2BFootwear~Women%2BCasual%2BShoes_A4XKXOT6D9D9&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_6_L2_view-all&cid=A4XKXOT6D9D9'>Women Casual Shoes
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/womens-footwear/sports-shoes/pr?sid=osp,iko,d20&fm=neo%2Fmerchandising&iid=M_afa73afd-dce4-40a9-a282-fc788c0e17a3_1_372UD5BXDFYS_MC.TCYGDE7YX2GZ&otracker=hp_rich_navigation_7_1.navigationCard.RICH_NAVIGATION_Fashion~Women%2BFootwear~Women%2BSports%2BShoes_TCYGDE7YX2GZ&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_7_L2_view-all&cid=TCYGDE7YX2GZ'>Women Sports Shoes
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/womens-footwear/ballerinas/pr?sid=osp,iko,974&fm=neo%2Fmerchandising&iid=M_c36c67fc-4368-451d-a02e-9c47e2262dd0_1_372UD5BXDFYS_MC.5MXCW2STOYZ2&otracker=hp_rich_navigation_8_1.navigationCard.RICH_NAVIGATION_Fashion~Women%2BFootwear~Women%2BBallerinas_5MXCW2STOYZ2&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_8_L2_view-all&cid=5MXCW2STOYZ2'>Women Ballerians
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/womens-footwear/ethnic-shoes/pr?sid=osp,iko,w4a&fm=neo%2Fmerchandising&iid=M_613953a9-c6c5-4238-bfef-3410fa385ba9_1_372UD5BXDFYS_MC.AW029A408YDY&otracker=hp_rich_navigation_9_1.navigationCard.RICH_NAVIGATION_Fashion~Women%2BFootwear~Women%2BEthnic%2BShoes_AW029A408YDY&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_9_L2_view-all&cid=AW029A408YDY'>Women Ethnic Shoes
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/womens-footwear/casual-shoes/sneakers/pr?sid=osp,iko,sx7,o2k&fm=neo%2Fmerchandising&iid=M_1fe46323-129b-4200-ab37-086491a17f8f_1_372UD5BXDFYS_MC.YP3DZHAEGSXZ&otracker=hp_rich_navigation_10_1.navigationCard.RICH_NAVIGATION_Fashion~Women%2BFootwear~Women%2BSneakers_YP3DZHAEGSXZ&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_10_L2_view-all&cid=YP3DZHAEGSXZ'>Women Sneakers
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/womens-footwear/sports-shoes/walking/pr?sid=osp,iko,d20,war&fm=neo%2Fmerchandising&iid=M_b9f5099b-ab19-4519-9917-a7b6ad1192d3_1_372UD5BXDFYS_MC.46TUPYZBP7LQ&otracker=hp_rich_navigation_11_1.navigationCard.RICH_NAVIGATION_Fashion~Women%2BFootwear~Women%2BWalking%2BShoes_46TUPYZBP7LQ&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_11_L2_view-all&cid=46TUPYZBP7LQ'>Women Walking Shoes
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/womens-footwear/boots/pr?sid=osp,iko,xgp&fm=neo%2Fmerchandising&iid=M_61e691c3-eb1e-49f7-ab2e-0e10acf71bc2_1_372UD5BXDFYS_MC.C3Y7T0GRQYNV&otracker=hp_rich_navigation_12_1.navigationCard.RICH_NAVIGATION_Fashion~Women%2BFootwear~Women%2BBoots_C3Y7T0GRQYNV&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_12_L2_view-all&cid=C3Y7T0GRQYNV'>Women Boots
                </a>
                </>
                )}
                {displayItem ==='watch' && (
                <>
                <span className='left_names'>MORE IN WATCHES AND ACCESSORIES</span>
                <a className='fashion_rightlink' href='https://www.flipkart.com/watches/wrist-watches/pr?sid=r18,f13&p[]=facets.ideal_for%255B%255D%3DCouple&p[]=facets.ideal_for%255B%255D%3DWomen&p[]=facets.ideal_for%255B%255D%3DMen%2B%2526%2BWomen&p[]=facets.ideal_for%255B%255D%3DMen&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_23ae024f-87bd-42a5-b412-f2907207de06_1_372UD5BXDFYS_MC.STURTSNOXQD2&otracker=hp_rich_navigation_1_1.navigationCard.RICH_NAVIGATION_Fashion~Watches%2Band%2BAccessories~Men%2B%2526%2BWomen%2BWatches_STURTSNOXQD2&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_1_L2_view-all&cid=STURTSNOXQD2'>Men & Women Watches
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/sunglasses/pr?p%5B%5D=facets.ideal_for%255B%255D%3DMen&sid=26x&otracker=nmenu_sub_Men_0_Sunglasses&otracker=nmenu_sub_Men_0_Sunglasses&p%5B%5D=facets.ideal_for%255B%255D%3DMen%2B%2526%2BWomen&p%5B%5D=facets.ideal_for%255B%255D%3DWomen&fm=neo%2Fmerchandising&iid=M_92f25909-bb4f-47b3-9073-ab90c4137d93_1_372UD5BXDFYS_MC.9FKGX0CLEQSD&otracker=hp_rich_navigation_2_1.navigationCard.RICH_NAVIGATION_Fashion~Watches%2Band%2BAccessories~Men%2B%2526%2BWomen%2BSunglasses_9FKGX0CLEQSD&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_2_L2_view-all&cid=9FKGX0CLEQSD'>Men & Women Sunglasses
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/bags-wallets-belts/wallets-clutches/wallets/pr?sid=reh%2Ccca%2Ch76&marketplace=FLIPKART&p%5B%5D=facets.ideal_for%255B%255D%3DMen&p%5B%5D=facets.ideal_for%255B%255D%3DBoys&p%5B%5D=facets.serviceability%5B%5D%3Dtrue&otracker=nmenu_sub_Men_0_Wallets&fm=neo%2Fmerchandising&iid=M_9b4bd99d-4d3f-4443-a032-c675be98e95e_1_372UD5BXDFYS_MC.OC9LVYRSIXOM&otracker=hp_rich_navigation_3_1.navigationCard.RICH_NAVIGATION_Fashion~Watches%2Band%2BAccessories~Wallets_OC9LVYRSIXOM&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_3_L2_view-all&cid=OC9LVYRSIXOM'>Wallets
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/bags-wallets-belts/belts/pr?sid=reh,wq9&marketplace=FLIPKART&fm=neo%2Fmerchandising&iid=M_1efbad88-3f82-490d-bc75-59efea6c74eb_1_372UD5BXDFYS_MC.TDUM97A9GLLA&otracker=hp_rich_navigation_4_1.navigationCard.RICH_NAVIGATION_Fashion~Watches%2Band%2BAccessories~Men%2B%2526%2BWomen%2BBelts_TDUM97A9GLLA&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_4_L2_view-all&cid=TDUM97A9GLLA'>Men & Women Belts
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/fashion-jewellery-store?fm=neo%2Fmerchandising&iid=M_bb83a892-515b-4bd8-8f02-76e634694478_1_372UD5BXDFYS_MC.VTHW8849YVCR&otracker=hp_rich_navigation_5_1.navigationCard.RICH_NAVIGATION_Fashion~Watches%2Band%2BAccessories~Women%2BFashion%2BJewellery_VTHW8849YVCR&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_5_L2_view-all&cid=VTHW8849YVCR'>Women Fashion Jewellery
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/jewellery/artificial-jewellery/pr?sid=mcr%2C96v&marketplace=FLIPKART&p%5B%5D=facets.ideal_for%255B%255D%3DMen&p%5B%5D=facets.ideal_for%255B%255D%3DBoys&fm=neo%2Fmerchandising&iid=M_e7ddfdc1-68b4-4e69-b6f1-4c37145b0379_1_372UD5BXDFYS_MC.RUKSZ9QA34ZM&otracker=hp_rich_navigation_6_1.navigationCard.RICH_NAVIGATION_Fashion~Watches%2Band%2BAccessories~Men%2BFashion%2BJewellery_RUKSZ9QA34ZM&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_6_L2_view-all&cid=RUKSZ9QA34ZM'>Men Fashion Jewellery
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/preciousjewellery-store?fm=neo%2Fmerchandising&iid=M_8740153c-27fb-43e9-986b-14b51ebe1ea0_1_372UD5BXDFYS_MC.4JSYJ2OFYRHJ&otracker=hp_rich_navigation_7_1.navigationCard.RICH_NAVIGATION_Fashion~Watches%2Band%2BAccessories~Precious%2BJewellery_4JSYJ2OFYRHJ&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_7_L2_view-all&cid=4JSYJ2OFYRHJ'>Precious Jewellery
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/gold-coins-bars-desktop-store?fm=neo%2Fmerchandising&iid=M_05514453-d065-407e-8e50-d7d57ee12194_1_372UD5BXDFYS_MC.STVVXHH5RVHK&otracker=hp_rich_navigation_8_1.navigationCard.RICH_NAVIGATION_Fashion~Watches%2Band%2BAccessories~Precious%2BCoins%2B%2526%2BBars_STVVXHH5RVHK&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_8_L2_view-all&cid=STVVXHH5RVHK'>Precious Coins & Bars
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/jewellery/precious-articles/pr?sid=mcr%2Cpyi&otracker=categorytree&p%5B%5D=facets.price_range.from%3D300&p%5B%5D=facets.price_range.to%3DMax&fm=neo%2Fmerchandising&iid=M_3d483a2f-424d-4311-b354-4f4ee407db3c_1_372UD5BXDFYS_MC.EY81DZ32WG7R&otracker=hp_rich_navigation_9_1.navigationCard.RICH_NAVIGATION_Fashion~Watches%2Band%2BAccessories~Precious%2BArticles_EY81DZ32WG7R&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_9_L2_view-all&cid=EY81DZ32WG7R'>Precious Articles
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/all/~cs-uxalt758cb/pr?sid=all&collection-tab-name=Frames+and+Contact+Lens&fm=neo%2Fmerchandising&iid=M_67f528b0-5be2-4778-83ea-9ee0146185c6_1_372UD5BXDFYS_MC.EDY77GOAB3TO&otracker=hp_rich_navigation_10_1.navigationCard.RICH_NAVIGATION_Fashion~Watches%2Band%2BAccessories~Frames%2B%2526%2BContact%2BLenses_EDY77GOAB3TO&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_10_L2_view-all&cid=EDY77GOAB3TO'>Frames & Contact Lenses
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/all/~cs-k4e23ite9r/pr?sid=all&collection-tab-name=Kids+Watches+and+Sunglasses&fm=neo%2Fmerchandising&iid=M_be6d212b-d838-40d7-8bdf-691cf7e31e03_1_372UD5BXDFYS_MC.J2N0N4W9UXYE&otracker=hp_rich_navigation_11_1.navigationCard.RICH_NAVIGATION_Fashion~Watches%2Band%2BAccessories~Kids%2BAccessories_J2N0N4W9UXYE&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_11_L2_view-all&cid=J2N0N4W9UXYE'>Kids Accessories
                </a>
                </>
                )}
                {displayItem === 'bags' && (
                <>
                <span className='left_names'>MORE IN BAGS,SUITCASES & LUGGAGE</span>
                <a className='fashion_rightlink' href='https://www.flipkart.com/bags-luggage-bau-may-2020-store?fm=neo%2Fmerchandising&iid=M_67e7e78d-d7c7-4ed0-bca7-a7ea006ce6a0_1_372UD5BXDFYS_MC.7NW2KUI9Q6F1&otracker=hp_rich_navigation_1_1.navigationCard.RICH_NAVIGATION_Fashion~Bags%252C%2BSuitcases%2B%2526%2BLuggage~All_7NW2KUI9Q6F1&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_1_L2_view-all&cid=7NW2KUI9Q6F1'>All
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/bags-wallets-belts/bags-backpacks/pr?sid=reh,4d7&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_7d2897d6-6438-4130-bbc2-efd0e027e809_1_372UD5BXDFYS_MC.5ZD3UYBIH203&otracker=hp_rich_navigation_2_1.navigationCard.RICH_NAVIGATION_Fashion~Bags%252C%2BSuitcases%2B%2526%2BLuggage~Bags%2B%2526%2BBackpacks_5ZD3UYBIH203&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_2_L2_view-all&cid=5ZD3UYBIH203'>Bags & Backpacks
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/bags-wallets-belts/luggage-travel/suitcases/pr?sid=reh,plk,tvv&p[]=facets.ideal_for%255B%255D%3DBoys%2B%2526%2BGirls&p[]=facets.ideal_for%255B%255D%3DMen%2B%2526%2BWomen&p[]=facets.ideal_for%255B%255D%3DMen&p[]=facets.ideal_for%255B%255D%3DMen%2527s&p[]=facets.ideal_for%255B%255D%3DBoys&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_724e39cb-4f18-4c56-8fed-8b4446820f77_1_372UD5BXDFYS_MC.3VVU93JPW1IZ&otracker=hp_rich_navigation_3_1.navigationCard.RICH_NAVIGATION_Fashion~Bags%252C%2BSuitcases%2B%2526%2BLuggage~Suitcases%2B%2526%2BTrolleys_3VVU93JPW1IZ&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_3_L2_view-all&cid=3VVU93JPW1IZ'>Suitcases & Trolleys
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/bags-wallets-belts/luggage-travel/duffel-bags/pr?sid=reh,plk,26y&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_87991e53-2dc3-4588-96ac-4a00df23e680_1_372UD5BXDFYS_MC.8FFMTXVX93HZ&otracker=hp_rich_navigation_4_1.navigationCard.RICH_NAVIGATION_Fashion~Bags%252C%2BSuitcases%2B%2526%2BLuggage~Dufflebags_8FFMTXVX93HZ&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_4_L2_view-all&cid=8FFMTXVX93HZ'>Dufflebags
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/bags-wallets-belts/luggage-travel/rucksacks/pr?sid=reh,plk,san&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_3e2e33a4-764b-4884-ba09-125b836a2bfb_1_372UD5BXDFYS_MC.ZNZEB4V61Z92&otracker=hp_rich_navigation_5_1.navigationCard.RICH_NAVIGATION_Fashion~Bags%252C%2BSuitcases%2B%2526%2BLuggage~Rucksacks_ZNZEB4V61Z92&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_5_L2_view-all&cid=ZNZEB4V61Z92'>Rucksacks
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/bags-wallets-belts/handbags-clutches/pr?sid=reh,ihu&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_1f4f5077-1ff6-41be-9d18-8316fca4dc81_1_372UD5BXDFYS_MC.WCBVRUKW6D7U&otracker=hp_rich_navigation_6_1.navigationCard.RICH_NAVIGATION_Fashion~Bags%252C%2BSuitcases%2B%2526%2BLuggage~Handbags_WCBVRUKW6D7U&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_6_L2_view-all&cid=WCBVRUKW6D7U'>Handbags
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/bags-wallets-belts/handbags-clutches/sling-bags/pr?sid=reh,ihu,mf2&otracker=categorytree&otracker=nmenu_sub_Women_0_Sling%20bags&fm=neo%2Fmerchandising&iid=M_a2bf6bce-641f-4037-8c29-e015e36152a7_1_372UD5BXDFYS_MC.2GWFW0G6JPRI&otracker=hp_rich_navigation_7_1.navigationCard.RICH_NAVIGATION_Fashion~Bags%252C%2BSuitcases%2B%2526%2BLuggage~Slingbags_2GWFW0G6JPRI&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_7_L2_view-all&cid=2GWFW0G6JPRI'>Slingbags
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/bags-wallets-belts/handbags-clutches/clutches-wallets/pr?sid=reh,ihu,x9j&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_a6d254e3-5dc4-4ea5-ab7d-3649aaf136ae_1_372UD5BXDFYS_MC.H797KXLTZ0ET&otracker=hp_rich_navigation_8_1.navigationCard.RICH_NAVIGATION_Fashion~Bags%252C%2BSuitcases%2B%2526%2BLuggage~Women%2527s%2BClutches%2B%2526%2BWallets_H797KXLTZ0ET&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_8_L2_view-all&cid=H797KXLTZ0ET'>Women's Clutches & Wallets
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/bags-wallets-belts/bags-backpacks/messenger-bags/pr?sid=reh,4d7,ss4&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_56fb3e8d-c1f3-4b5a-9bb2-3067dd493f74_1_372UD5BXDFYS_MC.09M0MOY4OHCA&otracker=hp_rich_navigation_9_1.navigationCard.RICH_NAVIGATION_Fashion~Bags%252C%2BSuitcases%2B%2526%2BLuggage~Messenger%2BBags_09M0MOY4OHCA&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_9_L2_view-all&cid=09M0MOY4OHCA'>Messenger Bags
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/bags-wallets-belts/luggage-travel/travel-accessories/pr?sid=reh,plk,t1w&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_caca0adc-d8f5-4764-b72e-5e9aac70e161_1_372UD5BXDFYS_MC.4LM5T9AHPBK4&otracker=hp_rich_navigation_10_1.navigationCard.RICH_NAVIGATION_Fashion~Bags%252C%2BSuitcases%2B%2526%2BLuggage~Travel%2BAccessories_4LM5T9AHPBK4&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_10_L2_view-all&cid=4LM5T9AHPBK4'>Travel Accessories
                </a>
                </>
                )}
                {displayItem === 'kids' && (
                <>
                <span className='left_names'>MORE IN KIDS</span>
                <a className='fashion_rightlink' href='https://www.flipkart.com/clothing-and-accessories/pr?sid=clo&otracker=categorytree&p%5B%5D=facets.ideal_for%255B%255D%3DGirls&p%5B%5D=facets.ideal_for%255B%255D%3DBoys&p%5B%5D=facets.ideal_for%255B%255D%3DBoys%2B%2526%2BGirls&p%5B%5D=facets.ideal_for%255B%255D%3DBaby%2BBoys%2B%2526%2BBaby%2BGirls&p%5B%5D=facets.ideal_for%255B%255D%3DBaby%2BBoys&p%5B%5D=facets.ideal_for%255B%255D%3DBaby%2BGirls&otracker=nmenu_sub_Baby%20%26%20Kids_0_Kids%27%20Clothing&fm=neo%2Fmerchandising&iid=M_2319d219-809f-467f-a635-0fbf4f0a6dba_1_372UD5BXDFYS_MC.KOBJVGW86TN6&otracker=hp_rich_navigation_1_1.navigationCard.RICH_NAVIGATION_Fashion~Kids~All_KOBJVGW86TN6&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_1_L2_view-all&cid=KOBJVGW86TN6'>All
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/clothing-and-accessories/dresses-and-gowns/dresses/pr?sid=clo,odx,maj&p[]=facets.ideal_for%255B%255D%3DGirls&p[]=facets.ideal_for%255B%255D%3DBaby%2BBoys%2B%2526%2BBaby%2BGirls&p[]=facets.ideal_for%255B%255D%3DBaby%2BGirls&p[]=facets.ideal_for%255B%255D%3DBaby%2BBoys%2B%2526%2BBaby%2BGirls&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_7106d0ed-9d39-4493-8c1b-c59424d8c881_1_372UD5BXDFYS_MC.BZEXHJYJBKRX&otracker=hp_rich_navigation_2_1.navigationCard.RICH_NAVIGATION_Fashion~Kids~Girls%2BDresses_BZEXHJYJBKRX&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_2_L2_view-all&cid=BZEXHJYJBKRX'>Girls Dresses
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/clothing-and-accessories/topwear/tshirts/pr?sid=clo,ash,ank&p[]=facets.ideal_for%255B%255D%3DGirls&p[]=facets.ideal_for%255B%255D%3DBoys&p[]=facets.ideal_for%255B%255D%3DBoys%2B%2526%2BGirls&p[]=facets.ideal_for%255B%255D%3DBaby%2BBoys%2B%2526%2BBaby%2BGirls&p[]=facets.ideal_for%255B%255D%3DBaby%2BBoys&p[]=facets.ideal_for%255B%255D%3DBaby%2BGirls&p[]=facets.ideal_for%255B%255D%3DBaby%2BBoys%2B%2526%2BBaby%2BGirls&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_a3eead15-85c7-40fc-8e63-3c7e124eb081_1_372UD5BXDFYS_MC.7KV507N654MG&otracker=hp_rich_navigation_3_1.navigationCard.RICH_NAVIGATION_Fashion~Kids~Boys%2B%2526%2BGirls%2BTshirts_7KV507N654MG&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_3_L2_view-all&cid=7KV507N654MG'>Boys & Girls Tshirts
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/clothing-and-accessories/kids-combos-and-costumes/kids-apparel-combos/pr?sid=clo,eof,1bp&p[]=facets.ideal_for%255B%255D%3DGirls&p[]=facets.ideal_for%255B%255D%3DBoys&p[]=facets.ideal_for%255B%255D%3DBoys%2B%2526%2BGirls&p[]=facets.ideal_for%255B%255D%3DBaby%2BBoys%2B%2526%2BBaby%2BGirls&p[]=facets.ideal_for%255B%255D%3DBaby%2BBoys&p[]=facets.ideal_for%255B%255D%3DBaby%2BGirls&p[]=facets.ideal_for%255B%255D%3DBaby%2BBoys%2B%2526%2BBaby%2BGirls&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_7eb28e0f-41b2-4deb-bc8b-f91f755bd2d7_1_372UD5BXDFYS_MC.1HV14NYN7403&otracker=hp_rich_navigation_4_1.navigationCard.RICH_NAVIGATION_Fashion~Kids~Boys%2B%2526%2BGirls%2BCombosets_1HV14NYN7403&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_4_L2_view-all&cid=1HV14NYN7403'>Boys & Girls Combosets
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/clothing-and-accessories/kurtas-ethnic-sets-and-bottoms/pr?sid=clo,cfv&p[]=facets.ideal_for%255B%255D%3DGirls&p[]=facets.ideal_for%255B%255D%3DBoys&p[]=facets.ideal_for%255B%255D%3DBoys%2B%2526%2BGirls&p[]=facets.ideal_for%255B%255D%3DBaby%2BBoys%2B%2526%2BBaby%2BGirls&p[]=facets.ideal_for%255B%255D%3DBaby%2BBoys&p[]=facets.ideal_for%255B%255D%3DBaby%2BGirls&p[]=facets.ideal_for%255B%255D%3Dbaby%2Bboys%2B%2526%2Bbaby%2BGirls&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_0d05c887-9412-46f7-b342-e06061621e09_1_372UD5BXDFYS_MC.5HMZYMJQ56AY&otracker=hp_rich_navigation_5_1.navigationCard.RICH_NAVIGATION_Fashion~Kids~Boys%2B%2526%2BGirls%2BEthnic%2BWear_5HMZYMJQ56AY&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_5_L2_view-all&cid=5HMZYMJQ56AY'>Boys & Girls Ethnic Wear
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/clothing-and-accessories/bottomwear/jeans/kids-jeans/pr?sid=clo,vua,k58,s9z&p[]=facets.ideal_for%255B%255D%3DGirls&p[]=facets.ideal_for%255B%255D%3DBoys&p[]=facets.ideal_for%255B%255D%3DBoys%2B%2526%2BGirls&p[]=facets.ideal_for%255B%255D%3DBaby%2BBoys%2B%2526%2BBaby%2BGirls&p[]=facets.ideal_for%255B%255D%3DBaby%2BBoys&p[]=facets.ideal_for%255B%255D%3DBaby%2BGirls&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_0c9d00f3-7235-401d-ba68-06f14b95ece9_1_372UD5BXDFYS_MC.WT6N9S7IUIQD&otracker=hp_rich_navigation_6_1.navigationCard.RICH_NAVIGATION_Fashion~Kids~Boys%2B%2526%2BGirls%2BJeans_WT6N9S7IUIQD&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_6_L2_view-all&cid=WT6N9S7IUIQD'>Boys & Girls Jeans
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/clothing-and-accessories/bottomwear/shorts/pr?sid=clo,vua,e8g&p[]=facets.ideal_for%255B%255D%3DGirls&p[]=facets.ideal_for%255B%255D%3DBoys&p[]=facets.ideal_for%255B%255D%3DBoys%2B%2526%2BGirls&p[]=facets.ideal_for%255B%255D%3DBaby%2BBoys%2B%2526%2BBaby%2BGirls&p[]=facets.ideal_for%255B%255D%3DBaby%2BBoys&p[]=facets.ideal_for%255B%255D%3DBaby%2BGirls&p[]=facets.ideal_for%255B%255D%3DBaby%2BBoys%2B%2526%2BBaby%2BGirls&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_3c6b1a78-2feb-4c12-b04f-decdca68010d_1_372UD5BXDFYS_MC.EO9X8VHVL11G&otracker=hp_rich_navigation_7_1.navigationCard.RICH_NAVIGATION_Fashion~Kids~Boys%2B%2526%2BGirls%2BShorts_EO9X8VHVL11G&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_7_L2_view-all&cid=EO9X8VHVL11G'>Boys & Girls Shorts
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/clothing-and-accessories/bottomwear/track-pants/pr?sid=clo,vua,jlk&p[]=facets.ideal_for%255B%255D%3DGirls&p[]=facets.ideal_for%255B%255D%3DBoys&p[]=facets.ideal_for%255B%255D%3DBoys%2B%2526%2BGirls&p[]=facets.ideal_for%255B%255D%3DBaby%2BBoys%2B%2526%2BBaby%2BGirls&p[]=facets.ideal_for%255B%255D%3DBaby%2BBoys&p[]=facets.ideal_for%255B%255D%3DBaby%2BGirls&p[]=facets.ideal_for%255B%255D%3DBaby%2BBoys%2B%2526%2BBaby%2BGirls&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_e35e9212-c885-430a-9836-1c22205fecf6_1_372UD5BXDFYS_MC.WOLS32C67DHR&otracker=hp_rich_navigation_8_1.navigationCard.RICH_NAVIGATION_Fashion~Kids~Boys%2B%2526%2BGirls%2BTrackpants_WOLS32C67DHR&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_8_L2_view-all&cid=WOLS32C67DHR'>Boys & Girls Trackpants
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/clothing-and-accessories/pr?sid=clo&p%5B%5D=facets.ideal_for%255B%255D%3DBaby%2BBoys&otracker=categorytree&otracker=nmenu_sub_Baby+%26+Kids_0_Baby+Boys%27+Clothing&p%5B%5D=facets.ideal_for%255B%255D%3DBaby%2BGirls&fm=neo%2Fmerchandising&iid=M_c72accda-e1f7-4d60-a2a5-d0cc496990fd_1_372UD5BXDFYS_MC.IX9LYAQJEP06&otracker=hp_rich_navigation_10_1.navigationCard.RICH_NAVIGATION_Fashion~Kids~Infant%2BWear_IX9LYAQJEP06&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_10_L2_view-all&cid=IX9LYAQJEP06'>Infant Wear
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/footwear/kids-infant-footwear/~cs-v1kumgh5h8/pr?sid=osp%2Cmba&collection-tab-name=Kids%20footwear%20-%20Slipper%20Flip%20Flops&fm=neo%2Fmerchandising&iid=M_9ef2130e-6d94-483f-8f49-785d04ae266b_1_372UD5BXDFYS_MC.XUF2LAR8M8HT&otracker=hp_rich_navigation_11_1.navigationCard.RICH_NAVIGATION_Fashion~Kids~Kids%2BSlipper%2BFlip%2BFlops_XUF2LAR8M8HT&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_11_L2_view-all&cid=XUF2LAR8M8HT'>Kids Slipper Flip Flops
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/footwear/kids-infant-footwear/~cs-6pum7747k7/pr?sid=osp%2Cmba&collection-tab-name=Kids%20Sports%20Shoes&fm=neo%2Fmerchandising&iid=M_7bc6131d-d990-476c-a71b-b22d17593b5d_1_372UD5BXDFYS_MC.ZY1F3CMNC90N&otracker=hp_rich_navigation_12_1.navigationCard.RICH_NAVIGATION_Fashion~Kids~Kids%2BSports%2BShoes_ZY1F3CMNC90N&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_12_L2_view-all&cid=ZY1F3CMNC90N'>Kids Sports Shoes
                </a>
                </>
                )}
                {displayItem === 'winter' && (
                <>
                <span className='left_names'>MORE IN WINTER</span>
                <a className='fashion_rightlink' href='https://www.flipkart.com/clothing-and-accessories/winter-wear/pr?sid=clo%2Cqvw&otracker=categorytree&p%5B%5D=facets.ideal_for%255B%255D%3DMen&otracker=nmenu_sub_Men_0_Winter%20Wear&fm=neo%2Fmerchandising&iid=M_8b7e3bc4-4b72-4de4-a432-ac14b37e627c_1_372UD5BXDFYS_MC.HSX55O4886PZ&otracker=hp_rich_navigation_1_1.navigationCard.RICH_NAVIGATION_Fashion~Winter~All_HSX55O4886PZ&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_1_L2_view-all&cid=HSX55O4886PZ'>All
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/mens-jackets/pr?sid=clo,qvw,z0g,jbm&fm=neo%2Fmerchandising&iid=M_6fcef00a-d713-4b8a-ad7e-0553a83cf428_1_372UD5BXDFYS_MC.LJY3V120GZ4X&otracker=hp_rich_navigation_2_1.navigationCard.RICH_NAVIGATION_Fashion~Winter~Men%2527s%2BJackets_LJY3V120GZ4X&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_2_L2_view-all&cid=LJY3V120GZ4X'>Men's Jackets
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/mens-sweatshirts/pr?sid=clo,qvw,64a,vui&fm=neo%2Fmerchandising&iid=M_3f45cfca-0d1a-4647-a8c0-53a8eb8b1266_1_372UD5BXDFYS_MC.K0Q6J2L1M2CC&otracker=hp_rich_navigation_3_1.navigationCard.RICH_NAVIGATION_Fashion~Winter~Men%2527s%2BSweatshirts_K0Q6J2L1M2CC&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_3_L2_view-all&cid=K0Q6J2L1M2CC'>Men's Sweatshirts
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/mens-sweaters/pr?sid=clo,qvw,vkb,ieq&fm=neo%2Fmerchandising&iid=M_840285e3-1e27-46a9-9be0-478310b5bb19_1_372UD5BXDFYS_MC.222KYIWOR30I&otracker=hp_rich_navigation_4_1.navigationCard.RICH_NAVIGATION_Fashion~Winter~Men%2527s%2BSweaters_222KYIWOR30I&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_4_L2_view-all&cid=222KYIWOR30I'>Men's Sweaters
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/mens-thermals/pr?sid=clo,qvw,ugg,oak&fm=neo%2Fmerchandising&iid=M_31675a7c-9b5a-4fbc-a5ca-3fbad8496156_1_372UD5BXDFYS_MC.2NZUOM9MEG2X&otracker=hp_rich_navigation_5_1.navigationCard.RICH_NAVIGATION_Fashion~Winter~Men%2527s%2BThermals_2NZUOM9MEG2X&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_5_L2_view-all&cid=2NZUOM9MEG2X'>Men's Thermals
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/womens-jackets/pr?sid=clo,qvw,z0g,rwo&fm=neo%2Fmerchandising&iid=M_65f0ab53-bd0a-4e1b-a073-4083c75912f1_1_372UD5BXDFYS_MC.E9Q1JB8UX8A3&otracker=hp_rich_navigation_6_1.navigationCard.RICH_NAVIGATION_Fashion~Winter~Women%2527s%2BJackets_E9Q1JB8UX8A3&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_6_L2_view-all&cid=E9Q1JB8UX8A3'>Women's Jackets
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/womens-sweatshirts/pr?sid=clo,qvw,64a,lzz&fm=neo%2Fmerchandising&iid=M_91a75cc8-e488-4c1b-9468-89bb2c55938b_1_372UD5BXDFYS_MC.T5CRQJV0RUVW&otracker=hp_rich_navigation_7_1.navigationCard.RICH_NAVIGATION_Fashion~Winter~Women%2527s%2BSweatshirts_T5CRQJV0RUVW&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_7_L2_view-all&cid=T5CRQJV0RUVW'>Women's Sweatshirts
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/womens-sweaters/pr?sid=clo%2Cqvw%2Cvkb%2Chbp&fm=neo%2Fmerchandising&iid=M_f79c7b89-e86e-4779-a2cd-686962e2da11_1_372UD5BXDFYS_MC.D3UAPK19RUV6&otracker=hp_rich_navigation_8_1.navigationCard.RICH_NAVIGATION_Fashion~Winter~Women%2527s%2BSweaters%2B%2526%2BCardigans_D3UAPK19RUV6&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_8_L2_view-all&cid=D3UAPK19RUV6'>Women's Sweaters & Cardigans
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/womens-shrugs/pr?sid=clo,qvw,vvr,syu&fm=neo%2Fmerchandising&iid=M_da91b907-ae2a-46d2-9007-a1188f9309af_1_372UD5BXDFYS_MC.76MT72II0R3A&otracker=hp_rich_navigation_9_1.navigationCard.RICH_NAVIGATION_Fashion~Winter~Women%2527s%2BShrugs_76MT72II0R3A&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_9_L2_view-all&cid=76MT72II0R3A'>Women's Shrugs
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/clothing-and-accessories/winter-wear/sweatshirts/kids-sweatshirts/pr?sid=clo,qvw,64a,lwy&fm=neo%2Fmerchandising&iid=M_ecda0de7-8361-44f3-b6d2-6ddb275dc80e_1_372UD5BXDFYS_MC.JK7XAJXHPMRD&otracker=hp_rich_navigation_10_1.navigationCard.RICH_NAVIGATION_Fashion~Winter~Kids%2BSweatShirts_JK7XAJXHPMRD&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_10_L2_view-all&cid=JK7XAJXHPMRD'>Kids Sweatshirts
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/clothing-and-accessories/ethnic-wear/kurtas/women-kurtas-and-kurtis/pr?sid=clo%2Ccfv%2Ccib%2Crkt&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_9432a37d-e5b9-493c-aaf3-b5c701ed0b99_1_372UD5BXDFYS_MC.VQTNYFN19SOH&otracker=hp_rich_navigation_11_1.navigationCard.RICH_NAVIGATION_Fashion~Winter~Women%2BKurtas_VQTNYFN19SOH&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_11_L2_view-all&cid=VQTNYFN19SOH'>Women Kurtas
                </a>
                <a className='fashion_rightlink' href='https://www.flipkart.com/clothing-and-accessories/winter-wear/jackets/kids-jackets/pr?sid=clo,qvw,z0g,0vw&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_9a933ded-627d-4bdb-837e-5715bf5e278d_1_372UD5BXDFYS_MC.YJC5DK3FPW4O&otracker=hp_rich_navigation_12_1.navigationCard.RICH_NAVIGATION_Fashion~Winter~Kids%2BJackets_YJC5DK3FPW4O&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_12_L2_view-all&cid=YJC5DK3FPW4O'>Kids Jackets
                </a>
                </>
                )}
            </div>
        </div>
    </div>
  </div>
  )
}


export default Fashion;
