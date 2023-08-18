import React, { useState } from 'react';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './Fashion.css';


const ElecTippy = () => {
    const [displayItem, setDisplayItem] = useState(0);

    const handleHover = (item) => {
        setDisplayItem(item);
    }



  return (
    <div className='fashion_containers'>
        <div className='fashion_details'>
            <div className='left_right'>
                <div className='fashion left_side'>
                    <div className= {
                        `fashion_item ${displayItem === 'audio' ? 'active' : ''}`}
                        onMouseEnter = {() => handleHover('audio')}>
                        <a className='fashion_link' href='https://www.flipkart.com/electronics-best-offers-store?fm=neo%2Fmerchandising&iid=M_1669f141-9eb6-4b0b-ae00-58f031f04f08_1_372UD5BXDFYS_MC.KV8NA7Z3WYHI&otracker=hp_rich_navigation_1_1.navigationCard.RICH_NAVIGATION_Electronics~Audio_KV8NA7Z3WYHI&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_1_L1_view-all&cid=KV8NA7Z3WYHI' >Audio
                            <ArrowForwardIosIcon className='fas-icon' />
                        </a>
                    </div>
                    <div className= {
                        `fashion_item ${displayItem === 'cam' ? 'active' : ''}`}
                        onMouseEnter = {() => handleHover('cam')}>
                        <a className='fashion_link' href='https://www.flipkart.com/camera-clp-store?otracker=nmenu_sub_Electronics_0_Camera&fm=neo%2Fmerchandising&iid=M_93b1a3c1-0fcb-4d86-a357-4ac3bef4ba10_1_372UD5BXDFYS_MC.JR4C1KAN1IAQ&otracker=hp_rich_navigation_3_1.navigationCard.RICH_NAVIGATION_Electronics~Cameras%2B%2526%2BAccessories_JR4C1KAN1IAQ&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_3_L1_view-all&cid=JR4C1KAN1IAQ' >Cameras & Accessories
                            <ArrowForwardIosIcon className='fas-icon' />
                        </a>
                    </div>
                    <div className= {
                        `fashion_item ${displayItem === 'computer' ? 'active' : ''}`}
                        onMouseEnter = {() => handleHover('computer')}>
                        <a className='fashion_link' href='https://www.flipkart.com/computers/pr?sid=6bo&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_e8fad87c-97a3-4183-8061-18065ed243df_1_372UD5BXDFYS_MC.J4RSDBUPDZ0A&otracker=hp_rich_navigation_4_1.navigationCard.RICH_NAVIGATION_Electronics~Computer%2BPeripherals_J4RSDBUPDZ0A&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_4_L1_view-all&cid=J4RSDBUPDZ0A' >Computer Peripherals
                            <ArrowForwardIosIcon className='fas-icon' />
                        </a>
                    </div>
                    <div className= {
                        `fashion_item ${displayItem === 'game' ? 'active' : ''}`}
                        onMouseEnter = {() => handleHover('game')}>
                        <a className='fashion_link' href='https://www.flipkart.com/gaming/pr?sid=4rr&fm=neo%2Fmerchandising&iid=M_e7fc0ab6-75d0-42ac-b610-fa796a39daaa_1_372UD5BXDFYS_MC.PK7I48M403OR&otracker=hp_rich_navigation_5_1.navigationCard.RICH_NAVIGATION_Electronics~Gaming_PK7I48M403OR&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_5_L1_view-all&cid=PK7I48M403OR' >Gaming
                            <ArrowForwardIosIcon className='fas-icon' />
                        </a>
                    </div>
                    <div className= {
                        `fashion_item ${displayItem === 'health' ? 'active' : ''}`}
                        onMouseEnter = {() => handleHover('health')}>
                        <a className='fashion_link' href='https://www.flipkart.com/health-personal-care-appliances/pr?sid=zlw&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_3ca76d9e-08d5-483d-b886-815aa6589dae_1_372UD5BXDFYS_MC.HXW0OE9J0RUT&otracker=hp_rich_navigation_6_1.navigationCard.RICH_NAVIGATION_Electronics~Health%2B%2526%2BPersonal%2BCare_HXW0OE9J0RUT&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_6_L1_view-all&cid=HXW0OE9J0RUT' >Health & Personal Care
                            <ArrowForwardIosIcon className='fas-icon' />
                        </a>
                    </div>
                    <div className= {
                        `fashion_item ${displayItem === 'lap' ? 'active' : ''}`}
                        onMouseEnter = {() => handleHover('lap')}>
                        <a className='fashion_link' href='https://www.flipkart.com/offers-list/itaccessories?screen=dynamic&pk=themeViews%3DITAcce%3Aapp%2CITAcce%3Adesk~widgetType%3DdealCard~contentType%3Dneo&wid=2.dealCard.OMU&fm=neo%2Fmerchandising&iid=M_cb7fb4c1-532b-4489-90f8-8ff8dba334b4_1_372UD5BXDFYS_MC.B0RGQT4LXCY4&otracker=hp_rich_navigation_7_1.navigationCard.RICH_NAVIGATION_Electronics~Laptop%2BAccessories_B0RGQT4LXCY4&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_7_L1_view-all&cid=B0RGQT4LXCY4' >Laptop Accessories
                            <ArrowForwardIosIcon className='fas-icon' />
                        </a>
                    </div>
                    <div className= {
                        `fashion_item ${displayItem === 'desktop' ? 'active' : ''}`}
                        onMouseEnter = {() => handleHover('desktop')}>
                        <a className='fashion_link' href='https://www.flipkart.com/laptops/pr?sid=6bo,b5g&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_c8efdf81-fbe2-41b9-85ee-7ba055e9ab64_1_372UD5BXDFYS_MC.34WHNYFH5V2Y&otracker=hp_rich_navigation_8_1.navigationCard.RICH_NAVIGATION_Electronics~Laptop%2Band%2BDesktop_34WHNYFH5V2Y&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_8_L1_view-all&cid=34WHNYFH5V2Y' >Laptop & Desktop
                            <ArrowForwardIosIcon className='fas-icon' />
                        </a>
                    </div>
                    <div className= {
                        `fashion_item ${displayItem === 'mobile' ? 'active' : ''}`}
                        onMouseEnter = {() => handleHover('mobile')}>
                        <a className='fashion_link' href='https://www.flipkart.com/electronics-best-offers-store?fm=neo%2Fmerchandising&iid=M_85834155-4687-45af-a686-97b805927ce8_1_372UD5BXDFYS_MC.IT4NQRJLYVLG&otracker=hp_rich_navigation_9_1.navigationCard.RICH_NAVIGATION_Electronics~MobileAccessory_IT4NQRJLYVLG&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_9_L1_view-all&cid=IT4NQRJLYVLG' >Mobile Accessory
                            <ArrowForwardIosIcon className='fas-icon' />
                        </a>
                    </div>
                    <div className= {
                        `fashion_item ${displayItem === 'powerbank' ? 'active' : ''}`}
                        onMouseEnter = {() => handleHover('powerbank')}>
                        <a className='fashion_link' href='https://www.flipkart.com/mobile-accessories/power-banks/pr?sid=tyy,4mr,fu6&otracker=categorytree&otracker=nmenu_sub_Electronics_0_Power%20Banks&fm=neo%2Fmerchandising&iid=M_4a0f7958-3da8-429b-aa02-0a9d565f9ab6_1_372UD5BXDFYS_MC.SUDNEM7MT757&otracker=hp_rich_navigation_10_1.navigationCard.RICH_NAVIGATION_Electronics~Powerbank_SUDNEM7MT757&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_10_L1_view-all&cid=SUDNEM7MT757' >Power Bank
                            <ArrowForwardIosIcon className='fas-icon' />
                        </a>
                    </div>
                    <div className= {
                        `fashion_item ${displayItem === 'smarthome' ? 'active' : ''}`}
                        onMouseEnter = {() => handleHover('smarthome')}>
                        <a className='fashion_link' href='https://www.flipkart.com/smart-home-automation-store?otracker=nmenu_sub_Electronics_0_Smart%20Home%20Automation&fm=neo%2Fmerchandising&iid=M_54250b01-59e6-4825-9c05-e79a56cb38dc_1_372UD5BXDFYS_MC.YOI1FZ6MZHBP&otracker=hp_rich_navigation_11_1.navigationCard.RICH_NAVIGATION_Electronics~Smart%2BHome%2Bautomation_YOI1FZ6MZHBP&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_11_L1_view-all&cid=YOI1FZ6MZHBP' >Smart Home Automation
                            <ArrowForwardIosIcon className='fas-icon' />
                        </a>
                    </div>
                    <div className= {
                        `fashion_item ${displayItem === 'smartwear' ? 'active' : ''}`}
                        onMouseEnter = {() => handleHover('smartwear')}>
                        <a className='fashion_link' href='https://www.flipkart.com/smart-wearables-store?otracker=nmenu_sub_Electronics_0_Smart%20Wearable%20Tech&fm=neo%2Fmerchandising&iid=M_92bdc33e-75c6-4b24-b83b-fb7c7f3df202_1_372UD5BXDFYS_MC.84HOYIMQHQ1K&otracker=hp_rich_navigation_12_1.navigationCard.RICH_NAVIGATION_Electronics~Smart%2BWearables_84HOYIMQHQ1K&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_12_L1_view-all&cid=84HOYIMQHQ1K' >Smart Wearables
                            <ArrowForwardIosIcon className='fas-icon' />
                        </a>
                    </div>                              
                </div>
                <div className='fashion_rightside'>
                    {displayItem === 'audio' && (
                        <>
                        <span className='left_names'>MORE IN AUDIO</span>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/audio-video/~cs-53mrbtcuf5/pr?sid=0pm&collection-tab-name=Audio+And+Video&p%5B%5D=facets.fulfilled_by%255B%255D%3DFlipkart%2BAssured&p%5B%5D=facets.availability%255B%255D%3DExclude%2BOut%2Bof%2BStock&p%5B%5D=facets.rating%255B%255D%3D4%25E2%2598%2585%2B%2526%2Babove&fm=neo%2Fmerchandising&iid=M_811d860c-96b9-46a8-8800-22dc28109cf9_1_372UD5BXDFYS_MC.9JGNW7M0TUHD&otracker=hp_rich_navigation_1_1.navigationCard.RICH_NAVIGATION_Electronics~Audio~All_9JGNW7M0TUHD&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_1_L2_view-all&cid=9JGNW7M0TUHD'>All
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/audio-video/headphones/pr?sid=0pm%2Cfcn&otracker=categorytree&p%5B%5D=facets.connectivity%255B%255D%3DBluetooth&fm=neo%2Fmerchandising&iid=M_5135045d-760e-4421-bb85-8b58c65470d9_1_372UD5BXDFYS_MC.R08R6GB1Q1BI&otracker=hp_rich_navigation_2_1.navigationCard.RICH_NAVIGATION_Electronics~Audio~Bluetooth%2BHeadphones_R08R6GB1Q1BI&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_2_L2_view-all&cid=R08R6GB1Q1BI'>Bluetooth Headphones
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/audio-video/headphones/pr?sid=0pm%2Cfcn&otracker=categorytree&p%5B%5D=facets.connectivity%255B%255D%3DWired&fm=neo%2Fmerchandising&iid=M_ea964b77-33cb-43b5-b300-bf69ed903472_1_372UD5BXDFYS_MC.LSKPCXUOS6SB&otracker=hp_rich_navigation_3_1.navigationCard.RICH_NAVIGATION_Electronics~Audio~Wired%2BHeadphones_LSKPCXUOS6SB&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_3_L2_view-all&cid=LSKPCXUOS6SB'>Wired Headphones
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/audio-video/~cs-wdminh50xp/pr?sid=0pm&collection-tab-name=Truewireless&p%5B%5D=facets.fulfilled_by%255B%255D%3DFlipkart%2BAssured&p%5B%5D=facets.availability%255B%255D%3DExclude%2BOut%2Bof%2BStock&p%5B%5D=facets.rating%255B%255D%3D3%25E2%2598%2585%2B%2526%2Babove&fm=neo%2Fmerchandising&iid=M_a9bdf1fd-7617-4acd-8fed-ea4efe8b390c_1_372UD5BXDFYS_MC.QO4RRHA1ZB0R&otracker=hp_rich_navigation_4_1.navigationCard.RICH_NAVIGATION_Electronics~Audio~True%2BWireless%2BEarbuds_QO4RRHA1ZB0R&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_4_L2_view-all&cid=QO4RRHA1ZB0R'>True Wireless Earbuds
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/audio-video/speakers/~cs-53mrbtcuf5/pr?sid=0pm%2C0o7&otracker=categorytree&p%5B%5D=facets.fulfilled_by%255B%255D%3DFlipkart%2BAssured&p%5B%5D=facets.type%255B%255D%3DMobile%252FTablet%2BSpeaker&p%5B%5D=facets.rating%255B%255D%3D3%25E2%2598%2585%2B%2526%2Babove&fm=neo%2Fmerchandising&iid=M_72a49e4f-f47d-4bca-986f-b18dc6e76a78_1_372UD5BXDFYS_MC.0NUBZMA2FSEI&otracker=hp_rich_navigation_5_1.navigationCard.RICH_NAVIGATION_Electronics~Audio~Bluetooth%2BSpeakers_0NUBZMA2FSEI&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_5_L2_view-all&cid=0NUBZMA2FSEI'>Bluetooth Speakers
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/audio-video/speakers/pr?sid=0pm%2C0o7&marketplace=FLIPKART&p%5B%5D=facets.fulfilled_by%255B%255D%3DFlipkart%2BAssured&p%5B%5D=facets.type%255B%255D%3DSoundbar&p%5B%5D=facets.rating%255B%255D%3D3%25E2%2598%2585%2B%2526%2Babove&fm=neo%2Fmerchandising&iid=M_936f4a32-bde6-4087-ab21-6df3f1a048ae_1_372UD5BXDFYS_MC.KMMIFXINXTXL&otracker=hp_rich_navigation_6_1.navigationCard.RICH_NAVIGATION_Electronics~Audio~Soundbars_KMMIFXINXTXL&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_6_L2_view-all&cid=KMMIFXINXTXL'>Soundbars
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/audio-video/speakers/pr?sid=0pm%2C0o7&otracker=categorytree&p%5B%5D=facets.fulfilled_by%255B%255D%3DFlipkart%2BAssured&p%5B%5D=facets.availability%255B%255D%3DExclude%2BOut%2Bof%2BStock&p%5B%5D=facets.type%255B%255D%3DHome%2BTheatre&p%5B%5D=facets.type%255B%255D%3DTower%2BSpeaker&p%5B%5D=facets.rating%255B%255D%3D4%25E2%2598%2585%2B%2526%2Babove&fm=neo%2Fmerchandising&iid=M_d86317d1-c0b0-45ba-aecc-51e982c5bf1c_1_372UD5BXDFYS_MC.K05PCBRUM3OX&otracker=hp_rich_navigation_7_1.navigationCard.RICH_NAVIGATION_Electronics~Audio~Home%2BTheatres_K05PCBRUM3OX&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_7_L2_view-all&cid=K05PCBRUM3OX'>Home Theatres
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/audio-video/~cs-uba4nsovvv/pr?sid=0pm&collection-tab-name=Streaming+Devices&p%5B%5D=facets.availability%255B%255D%3DExclude%2BOut%2Bof%2BStock&fm=neo%2Fmerchandising&iid=M_19b6408b-7fa5-408b-9a76-4f1b95e2c22e_1_372UD5BXDFYS_MC.H22N2FOLED5R&otracker=hp_rich_navigation_8_1.navigationCard.RICH_NAVIGATION_Electronics~Audio~TV%2BStreaming%2BDevice_H22N2FOLED5R&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_8_L2_view-all&cid=H22N2FOLED5R'>TV Streaming Device
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/audio-video/video-accessories/remote-controllers/pr?sid=0pm%2Cq9n%2Ce9p&otracker=categorytree&p%5B%5D=facets.fulfilled_by%255B%255D%3DFlipkart%2BAssured&p%5B%5D=facets.availability%255B%255D%3DExclude%2BOut%2Bof%2BStock&p%5B%5D=facets.rating%255B%255D%3D4%25E2%2598%2585%2B%2526%2Babove&fm=neo%2Fmerchandising&iid=M_67215d0a-b5b3-4f7b-8dd9-1214b48df413_1_372UD5BXDFYS_MC.ISH0DICFI5H5&otracker=hp_rich_navigation_9_1.navigationCard.RICH_NAVIGATION_Electronics~Audio~Remote%2BControl_ISH0DICFI5H5&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_9_L2_view-all&cid=ISH0DICFI5H5'>Remote Control
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/home-entertainment/video-players-accessories/dth/pr?sid=ckf%2Csee%2C9wn&p%5B%5D=facets.availability%255B%255D%3DExclude%2BOut%2Bof%2BStock&p%5B%5D=facets.rating%255B%255D%3D3%25E2%2598%2585%2B%2526%2Babove&fm=neo%2Fmerchandising&iid=M_6d9af74e-1add-4da8-aed8-bb4602f42141_1_372UD5BXDFYS_MC.2GP2TT41M6US&otracker=hp_rich_navigation_10_1.navigationCard.RICH_NAVIGATION_Electronics~Audio~DTH%2BSet%2Btop%2Bbox_2GP2TT41M6US&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_10_L2_view-all&cid=2GP2TT41M6US'>DTH Set top box
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/mobile-accessories/headphone-pouches-cases/pr?sid=tyy%2C4mr%2Cjqb&otracker=categorytree&p%5B%5D=facets.fulfilled_by%255B%255D%3DFlipkart%2BAssured&p%5B%5D=facets.rating%255B%255D%3D4%25E2%2598%2585%2B%2526%2Babove&fm=neo%2Fmerchandising&iid=M_dba57113-2182-40ab-aa95-ba1574e73aec_1_372UD5BXDFYS_MC.ZH2B4VHLSO7X&otracker=hp_rich_navigation_11_1.navigationCard.RICH_NAVIGATION_Electronics~Audio~Headphones%2BPouch%2B%2526%2BCase%2BCovers_ZH2B4VHLSO7X&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_11_L2_view-all&cid=ZH2B4VHLSO7X'>Headphones Pouch & Case Covers
                        </a>
                        </>
                    )}
                    {displayItem === 'cam' && (
                        <>
                        <span className='left_names'>MORE IN CAMERAS & ACCESSORIES</span>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/camera-clp-store?otracker=nmenu_sub_Electronics_0_Camera&fm=neo%2Fmerchandising&iid=M_8426e404-9e55-4af0-a5b7-994198e87dbd_1_372UD5BXDFYS_MC.OIJX5RUUE7K7&otracker=hp_rich_navigation_1_1.navigationCard.RICH_NAVIGATION_Electronics~Cameras%2B%2526%2BAccessories~All_OIJX5RUUE7K7&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_1_L2_view-all&cid=OIJX5RUUE7K7'>All
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/cameras/dslr-mirrorless/pr?sid=jek,p31,trv&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_4404b32e-3941-4099-bdd1-3a88603efef8_1_372UD5BXDFYS_MC.0KU83APBTPQK&otracker=hp_rich_navigation_2_1.navigationCard.RICH_NAVIGATION_Electronics~Cameras%2B%2526%2BAccessories~DSLR%2B%2526%2BMirrorless_0KU83APBTPQK&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_2_L2_view-all&cid=0KU83APBTPQK'>DSLR & Mirrorless
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/cameras/sports-action/pr?sid=jek,p31,s3q&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_585ae086-0dab-40b4-8100-221543cdf323_1_372UD5BXDFYS_MC.USNEKS3GMWC8&otracker=hp_rich_navigation_3_1.navigationCard.RICH_NAVIGATION_Electronics~Cameras%2B%2526%2BAccessories~Sports%2B%2526%2Baction_USNEKS3GMWC8&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_3_L2_view-all&cid=USNEKS3GMWC8'>Sports & action
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/cameras/point-and-shoot/pr?sid=jek,p31,nxa&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_917950c0-8c7c-4c67-8d63-fd0dca07d677_1_372UD5BXDFYS_MC.P1BN4YYT2VZK&otracker=hp_rich_navigation_4_1.navigationCard.RICH_NAVIGATION_Electronics~Cameras%2B%2526%2BAccessories~Point%2B%2526%2BShoot_P1BN4YYT2VZK&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_4_L2_view-all&cid=P1BN4YYT2VZK'>Point & Shoot
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/cameras/instant-cameras/pr?sid=jek,p31,ysu&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_b1254c3f-727c-4929-a953-611142709ac1_1_372UD5BXDFYS_MC.VV71ANAQQE59&otracker=hp_rich_navigation_5_1.navigationCard.RICH_NAVIGATION_Electronics~Cameras%2B%2526%2BAccessories~Instant%2BCameras_VV71ANAQQE59&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_5_L2_view-all&cid=VV71ANAQQE59'>Instant Cameras
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/cameras/camcorders/pr?sid=jek,p31,enu&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_85404be9-1afd-445d-b946-9fd3754ba4b3_1_372UD5BXDFYS_MC.PDANZ90EJQA0&otracker=hp_rich_navigation_6_1.navigationCard.RICH_NAVIGATION_Electronics~Cameras%2B%2526%2BAccessories~Camcorders_PDANZ90EJQA0&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_6_L2_view-all&cid=PDANZ90EJQA0'>Camcorders
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/camera-accessories/tripods/pr?sid=jek,6l2,ce6&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_2cfe5e27-4e8e-4432-b97e-30fa9ac2c4e8_1_372UD5BXDFYS_MC.XRI8PU4LB3H7&otracker=hp_rich_navigation_7_1.navigationCard.RICH_NAVIGATION_Electronics~Cameras%2B%2526%2BAccessories~Camera%2Btripods_XRI8PU4LB3H7&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_7_L2_view-all&cid=XRI8PU4LB3H7'>Camera tripods
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/camera-accessories/camera-lenses/pr?sid=jek,6l2,e9y&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_ef842fd2-7516-4cea-834a-5ff7b76fa4d6_1_372UD5BXDFYS_MC.YWGFFYG3ODLC&otracker=hp_rich_navigation_8_1.navigationCard.RICH_NAVIGATION_Electronics~Cameras%2B%2526%2BAccessories~Camera%2BLenses_YWGFFYG3ODLC&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_8_L2_view-all&cid=YWGFFYG3ODLC'>Camera Lenses
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/cameras/drones/pr?sid=jek,p31,jnp&q=drone&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_ab48322a-70ab-4a91-87ee-245376283ad8_1_372UD5BXDFYS_MC.A96IJ4K9AU5X&otracker=hp_rich_navigation_9_1.navigationCard.RICH_NAVIGATION_Electronics~Cameras%2B%2526%2BAccessories~Drone_A96IJ4K9AU5X&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_9_L2_view-all&cid=A96IJ4K9AU5X'>Drone
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/camera-accessories/flashes/pr?sid=jek,6l2,mx9&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_e209b8d0-c419-42fa-afcd-10b17c50509c_1_372UD5BXDFYS_MC.N0PM3RNK9IXX&otracker=hp_rich_navigation_10_1.navigationCard.RICH_NAVIGATION_Electronics~Cameras%2B%2526%2BAccessories~Flashes_N0PM3RNK9IXX&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_10_L2_view-all&cid=N0PM3RNK9IXX'>Flashes
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/camera-accessories/gimbals/pr?sid=jek,6l2,ykl&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_797aa011-4435-44b7-b03f-82653eda0476_1_372UD5BXDFYS_MC.HCWBPQG4HN23&otracker=hp_rich_navigation_11_1.navigationCard.RICH_NAVIGATION_Electronics~Cameras%2B%2526%2BAccessories~Gimbals_HCWBPQG4HN23&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_11_L2_view-all&cid=HCWBPQG4HN23'>Gimbals
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/camera-accessories/binoculars-optics/pr?sid=jek,6l2,epu&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_ee7287b4-bb07-413b-a3e5-b509496bff79_1_372UD5BXDFYS_MC.O02ZN94LGYTA&otracker=hp_rich_navigation_12_1.navigationCard.RICH_NAVIGATION_Electronics~Cameras%2B%2526%2BAccessories~Binoculars_O02ZN94LGYTA&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_12_L2_view-all&cid=O02ZN94LGYTA'>Binoculars
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/cameras-accessories/camera-accessories/pr?sid=jek,6l2&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_31824f19-c558-4afe-b4cc-b592cda58e3f_1_372UD5BXDFYS_MC.01K26CJ6LE3K&otracker=hp_rich_navigation_13_1.navigationCard.RICH_NAVIGATION_Electronics~Cameras%2B%2526%2BAccessories~Other%2BCamera%2BAccessories_01K26CJ6LE3K&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_13_L2_view-all&cid=01K26CJ6LE3K'>Other Camera Accessories
                        </a>
                        </>
                    )}
                    {displayItem === 'computer' && (
                        <>
                        <span className='left_names'>MORE IN COMPUTER PERIPHERALS</span>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/computers/pr?sid=6bo&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_24252def-28f0-428b-ab78-257c6f398831_1_372UD5BXDFYS_MC.N1FS7M5TXW1Q&otracker=hp_rich_navigation_1_1.navigationCard.RICH_NAVIGATION_Electronics~Computer%2BPeripherals~All_N1FS7M5TXW1Q&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_1_L2_view-all&cid=N1FS7M5TXW1Q'>All
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/computers/computer-peripherals/printers-inks/printers/pr?sid=6bo,tia,ffn,t64&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_72d03e44-3832-446f-b104-3a8df7a178b9_1_372UD5BXDFYS_MC.ES1XN5J8PT49&otracker=hp_rich_navigation_2_1.navigationCard.RICH_NAVIGATION_Electronics~Computer%2BPeripherals~Printers_ES1XN5J8PT49&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_2_L2_view-all&cid=ES1XN5J8PT49'>Printers
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/computers/monitors/pr?sid=6bo,9no&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_e823fccf-b6bd-4b0d-a44e-b215dddf1d8f_1_372UD5BXDFYS_MC.ECL5SFI77NSY&otracker=hp_rich_navigation_3_1.navigationCard.RICH_NAVIGATION_Electronics~Computer%2BPeripherals~Monitors_ECL5SFI77NSY&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_3_L2_view-all&cid=ECL5SFI77NSY'>Monitors
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/computers/computer-peripherals/projectors/pr?sid=6bo,tia,1hx&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_46eba218-d211-4f27-ad43-fdd4bc69baad_1_372UD5BXDFYS_MC.ICU0BSHGNPBF&otracker=hp_rich_navigation_4_1.navigationCard.RICH_NAVIGATION_Electronics~Computer%2BPeripherals~Projectors_ICU0BSHGNPBF&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_4_L2_view-all&cid=ICU0BSHGNPBF'>Projectors
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/computers/computer-peripherals/portable-projectors/pr?sid=6bo,tia,fju&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_36b3ed0c-a488-4437-9c27-1ebf8c04aae7_1_372UD5BXDFYS_MC.HTRO1VG9Q0WB&otracker=hp_rich_navigation_5_1.navigationCard.RICH_NAVIGATION_Electronics~Computer%2BPeripherals~Portable%2BProjectors_HTRO1VG9Q0WB&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_5_L2_view-all&cid=HTRO1VG9Q0WB'>Portable Projectors
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/computers/computer-peripherals/printers-inks/toners/pr?sid=6bo,tia,ffn,iv0&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_2f9ab7f5-bccf-4f02-90e2-fb13c44e46c3_1_372UD5BXDFYS_MC.UNFNJHH5FFRU&otracker=hp_rich_navigation_6_1.navigationCard.RICH_NAVIGATION_Electronics~Computer%2BPeripherals~Toners_UNFNJHH5FFRU&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_6_L2_view-all&cid=UNFNJHH5FFRU'>Toners
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/computers/printers-inks/ink-cartridges/pr?sid=6bo,ffn,adt&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_398beb8c-e4ac-4189-8fe4-5d03e0d764d4_1_372UD5BXDFYS_MC.OSXVIBZW5ED1&otracker=hp_rich_navigation_7_1.navigationCard.RICH_NAVIGATION_Electronics~Computer%2BPeripherals~Ink%2BCartridges_OSXVIBZW5ED1&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_7_L2_view-all&cid=OSXVIBZW5ED1'>Ink Catridges
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/computers/computer-peripherals/printers-inks/ink-bottles/pr?sid=6bo,tia,ffn,eqr&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_2db5a436-ed2a-42ec-ad48-16e460e5b377_1_372UD5BXDFYS_MC.6TLV322PO57W&otracker=hp_rich_navigation_8_1.navigationCard.RICH_NAVIGATION_Electronics~Computer%2BPeripherals~Ink%2BBottles_6TLV322PO57W&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_8_L2_view-all&cid=6TLV322PO57W'>Ink Bottles
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/computers/printers-inks/receipt-printers/pr?sid=6bo,ffn,0kj&q=receipt+printers&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_c2ebbba0-a234-4175-a3b0-f390cb1eee75_1_372UD5BXDFYS_MC.SJ77PKAMR79Y&otracker=hp_rich_navigation_9_1.navigationCard.RICH_NAVIGATION_Electronics~Computer%2BPeripherals~Receipt%2BPrinters_SJ77PKAMR79Y&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_9_L2_view-all&cid=SJ77PKAMR79Y'>Receipt Printers
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/pens-stationery/office-equipments/lamination-machines/pr?sid=dgv,id7,cl3&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_b290438c-e9c0-4f48-9c8c-7aae15b99e5a_1_372UD5BXDFYS_MC.RQMXEKFJ63FA&otracker=hp_rich_navigation_10_1.navigationCard.RICH_NAVIGATION_Electronics~Computer%2BPeripherals~Lamination%2BMachines_RQMXEKFJ63FA&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_10_L2_view-all&cid=RQMXEKFJ63FA'>Lamination Machines
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/pens-stationery/office-equipments/note-counting-machines/pr?sid=dgv,id7,s1s&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_ea7c5cbb-0c0a-4d11-8fb8-cec7a4372406_1_372UD5BXDFYS_MC.ISZ3TBCYD4AE&otracker=hp_rich_navigation_11_1.navigationCard.RICH_NAVIGATION_Electronics~Computer%2BPeripherals~Note%2BCounting%2BMachines_ISZ3TBCYD4AE&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_11_L2_view-all&cid=ISZ3TBCYD4AE'>Note Counting Machines
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/pens-stationery/office-equipments/barcode-scanners/pr?sid=dgv,id7,wks&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_44dbbf23-6eb6-4603-82d0-d44e63972c3c_1_372UD5BXDFYS_MC.TP4F6I2SFSMM&otracker=hp_rich_navigation_12_1.navigationCard.RICH_NAVIGATION_Electronics~Computer%2BPeripherals~Barcode%2BScanners_TP4F6I2SFSMM&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_12_L2_view-all&cid=TP4F6I2SFSMM'>Barcode Scanners
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/pens-stationery/office-equipments/currency-detectors/pr?sid=dgv,id7,xqp&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_5ab7381f-5b72-4599-ba19-92987626a21e_1_372UD5BXDFYS_MC.VJY9JLYDXN1D&otracker=hp_rich_navigation_13_1.navigationCard.RICH_NAVIGATION_Electronics~Computer%2BPeripherals~Currency%2BDetectors_VJY9JLYDXN1D&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_13_L2_view-all&cid=VJY9JLYDXN1D'>Currency Detectors</a>
                        </>
                    )}
                    {displayItem === 'game' && (
                        <>
                        <span className='left_names'>MORE IN GAMING</span>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/gaming/pr?sid=4rr&fm=neo%2Fmerchandising&iid=M_267e9d76-21fa-435f-b161-73fcd7e890c1_1_372UD5BXDFYS_MC.T6Z44HHCR56C&otracker=hp_rich_navigation_1_1.navigationCard.RICH_NAVIGATION_Electronics~Gaming~All_T6Z44HHCR56C&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_1_L2_view-all&cid=T6Z44HHCR56C'>All
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/gaming/gaming-consoles/pr?sid=4rr,x1m&fm=neo%2Fmerchandising&iid=M_6a0529af-b2c1-41ac-9291-7fc4af1cd961_1_372UD5BXDFYS_MC.E8WPY497D45H&otracker=hp_rich_navigation_2_1.navigationCard.RICH_NAVIGATION_Electronics~Gaming~Gaming%2BConsoles_E8WPY497D45H&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_2_L2_view-all&cid=E8WPY497D45H'>Gaming Consoles
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/gaming-accesories/mouse/pr?sid=4rr,km5,18a&fm=neo%2Fmerchandising&iid=M_ce11504a-d440-44ad-9581-0a2de41249fa_1_372UD5BXDFYS_MC.DZSR0ADA14Y0&otracker=hp_rich_navigation_3_1.navigationCard.RICH_NAVIGATION_Electronics~Gaming~Gaming%2BMouse_DZSR0ADA14Y0&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_3_L2_view-all&cid=DZSR0ADA14Y0'>Gaming Mouse
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/gaming-accesories/keyboards/pr?sid=4rr,km5,3oe&fm=neo%2Fmerchandising&iid=M_f863e2b9-5262-4c6d-8707-485c5c7f9dff_1_372UD5BXDFYS_MC.MQWMVFWNEEZH&otracker=hp_rich_navigation_4_1.navigationCard.RICH_NAVIGATION_Electronics~Gaming~Gaming%2BKeyboards_MQWMVFWNEEZH&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_4_L2_view-all&cid=MQWMVFWNEEZH'>Gaming Keyboards
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/gaming-accesories/controllers/gamepads/pr?sid=4rr,km5,dom,a7g&fm=neo%2Fmerchandising&iid=M_c2572288-d86d-4a98-954f-80bb208046c2_1_372UD5BXDFYS_MC.RITRJDS8NN9O&otracker=hp_rich_navigation_5_1.navigationCard.RICH_NAVIGATION_Electronics~Gaming~Gamepads_RITRJDS8NN9O&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_5_L2_view-all&cid=RITRJDS8NN9O'>Gamepads
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/gaming/games/pr?sid=4rr,fa6&fm=neo%2Fmerchandising&iid=M_754122f0-99e0-4cc9-96a0-0e7cfed005c2_1_372UD5BXDFYS_MC.7OVL0P8FJ3EW&otracker=hp_rich_navigation_6_1.navigationCard.RICH_NAVIGATION_Electronics~Gaming~Games_7OVL0P8FJ3EW&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_6_L2_view-all&cid=7OVL0P8FJ3EW'>Games
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/gaming-accesories/accessory-kits/pr?sid=4rr,km5,y2t&fm=neo%2Fmerchandising&iid=M_49f1c0f4-1280-4723-b8c6-1c9432c9c1af_1_372UD5BXDFYS_MC.1ATSX4FDR0C0&otracker=hp_rich_navigation_7_1.navigationCard.RICH_NAVIGATION_Electronics~Gaming~Accessory%2BKits_1ATSX4FDR0C0&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_7_L2_view-all&cid=1ATSX4FDR0C0'>Accessory Kits
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/gaming-accesories/gaming-accessories-combo/pr?sid=4rr,km5,q2r&fm=neo%2Fmerchandising&iid=M_056d8c98-7351-48a6-9269-d5ed8911b8ff_1_372UD5BXDFYS_MC.N3DZLO0MAU61&otracker=hp_rich_navigation_8_1.navigationCard.RICH_NAVIGATION_Electronics~Gaming~Gaming%2BAccessories%2BCombo_N3DZLO0MAU61&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_8_L2_view-all&cid=N3DZLO0MAU61'>Gaming Accessories Combo
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/gaming-accesories/mousepads/pr?sid=4rr,km5,jd7&fm=neo%2Fmerchandising&iid=M_3d41840c-0fe9-413c-8e02-f7bb64ea0754_1_372UD5BXDFYS_MC.OUURVJXDUBM5&otracker=hp_rich_navigation_9_1.navigationCard.RICH_NAVIGATION_Electronics~Gaming~Gaming%2BMousepads_OUURVJXDUBM5&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_9_L2_view-all&cid=OUURVJXDUBM5'>Gaming Mousepads
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/gaming/membership-cards/pr?sid=4rr,0se&fm=neo%2Fmerchandising&iid=M_f642e73f-3715-4b41-9546-66254e01e8af_1_372UD5BXDFYS_MC.SP232QKK5LFP&otracker=hp_rich_navigation_10_1.navigationCard.RICH_NAVIGATION_Electronics~Gaming~Membership%2BCards_SP232QKK5LFP&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_10_L2_view-all&cid=SP232QKK5LFP'>Membership Cards
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/gaming-accesories/controllers/pr?sid=4rr,km5,r39&fm=neo%2Fmerchandising&iid=M_0f5132ad-57a8-4076-815b-adf05c6615eb_1_372UD5BXDFYS_MC.SMVV3EID3SEE&otracker=hp_rich_navigation_11_1.navigationCard.RICH_NAVIGATION_Electronics~Gaming~Controllers_SMVV3EID3SEE&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_11_L2_view-all&cid=SMVV3EID3SEE'>controllers
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/gaming/gaming-accessories/pr?sid=4rr,km5&fm=neo%2Fmerchandising&iid=M_f881d8bb-da0d-4216-9424-da1d08f14f79_1_372UD5BXDFYS_MC.9XGWZQHK8DVQ&otracker=hp_rich_navigation_12_1.navigationCard.RICH_NAVIGATION_Electronics~Gaming~Other%2BGaming%2BAccessories_9XGWZQHK8DVQ&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_12_L2_view-all&cid=9XGWZQHK8DVQ'>Other Gaming Accessories
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/gaming/gaming-components/pr?sid=4rr,tin&fm=neo%2Fmerchandising&iid=M_24dfe105-0e4a-422e-b258-951de59b2797_1_372UD5BXDFYS_MC.ZDXML6UF3VG5&otracker=hp_rich_navigation_13_1.navigationCard.RICH_NAVIGATION_Electronics~Gaming~Gaming%2BComponents_ZDXML6UF3VG5&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_13_L2_view-all&cid=ZDXML6UF3VG5'>Gaming Components
                        </a>
                        </>
                    )}
                    {displayItem === 'health' && (
                        <>
                        <span className='left_names'>MORE IN HEALTH & PERSONAL CARE</span>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/health-personal-care-appliances/pr?sid=zlw&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_6447447e-7390-40b9-bca6-ee586436e969_1_372UD5BXDFYS_MC.64HIYQWAZGM2&otracker=hp_rich_navigation_1_1.navigationCard.RICH_NAVIGATION_Electronics~Health%2B%2526%2BPersonal%2BCare~All_64HIYQWAZGM2&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_1_L2_view-all&cid=64HIYQWAZGM2'>All
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/health-personal-care-appliances/personal-care-appliances/trimmers/pr?sid=zlw,79s,by3&fm=neo%2Fmerchandising&iid=M_1e25a334-fee0-4280-b310-0319af4ebbb8_1_372UD5BXDFYS_MC.OFBY8SW4J77F&otracker=hp_rich_navigation_2_1.navigationCard.RICH_NAVIGATION_Electronics~Health%2B%2526%2BPersonal%2BCare~Trimmers_OFBY8SW4J77F&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_2_L2_view-all&cid=OFBY8SW4J77F'>Trimmers
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/health-personal-care-appliances/personal-care-appliances/shavers/pr?sid=zlw,79s,u3j&fm=neo%2Fmerchandising&iid=M_a2bfd355-1ac1-46c1-a557-47b346632e6b_1_372UD5BXDFYS_MC.7IRTITZ74DB6&otracker=hp_rich_navigation_3_1.navigationCard.RICH_NAVIGATION_Electronics~Health%2B%2526%2BPersonal%2BCare~Shavers_7IRTITZ74DB6&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_3_L2_view-all&cid=7IRTITZ74DB6'>Shavers
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/health-personal-care-appliances/personal-care-appliances/hair-straighteners/pr?sid=zlw,79s,dk5&fm=neo%2Fmerchandising&iid=M_38003f9b-b779-425a-9ab1-e52b52be77f5_1_372UD5BXDFYS_MC.ELOUYMFSEDZP&otracker=hp_rich_navigation_4_1.navigationCard.RICH_NAVIGATION_Electronics~Health%2B%2526%2BPersonal%2BCare~Hair%2BStraighteners_ELOUYMFSEDZP&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_4_L2_view-all&cid=ELOUYMFSEDZP'>Hair Straighteners
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/health-personal-care-appliances/personal-care-appliances/hair-dryers/pr?sid=zlw,79s,mh8&fm=neo%2Fmerchandising&iid=M_4d9bf22c-dc71-43be-9661-e03be16774dc_1_372UD5BXDFYS_MC.2EGCDFYD5VUX&otracker=hp_rich_navigation_5_1.navigationCard.RICH_NAVIGATION_Electronics~Health%2B%2526%2BPersonal%2BCare~Hair%2BDryers_2EGCDFYD5VUX&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_5_L2_view-all&cid=2EGCDFYD5VUX'>Hair Dryers
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/health-personal-care-appliances/personal-care-appliances/epilators/pr?sid=zlw,79s,k32&fm=neo%2Fmerchandising&iid=M_bc7c6dbd-04e4-4aaf-a062-4bf7b8741990_1_372UD5BXDFYS_MC.QQM2GVC3N9QD&otracker=hp_rich_navigation_6_1.navigationCard.RICH_NAVIGATION_Electronics~Health%2B%2526%2BPersonal%2BCare~Epilators_QQM2GVC3N9QD&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_6_L2_view-all&cid=QQM2GVC3N9QD'>Epilators
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/health-personal-care-appliances/health-care/health-care-devices/glucometers-and-accessories/pr?sid=zlw,nyl,bvv,x5e&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_a922365a-ebd7-4a3a-8d13-2a8e71bbe873_1_372UD5BXDFYS_MC.KZU4CYXC0BLS&otracker=hp_rich_navigation_7_1.navigationCard.RICH_NAVIGATION_Electronics~Health%2B%2526%2BPersonal%2BCare~Glucometers%2BAnd%2BAccessories_KZU4CYXC0BLS&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_7_L2_view-all&cid=KZU4CYXC0BLS'>Glucometers And Accessories
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/health-personal-care-appliances/health-care/health-care-devices/blood-pressure-monitors/pr?sid=zlw,nyl,bvv,kbk&fm=neo%2Fmerchandising&iid=M_63583690-1179-4c2c-a159-9c360c4574e5_1_372UD5BXDFYS_MC.Q7EQMP4ZKJE6&otracker=hp_rich_navigation_8_1.navigationCard.RICH_NAVIGATION_Electronics~Health%2B%2526%2BPersonal%2BCare~Blood%2BPressure%2BMonitors_Q7EQMP4ZKJE6&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_8_L2_view-all&cid=Q7EQMP4ZKJE6'>Blood Pressure Monitors
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/health-personal-care-appliances/health-care/health-care-devices/digital-thermometers/pr?sid=zlw,nyl,bvv,h7c&fm=neo%2Fmerchandising&iid=M_16904bd5-4eb9-44c8-af4f-566e9a9d00c0_1_372UD5BXDFYS_MC.27EDOQ92WNZI&otracker=hp_rich_navigation_9_1.navigationCard.RICH_NAVIGATION_Electronics~Health%2B%2526%2BPersonal%2BCare~Digital%2BThermometers_27EDOQ92WNZI&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_9_L2_view-all&cid=27EDOQ92WNZI'>Digital Thermometers
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/health-personal-care-appliances/health-care/health-care-devices/weighing-scales/pr?sid=zlw,nyl,bvv,o4o&fm=neo%2Fmerchandising&iid=M_8b441f1d-d1f9-47bd-9bc9-dbf251e1fa0c_1_372UD5BXDFYS_MC.YXKV9X7BRCSA&otracker=hp_rich_navigation_10_1.navigationCard.RICH_NAVIGATION_Electronics~Health%2B%2526%2BPersonal%2BCare~Weighing%2BScales_YXKV9X7BRCSA&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_10_L2_view-all&cid=YXKV9X7BRCSA'>Weighing Scales
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/health-personal-care-appliances/health-care/health-care-devices/massagers/pr?sid=zlw,nyl,bvv,d9z&fm=neo%2Fmerchandising&iid=M_eb0aa211-66e1-4f96-ac1f-5aa693c9b285_1_372UD5BXDFYS_MC.SJNDUOJI4Z97&otracker=hp_rich_navigation_11_1.navigationCard.RICH_NAVIGATION_Electronics~Health%2B%2526%2BPersonal%2BCare~Massagers_SJNDUOJI4Z97&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_11_L2_view-all&cid=SJNDUOJI4Z97'>Massagers
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/health-personal-care-appliances/health-care/health-care-devices/nebulizers/pr?sid=zlw,nyl,bvv,dxu&fm=neo%2Fmerchandising&iid=M_a7e0d564-72b1-48f3-bcde-2901fcc685c4_1_372UD5BXDFYS_MC.LQVG6XDKGHH4&otracker=hp_rich_navigation_12_1.navigationCard.RICH_NAVIGATION_Electronics~Health%2B%2526%2BPersonal%2BCare~Nebulizers_LQVG6XDKGHH4&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_12_L2_view-all&cid=LQVG6XDKGHH4'>Nebulizers
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/health-personal-care-appliances/health-care/health-care-devices/vaporizer/pr?sid=zlw,nyl,bvv,4cw&fm=neo%2Fmerchandising&iid=M_52c80505-489a-4f18-a6f9-b1b1608d9486_1_372UD5BXDFYS_MC.VZMBZOH2S8D8&otracker=hp_rich_navigation_13_1.navigationCard.RICH_NAVIGATION_Electronics~Health%2B%2526%2BPersonal%2BCare~Vaporizers_VZMBZOH2S8D8&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_13_L2_view-all&cid=VZMBZOH2S8D8'>Vaporizers
                        </a>
                        </>
                    )}
                    {displayItem === 'lap' && (
                        <>
                        <span className='left_names'>MORE IN LAPTOP ACCESSORIES</span>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/offers-list/itaccessories?screen=dynamic&pk=themeViews%3DITAcce%3Aapp%2CITAcce%3Adesk~widgetType%3DdealCard~contentType%3Dneo&wid=2.dealCard.OMU&fm=neo%2Fmerchandising&iid=M_a08d4927-ae7e-48d4-8ebe-d6bf1715d7dc_1_372UD5BXDFYS_MC.E26ZSFVM8EG6&otracker=hp_rich_navigation_1_1.navigationCard.RICH_NAVIGATION_Electronics~Laptop%2BAccessories~All_E26ZSFVM8EG6&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_1_L2_view-all&cid=E26ZSFVM8EG6'>All
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/laptop-accessories/mouse/pr?sid=6bo,ai3,2ay&fm=neo%2Fmerchandising&iid=M_1843833b-424a-4627-9a0e-c7652fbabc6c_1_372UD5BXDFYS_MC.EUWLZTDCBGY3&otracker=hp_rich_navigation_2_1.navigationCard.RICH_NAVIGATION_Electronics~Laptop%2BAccessories~Mouse_EUWLZTDCBGY3&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_2_L2_view-all&cid=EUWLZTDCBGY3'>Mouse
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/laptop-accessories/keyboards/pr?sid=6bo,ai3,3oe&fm=neo%2Fmerchandising&iid=M_7a9d709f-0373-42d2-bbb3-cbaf8507d9b6_1_372UD5BXDFYS_MC.4W6EDOSQC5TY&otracker=hp_rich_navigation_3_1.navigationCard.RICH_NAVIGATION_Electronics~Laptop%2BAccessories~Laptop%2BKeyboards_4W6EDOSQC5TY&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_3_L2_view-all&cid=4W6EDOSQC5TY'>Laptop Keyboards
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/computers/network-components/routers/pr?sid=6bo,70k,2a2&fm=neo%2Fmerchandising&iid=M_33344909-9228-42fa-8908-ae7a6d459349_1_372UD5BXDFYS_MC.8CZP8FRF8JEV&otracker=hp_rich_navigation_4_1.navigationCard.RICH_NAVIGATION_Electronics~Laptop%2BAccessories~Router_8CZP8FRF8JEV&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_4_L2_view-all&cid=8CZP8FRF8JEV'>Router
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/computers/network-components/data-cards/pr?sid=6bo,70k,o47&fm=neo%2Fmerchandising&iid=M_157c9e6f-682e-4835-89ac-1209b3902d24_1_372UD5BXDFYS_MC.DGEES4AM8AJT&otracker=hp_rich_navigation_5_1.navigationCard.RICH_NAVIGATION_Electronics~Laptop%2BAccessories~Data%2BCards_DGEES4AM8AJT&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_5_L2_view-all&cid=DGEES4AM8AJT'>Data Cards
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/laptop-accessories/ups/pr?sid=6bo,ai3,pi1&fm=neo%2Fmerchandising&iid=M_bbb226ac-aad4-40b5-974a-8849169d0b17_1_372UD5BXDFYS_MC.C5WA9ALNLX9Y&otracker=hp_rich_navigation_6_1.navigationCard.RICH_NAVIGATION_Electronics~Laptop%2BAccessories~UPS_C5WA9ALNLX9Y&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_6_L2_view-all&cid=C5WA9ALNLX9Y'>UPS
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/laptop-accessories/usb-gadgets/pr?sid=6bo,ai3,0xm&fm=neo%2Fmerchandising&iid=M_8730a255-c160-4e8a-8b99-4df0d109b905_1_372UD5BXDFYS_MC.WDTPDBAEZKE4&otracker=hp_rich_navigation_7_1.navigationCard.RICH_NAVIGATION_Electronics~Laptop%2BAccessories~USB%2BGadgets_WDTPDBAEZKE4&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_7_L2_view-all&cid=WDTPDBAEZKE4'>USB Gadgets
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/computers/software/pr?sid=6bo,5hp&fm=neo%2Fmerchandising&iid=M_23e51523-90f5-44e9-be6d-51b5fb29f48d_1_372UD5BXDFYS_MC.XHFTNBR6QPL1&otracker=hp_rich_navigation_8_1.navigationCard.RICH_NAVIGATION_Electronics~Laptop%2BAccessories~Security%2BSoftware_XHFTNBR6QPL1&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_8_L2_view-all&cid=XHFTNBR6QPL1'>Security Software
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/laptop-accessories/batteries/pr?sid=6bo,ai3,w65&fm=neo%2Fmerchandising&iid=M_b8a77884-f934-4ecf-86f3-9525727aeab2_1_372UD5BXDFYS_MC.XU52UT8P0EQQ&otracker=hp_rich_navigation_9_1.navigationCard.RICH_NAVIGATION_Electronics~Laptop%2BAccessories~Laptop%2BBattery_XU52UT8P0EQQ&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_9_L2_view-all&cid=XU52UT8P0EQQ'>Laptop Battery
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/laptop-accessories/laptop-adapters/pr?sid=6bo,ai3,8p1&fm=neo%2Fmerchandising&iid=M_0b2a3151-6d12-41ae-9cb4-7be8174d27a8_1_372UD5BXDFYS_MC.I0NAR26T3ENH&otracker=hp_rich_navigation_10_1.navigationCard.RICH_NAVIGATION_Electronics~Laptop%2BAccessories~Laptop%2BAdapter_I0NAR26T3ENH&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_10_L2_view-all&cid=I0NAR26T3ENH'>Laptop Adapter
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/computers/network-components/wireless-usb-adapters/pr?sid=6bo,70k,85j&fm=neo%2Fmerchandising&iid=M_a4ccca95-a05f-41a9-bb4c-3678ae083821_1_372UD5BXDFYS_MC.A3DS62MONZA4&otracker=hp_rich_navigation_11_1.navigationCard.RICH_NAVIGATION_Electronics~Laptop%2BAccessories~Wireless%2BUSB%2BAdapter_A3DS62MONZA4&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_11_L2_view-all&cid=A3DS62MONZA4'>Wireless USB Adapter
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/computers/computer-components/processors/pr?sid=6bo,g0i,17w&fm=neo%2Fmerchandising&iid=M_4e9091ed-ed17-4a68-a4cf-9ca037a7251a_1_372UD5BXDFYS_MC.4FZPP1PB8Q8E&otracker=hp_rich_navigation_12_1.navigationCard.RICH_NAVIGATION_Electronics~Laptop%2BAccessories~Processor_4FZPP1PB8Q8E&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_12_L2_view-all&cid=4FZPP1PB8Q8E'>Processor
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/laptop-accessories/pr?sid=6bo%2Cai3&fm=neo%2Fmerchandising&iid=M_b2cb7ac8-6ceb-46e4-ab63-47ffe4912712_1_372UD5BXDFYS_MC.YSZGLQW3HNUT&otracker=hp_rich_navigation_13_1.navigationCard.RICH_NAVIGATION_Electronics~Laptop%2BAccessories~Other%2BAccessories_YSZGLQW3HNUT&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_13_L2_view-all&cid=YSZGLQW3HNUT'>Other Accessories
                        </a>
                        </>
                    )}
                    {displayItem === 'desktop' && (
                        <>
                        <span className='left_names'>MORE IN LAPTOP AND DESKTOP</span>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/laptops/pr?sid=6bo,b5g&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_6c8da8d1-d54d-499f-aef1-199b9038c929_1_372UD5BXDFYS_MC.F6KJFVU7EOGS&otracker=hp_rich_navigation_1_1.navigationCard.RICH_NAVIGATION_Electronics~Laptop%2Band%2BDesktop~All_F6KJFVU7EOGS&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_1_L2_view-all&cid=F6KJFVU7EOGS'>All
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/laptops-store?fm=neo%2Fmerchandising&iid=M_1d68105f-b346-4749-bfbd-c6d1723c5a58_1_372UD5BXDFYS_MC.WB1CFS0X26D1&otracker=hp_rich_navigation_2_1.navigationCard.RICH_NAVIGATION_Electronics~Laptop%2Band%2BDesktop~Laptops_WB1CFS0X26D1&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_2_L2_view-all&cid=WB1CFS0X26D1'>Laptops
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/gaming/gaming-laptops/pr?sid=4rr,tz1&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_b605162f-b03f-4c4b-a434-870ec7e36aaa_1_372UD5BXDFYS_MC.0OOCG5J6F9WH&otracker=hp_rich_navigation_3_1.navigationCard.RICH_NAVIGATION_Electronics~Laptop%2Band%2BDesktop~Gaming%2BLaptops_0OOCG5J6F9WH&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_3_L2_view-all&cid=0OOCG5J6F9WH'>Gaming Laptops
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/computers/desktop-pcs/pr?sid=6bo,nl4&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_2bea881e-04be-4dc3-953c-7870a058f446_1_372UD5BXDFYS_MC.4L8DNVPX2GZO&otracker=hp_rich_navigation_4_1.navigationCard.RICH_NAVIGATION_Electronics~Laptop%2Band%2BDesktop~Desktop%2BPCs_4L8DNVPX2GZO&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_4_L2_view-all&cid=4L8DNVPX2GZO'>Desktop PCs
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/computers/desktop-pcs/all-in-one-pcs/pr?sid=6bo,nl4,igk&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_45a113dc-952c-4dc9-a523-b072422ecabf_1_372UD5BXDFYS_MC.41UDQIBFZRDS&otracker=hp_rich_navigation_5_1.navigationCard.RICH_NAVIGATION_Electronics~Laptop%2Band%2BDesktop~All%2BIn%2BOne%2BPCs_41UDQIBFZRDS&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_5_L2_view-all&cid=41UDQIBFZRDS'>All In One PCs
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/computers/desktop-pcs/mini-pcs/pr?sid=6bo,nl4,okr&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_93364ecf-10a1-4b5d-8c6a-2961d31d3c17_1_372UD5BXDFYS_MC.BBTU1M6ZGQ1A&otracker=hp_rich_navigation_6_1.navigationCard.RICH_NAVIGATION_Electronics~Laptop%2Band%2BDesktop~Mini%2BPCs_BBTU1M6ZGQ1A&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_6_L2_view-all&cid=BBTU1M6ZGQ1A'>Mini PCs
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/computers/desktop-pcs/tower-pcs/pr?sid=6bo,nl4,dze&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_80b48d08-62ea-49fd-90e1-8a896a177d39_1_372UD5BXDFYS_MC.HVR7DA30LS42&otracker=hp_rich_navigation_7_1.navigationCard.RICH_NAVIGATION_Electronics~Laptop%2Band%2BDesktop~Tower%2BPCs_HVR7DA30LS42&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_7_L2_view-all&cid=HVR7DA30LS42'>Tower PCs
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/ama?id=SU-BYQLD&pageUID=1621506426113&fm=neo%2Fmerchandising&iid=M_fb85a71c-c16a-4711-bdbc-ad8a5380ddd1_1_372UD5BXDFYS_MC.5KEDTECBS1W7&otracker=hp_rich_navigation_8_1.navigationCard.RICH_NAVIGATION_Electronics~Laptop%2Band%2BDesktop~PC%2BFinder_5KEDTECBS1W7&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_8_L2_view-all&cid=5KEDTECBS1W7'>PC Finder
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/laptops-and-desktops-gst-store?fm=neo%2Fmerchandising&iid=M_cecca135-3ca4-4168-ac6d-3df76b07cb4d_1_372UD5BXDFYS_MC.TDJ5P68IUEI2&otracker=hp_rich_navigation_9_1.navigationCard.RICH_NAVIGATION_Electronics~Laptop%2Band%2BDesktop~GST%2BInvoice%2Bon%2BLaptops_TDJ5P68IUEI2&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_9_L2_view-all&cid=TDJ5P68IUEI2'>GST Invoice On Laptops
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/laptop-buying-guide-store?param=01&fm=neo%2Fmerchandising&iid=M_10313ffe-398e-4d1b-9052-5442cd24f0a8_1_372UD5BXDFYS_MC.E31Z7E3OXAM0&otracker=hp_rich_navigation_10_1.navigationCard.RICH_NAVIGATION_Electronics~Laptop%2Band%2BDesktop~Laptop%2BBuying%2BGuide_E31Z7E3OXAM0&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_10_L2_view-all&cid=E31Z7E3OXAM0'>Laptop Buying Guide
                        </a>
                        </>
                    )}
                    {displayItem === 'mobile' && (
                        <>
                        <span className='left_names'>MORE IN MOBILEACCESSORY</span>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/mobile-accessories/pr?sid=tyy,4mr&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_0156a96d-0808-4f00-886f-60c62b585e28_1_372UD5BXDFYS_MC.DFEAMH0SZLF3&otracker=hp_rich_navigation_1_1.navigationCard.RICH_NAVIGATION_Electronics~MobileAccessory~All_DFEAMH0SZLF3&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_1_L2_view-all&cid=DFEAMH0SZLF3'>All
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/mobile-accessories/cases-and-covers/plain-cases-covers/pr?sid=tyy,4mr,q2u,ajg&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_8768acb3-abf5-4d67-9eb8-d7ebd8a71e78_1_372UD5BXDFYS_MC.ZACM6FY9T7PV&otracker=hp_rich_navigation_2_1.navigationCard.RICH_NAVIGATION_Electronics~MobileAccessory~Plain%2BCases_ZACM6FY9T7PV&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_2_L2_view-all&cid=ZACM6FY9T7PV'>Plain Cases
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/mobile-accessories/cases-and-covers/designer-cases-covers/pr?sid=tyy,4mr,q2u,qgl&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_952528fa-6688-4ae0-8485-93fdaa2ca4ab_1_372UD5BXDFYS_MC.Y7DAA3WHIX67&otracker=hp_rich_navigation_3_1.navigationCard.RICH_NAVIGATION_Electronics~MobileAccessory~Designer%2BCases_Y7DAA3WHIX67&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_3_L2_view-all&cid=Y7DAA3WHIX67'>Designer Cases
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/mobile-accessories/screen-guards/pr?sid=tyy,4mr,lrv&otracker=nmenu_sub_Electronics_0_Screenguards&fm=neo%2Fmerchandising&iid=M_06cfa600-01cb-4f5b-b800-64ef167864d0_1_372UD5BXDFYS_MC.MJPULFT64OAZ&otracker=hp_rich_navigation_4_1.navigationCard.RICH_NAVIGATION_Electronics~MobileAccessory~Screen%2BGuards_MJPULFT64OAZ&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_4_L2_view-all&cid=MJPULFT64OAZ'>Screen Guards
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/mobile-accessories/screen-guards/pr?sid=tyy%2C4mr%2Clrv&otracker=nmenu_sub_Electronics_0_Screenguards&p%5B%5D=facets.type%255B%255D%3DCamera%2BLens%2BProtector&fm=neo%2Fmerchandising&iid=M_2e6702c7-7208-4002-a2c1-ac56483f5d1e_1_372UD5BXDFYS_MC.4P769RISTEYM&otracker=hp_rich_navigation_5_1.navigationCard.RICH_NAVIGATION_Electronics~MobileAccessory~Camera%2BLens%2BProtectors_4P769RISTEYM&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_5_L2_view-all&cid=4P769RISTEYM'>Camera Lens Protectors
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/tablet-accessories/cases-covers/pr?sid=tyy,jgu,47g&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_157182a3-ab67-48d9-91a5-d2de6476b764_1_372UD5BXDFYS_MC.N9BCY45C4XW6&otracker=hp_rich_navigation_6_1.navigationCard.RICH_NAVIGATION_Electronics~MobileAccessory~Tablet%2BAccessories_N9BCY45C4XW6&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_6_L2_view-all&cid=N9BCY45C4XW6'>Tablet Accessories
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/mobile-accessories/mobile-chargers/pr?sid=tyy,4mr,tp2&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_df7256ba-19ee-4303-8463-6420a5b702fa_1_372UD5BXDFYS_MC.PYNFMZMP4M8F&otracker=hp_rich_navigation_7_1.navigationCard.RICH_NAVIGATION_Electronics~MobileAccessory~MobileCable_PYNFMZMP4M8F&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_7_L2_view-all&cid=PYNFMZMP4M8F'>MobileCable
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/mobile-accessories/mobile-chargers/pr?sid=tyy,4mr,tp2&marketplace=FLIPKART&fm=neo%2Fmerchandising&iid=M_5fe896ea-214a-4ce1-a5d3-44c11ded232f_1_372UD5BXDFYS_MC.97PPVLW64TYH&otracker=hp_rich_navigation_8_1.navigationCard.RICH_NAVIGATION_Electronics~MobileAccessory~MobileChargingMobileCharger_97PPVLW64TYH&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_8_L2_view-all&cid=97PPVLW64TYH'>MobileChargingMobileCharger
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/mobile-accessories/mobile-pouches/pr?sid=tyy,4mr,xxl&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_4247bdb0-99f3-4af7-9711-441e8bd569a9_1_372UD5BXDFYS_MC.X6V855IITGQJ&otracker=hp_rich_navigation_9_1.navigationCard.RICH_NAVIGATION_Electronics~MobileAccessory~MobilePouches_X6V855IITGQJ&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_9_L2_view-all&cid=X6V855IITGQJ'>MobilePouches
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/mobile-accessories/mobile-flashes/pr?sid=tyy,4mr,kcr&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_d7e901b1-e60a-477a-a11d-0287d833a2ef_1_372UD5BXDFYS_MC.9X1PFUPZNDBU&otracker=hp_rich_navigation_10_1.navigationCard.RICH_NAVIGATION_Electronics~MobileAccessory~MobileFlash_9X1PFUPZNDBU&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_10_L2_view-all&cid=9X1PFUPZNDBU'>MobileFlash
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/mobile-accessories/mobile-holders/pr?sid=tyy,4mr,vnf&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_f1bc341d-7b07-4e0a-a6ef-b9ae55c7f7dc_1_372UD5BXDFYS_MC.AMUKAZCZTO1V&otracker=hp_rich_navigation_11_1.navigationCard.RICH_NAVIGATION_Electronics~MobileAccessory~MobileHolder_AMUKAZCZTO1V&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_11_L2_view-all&cid=AMUKAZCZTO1V'>MobileHolder
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/laptop-accessories/usb-gadgets/pr?sid=6bo,ai3,0xm&marketplace=FLIPKART&fm=neo%2Fmerchandising&iid=M_2fb002f6-7388-4f09-af56-a9600a953c11_1_372UD5BXDFYS_MC.9Y5MVUY3WPX8&otracker=hp_rich_navigation_12_1.navigationCard.RICH_NAVIGATION_Electronics~MobileAccessory~MobileUSBGadget_9Y5MVUY3WPX8&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_12_L2_view-all&cid=9Y5MVUY3WPX8'>MobileUSBGadget
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/mobile-accessories/mobile-enhancements/mobiles-accessories-combos/pr?sid=tyy,4mr,qph,jbu&marketplace=FLIPKART&fm=neo%2Fmerchandising&iid=M_d3d0f6c9-50df-4df7-8ed4-b0ff6a891fcd_1_372UD5BXDFYS_MC.J57WFPGZPA7C&otracker=hp_rich_navigation_13_1.navigationCard.RICH_NAVIGATION_Electronics~MobileAccessory~Mobiles%2BAccessories%2BCombos_J57WFPGZPA7C&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_13_L2_view-all&cid=J57WFPGZPA7C'>Mobile Accessories Combos
                        </a>
                        </>
                    )}
                    {displayItem === 'powerbank' && (
                        <>
                        <span className='left_names'>MORE IN POWERBANK</span>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/mobile-accessories/power-banks/pr?sid=tyy,4mr,fu6&otracker=categorytree&otracker=nmenu_sub_Electronics_0_Power%20Banks&fm=neo%2Fmerchandising&iid=M_60e59d09-0ca8-48e3-b7b7-0737daeda0c1_1_372UD5BXDFYS_MC.0O29592O2FBE&otracker=hp_rich_navigation_1_1.navigationCard.RICH_NAVIGATION_Electronics~Powerbank~All_0O29592O2FBE&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_1_L2_view-all&cid=0O29592O2FBE'>All
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/mobile-accessories/power-banks/pr?sid=tyy,4mr,fu6&otracker=categorytree&otracker=nmenu_sub_Electronics_0_Power%20Banks&fm=neo%2Fmerchandising&iid=M_3691ed01-6b3e-4b3d-8ab0-a26e66882771_1_372UD5BXDFYS_MC.OVPX7VSZ51E3&otracker=hp_rich_navigation_2_1.navigationCard.RICH_NAVIGATION_Electronics~Powerbank~Powerbank_OVPX7VSZ51E3&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_2_L2_view-all&cid=OVPX7VSZ51E3'>Powerbank
                        </a>
                        </>
                    )}
                    {displayItem === 'smarthome' && (
                        <>
                        <span className='left_names'>MORE IN SMART HOME AUTOMATION</span>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/smart-home-automation-store?otracker=nmenu_sub_Electronics_0_Smart%20Home%20Automation&fm=neo%2Fmerchandising&iid=M_5a7a6118-5fbb-4211-b1b5-80d161614d58_1_372UD5BXDFYS_MC.OKB3K0XK7M5M&otracker=hp_rich_navigation_1_1.navigationCard.RICH_NAVIGATION_Electronics~Smart%2BHome%2Bautomation~All_OKB3K0XK7M5M&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_1_L2_view-all&cid=OKB3K0XK7M5M'>All
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/automation-robotics/smart-assistants/pr?sid=igc,amm&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_fba47ca3-7db4-46ac-9dde-d8caef51ccec_1_372UD5BXDFYS_MC.2V5JCCGQ8OK7&otracker=hp_rich_navigation_2_1.navigationCard.RICH_NAVIGATION_Electronics~Smart%2BHome%2Bautomation~Smart%2BAssistants_2V5JCCGQ8OK7&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_2_L2_view-all&cid=2V5JCCGQ8OK7'>Smart Assistants
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/automation-robotics/smart-lighting/pr?sid=igc,b4q&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_77a40110-7262-4bf9-a24b-7b02800d368b_1_372UD5BXDFYS_MC.SVYH9PFY273Y&otracker=hp_rich_navigation_3_1.navigationCard.RICH_NAVIGATION_Electronics~Smart%2BHome%2Bautomation~Smart%2BLights_SVYH9PFY273Y&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_3_L2_view-all&cid=SVYH9PFY273Y'>Smart Lights
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/automation-robotics/surveillance-devices/pr?sid=igc,j69&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_4b2a13e2-7193-4535-be2e-df5b32889013_1_372UD5BXDFYS_MC.CM2129YEPDO0&otracker=hp_rich_navigation_4_1.navigationCard.RICH_NAVIGATION_Electronics~Smart%2BHome%2Bautomation~Smart%2BCameras_CM2129YEPDO0&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_4_L2_view-all&cid=CM2129YEPDO0'>Smart Cameras
                        </a>
                        <a className='fashion_rightlink'  href='https://www.flipkart.com/automation-robotics/smart-switches/pr?sid=igc,snr&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_3d3269c8-87db-4eab-b5ed-3ba28071fc84_1_372UD5BXDFYS_MC.NB8X7H6OOQX7&otracker=hp_rich_navigation_5_1.navigationCard.RICH_NAVIGATION_Electronics~Smart%2BHome%2Bautomation~Smart%2BSwitches_NB8X7H6OOQX7&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_5_L2_view-all&cid=NB8X7H6OOQX7'>Smart Switches
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/automation-robotics/smart-door-locks/pr?sid=igc,u0f&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_b07e7d35-598d-421e-a6c9-dba6c0cb40d4_1_372UD5BXDFYS_MC.3ME8QI62F73N&otracker=hp_rich_navigation_6_1.navigationCard.RICH_NAVIGATION_Electronics~Smart%2BHome%2Bautomation~Smart%2BDoor%2Blocks_3ME8QI62F73N&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_6_L2_view-all&cid=3ME8QI62F73N'>Smart Door locks
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/automation-robotics/sensors-alarms/pr?sid=igc,v7d&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_0d568ff7-0e5a-4444-a44e-ee8e3458f963_1_372UD5BXDFYS_MC.AGRQ225ZHWPO&otracker=hp_rich_navigation_7_1.navigationCard.RICH_NAVIGATION_Electronics~Smart%2BHome%2Bautomation~Sensors%2B%2526%2BAlarms_AGRQ225ZHWPO&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_7_L2_view-all&cid=AGRQ225ZHWPO'>Sensors & Alarams
                        </a>
                        </>
                    )}
                    {displayItem === 'smartwear' && (
                        <>
                        <span className='left_names'>MORE IN SMART WEARABLES</span>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/smart-wearables-store?otracker=nmenu_sub_Electronics_0_Smart%20Wearable%20Tech&fm=neo%2Fmerchandising&iid=M_dd71df29-7956-4eb7-8bfd-f947397814b9_1_372UD5BXDFYS_MC.PJCZW15USUCT&otracker=hp_rich_navigation_1_1.navigationCard.RICH_NAVIGATION_Electronics~Smart%2BWearables~All_PJCZW15USUCT&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_1_L2_view-all&cid=PJCZW15USUCT'>All
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/smart-watches-bands-store?fm=neo%2Fmerchandising&iid=M_f9fb9233-5354-4ccb-a7fa-5ae1a2ce33be_1_372UD5BXDFYS_MC.IHINCMUHP4NT&otracker=hp_rich_navigation_2_1.navigationCard.RICH_NAVIGATION_Electronics~Smart%2BWearables~Smart%2BWatches_IHINCMUHP4NT&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_2_L2_view-all&cid=IHINCMUHP4NT'>Smart Watches
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/wearable-smart-devices/smart-bands/pr?sid=ajy%2Cq7p&otracker=nmenu_sub_Electronics_0_Smart%20Bands&fm=neo%2Fmerchandising&iid=M_c0b84e53-c261-4e68-b63c-7ccb88c63e1e_1_372UD5BXDFYS_MC.P1SC3G9KO4ZH&otracker=hp_rich_navigation_3_1.navigationCard.RICH_NAVIGATION_Electronics~Smart%2BWearables~Smart%2BBands_P1SC3G9KO4ZH&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_3_L2_view-all&cid=P1SC3G9KO4ZH'>Smart bands
                        </a>
                        <a className='fashion_rightlink' href='https://www.flipkart.com/wearable-smart-devices/smart-glasses/pr?sid=ajy%2Ctcy&otracker=nmenu_sub_Electronics_0_Smart%20Glasses%20(VR)&fm=neo%2Fmerchandising&iid=M_e4968bda-27d8-4667-aed1-095279e7d523_1_372UD5BXDFYS_MC.DH54Y25LF197&otracker=hp_rich_navigation_4_1.navigationCard.RICH_NAVIGATION_Electronics~Smart%2BWearables~Smart%2BGlasses_DH54Y25LF197&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_4_L2_view-all&cid=DH54Y25LF197'>Smart Glasses
                        </a>
                        </>
                    )}
                </div>
            </div>
        </div>
    </div>
  )
}

export default ElecTippy;