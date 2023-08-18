import React, { useState } from 'react';

import logoelec from './Images/rightaer0.webp';
import logo from './Images/electronicbg.jpg'
import logo01 from './Images/monitor elec.webp';
import logo02 from './Images/best of img 2.webp';
import logo03 from './Images/best of img 3.webp';
import logo04 from './Images/best of img 4.webp';
import logo05 from './Images/best of img 5.webp';
import logo06 from './Images/best of img 6.webp';
import logo07 from './Images/best of img 7.webp';
import logo08 from './Images/best of img 8.webp';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import './Electronics.css';

const Electronics = () => {

  const [currentProduct, setCurrentProduct] = useState(0);

  const products = [
    {
      image: logo01,
      name: 'Monitor',
      price: 'From ₹7949',
      detail: 'Lenovo',
      link: 'https://www.flipkart.com/computers/monitors/pr?sid=6bo%2C9no&fm=neo%2Fmerchandising&iid=M_ce1a6f68-d7d2-4ae1-875c-0d0877d9a11f_2_372UD5BXDFYS_MC.ECL5SFI77NSY&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_3_L2_view-all&cid=ECL5SFI77NSY&p%5B%5D=facets.fulfilled_by%255B%255D%3DFlipkart%2BAssured&p%5B%5D=facets.brand%255B%255D%3DLenovo&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGcm9tIOKCuTc5NDkiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJNb25pdG9ycyJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX0sImhlcm9QaWQiOnsic2luZ2xlVmFsdWVBdHRyaWJ1dGUiOnsia2V5IjoiaGVyb1BpZCIsImluZmVyZW5jZVR5cGUiOiJQSUQiLCJ2YWx1ZSI6Ik1PTkdGWjlSR1FIQ0NVQ1kiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&fm=neo%2Fmerchandising&iid=M_e0251f79-d570-42b9-a24a-b7f28a62e774_3.ZIEW022R2RTS&ppt=None&ppn=None&ssid=rfo2mfjmwg0000001687158416944&otracker=hp_omu_Best%2Bof%2BElectronics_1_3.dealCard.OMU_ZIEW022R2RTS_3&otracker1=hp_omu_PINNED_neo%2Fmerchandising_Best%2Bof%2BElectronics_NA_dealCard_cc_1_NA_view-all_3&cid=ZIEW022R2RTS'
    },

    {
      image: logo02,
      name: 'Best of Shavers',
      price: 'From ₹1,649',
      detail: 'Philips & Havells',
      link: 'https://www.flipkart.com/health-personal-care-appliances/personal-care-appliances/shavers/pr?sid=zlw%2C79s%2Cu3j&fm=neo%2Fmerchandising&iid=M_abc94b2e-c5ad-4d9f-a408-f077e0b71fda_1_372UD5BXDFYS_MC.7IRTITZ74DB6&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_3_L2_view-all&cid=7IRTITZ74DB6&hpid=zGQlhArn0YmltUO10UPgIKp7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGcm9tIOKCuTEsNjQ5Il0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fSwiaGVyb1BpZCI6eyJzaW5nbGVWYWx1ZUF0dHJpYnV0ZSI6eyJrZXkiOiJoZXJvUGlkIiwiaW5mZXJlbmNlVHlwZSI6IlBJRCIsInZhbHVlIjoiU0hWR0syS1dOTkJVVkpCMiIsInZhbHVlVHlwZSI6IlNJTkdMRV9WQUxVRUQifX0sInRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkJlc3Qgb2YgU2hhdmVycyJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&fm=neo%2Fmerchandising&iid=M_60259f19-f9de-4201-991a-7a07807f3401_1.8JR5BM71BUKP&ppt=hp&ppn=homepage&ssid=4yanvshor40000001687165834787&otracker=dynamic_omu_infinite_Best%2Bof%2BElectronics_5_1.dealCard.OMU_INFINITE_8JR5BM71BUKP&cid=8JR5BM71BUKP'
    },

    {
      image: logo03,
      name: 'Best of Trimmers',
      price: 'From ₹399',
      link: 'https://www.flipkart.com/health-personal-care-appliances/~cs-t04l50abp7/pr?sid=zlw&collection-tab-name=Trimmer_OMU&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGcm9tIOKCuTM5OSJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX0sInRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkJlc3Qgb2YgVHJpbW1lcnMiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJoZXJvUGlkIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWUiOiJUTVJHWllFWkVFRVA1WkJCIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fX19fQ%3D%3D&fm=neo%2Fmerchandising&iid=M_1def1f0c-e919-47d0-bfd7-0641c352cd93_1.2IW4SJEJYQMC&ppt=hp&ppn=homepage&ssid=fr454d4q5s0000001687193619331&otracker=dynamic_omu_infinite_Best%2Bof%2BElectronics_2_1.dealCard.OMU_INFINITE_2IW4SJEJYQMC&cid=2IW4SJEJYQMC',
      detail: 'realme, Mi, Philips & more'
    },

    {
      image: logo04,
      name: 'Printers',
      price: 'From ₹3999',
      link: 'https://www.flipkart.com/computers/computer-peripherals/printers-inks/printers/pr?sid=6bo%2Ctia%2Cffn%2Ct64&fm=neo%2Fmerchandising&iid=M_2731d14e-2583-4664-a065-6fc7ea504a6d_2_372UD5BXDFYS_MC.ES1XN5J8PT49&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_2_L2_view-all&cid=ES1XN5J8PT49&p%5B%5D=facets.fulfilled_by%255B%255D%3DFlipkart%2BAssured&p%5B%5D=facets.brand%255B%255D%3DHP&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGcm9tIOKCuTM5OTkiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJQcmludGVycyJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX0sImhlcm9QaWQiOnsic2luZ2xlVmFsdWVBdHRyaWJ1dGUiOnsia2V5IjoiaGVyb1BpZCIsImluZmVyZW5jZVR5cGUiOiJQSUQiLCJ2YWx1ZSI6IlBSTkRYSFpFNVI5SFVKSlkiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&fm=neo%2Fmerchandising&iid=M_0daaebe7-bc8f-4d66-a067-5f755ffd7800_1.D54DFY00C5JD&ppt=hp&ppn=homepage&ssid=omfw6d4g5c0000001687193720484&otracker=dynamic_omu_infinite_Best%2Bof%2BElectronics_6_1.dealCard.OMU_INFINITE_D54DFY00C5JD&cid=D54DFY00C5JD',
      detail: 'HP'
    },

    {
      image: logo05,
      name: 'Premium PowerBanks',
      price: 'Shop Now',
      link: 'https://www.flipkart.com/mobile-accessories/power-banks/~cs-zewisow11f/pr?sid=tyy%2C4mr%2Cfu6&collection-tab-name=Premium+PowerBanks&sort=price_asc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJTaG9wIE5vdyJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX0sInRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIlByZW1pdW0gUG93ZXJCYW5rcyJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&fm=neo%2Fmerchandising&iid=M_b18008ad-dd33-4ae6-a479-5b87d1dde085_1.UDG9W07DN4PD&ppt=browse&ppn=browse&ssid=1rqj3tso5s0000001687194270523&otracker=dynamic_omu_infinite_Best%2Bof%2BElectronics_5_1.dealCard.OMU_INFINITE_UDG9W07DN4PD&cid=UDG9W07DN4PD',
      detail: 'Mi, realme & more'
    },

    {
      image: logo06,
      name: 'Projectors',
      price: 'From ₹9999',
      link: 'https://www.flipkart.com/computers/computer-peripherals/projectors/pr?sid=6bo%2Ctia%2C1hx&fm=neo%2Fmerchandising&iid=M_0cc842bf-96c6-4409-b385-b0a904682f33_2_372UD5BXDFYS_MC.ICU0BSHGNPBF&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_4_L2_view-all&cid=ICU0BSHGNPBF&p%5B%5D=facets.fulfilled_by%255B%255D%3DFlipkart%2BAssured&p%5B%5D=facets.brand%255B%255D%3DZEBRONICS&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGcm9tIOKCuTk5OTkiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJQcm9qZWN0b3JzIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fSwiaGVyb1BpZCI6eyJzaW5nbGVWYWx1ZUF0dHJpYnV0ZSI6eyJrZXkiOiJoZXJvUGlkIiwiaW5mZXJlbmNlVHlwZSI6IlBJRCIsInZhbHVlIjoiUFJPRzlIRllTQUtaQkc3UyIsInZhbHVlVHlwZSI6IlNJTkdMRV9WQUxVRUQifX19fX0%3D&fm=neo%2Fmerchandising&iid=M_b8d386c1-10e1-4a53-be72-7bf6467eb30f_1.GK5XP4J53XID&ppt=hp&ppn=homepage&ssid=bgi774frk00000001687194354638&otracker=dynamic_omu_infinite_Best%2Bof%2BElectronics_7_1.dealCard.OMU_INFINITE_GK5XP4J53XID&cid=GK5XP4J53XID',
      detail: 'ZEBRONICS'
    },

    {
      image: logo07,
      name: 'Monitor',
      price: 'From ₹8279',
      link: 'https://www.flipkart.com/computers/monitors/pr?sid=6bo%2C9no&fm=neo%2Fmerchandising&iid=M_ce1a6f68-d7d2-4ae1-875c-0d0877d9a11f_2_372UD5BXDFYS_MC.ECL5SFI77NSY&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_3_L2_view-all&cid=ECL5SFI77NSY&p%5B%5D=facets.fulfilled_by%255B%255D%3DFlipkart%2BAssured&p%5B%5D=facets.brand%255B%255D%3DDELL&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGcm9tIOKCuTgyNzkiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJNb25pdG9yIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fSwiaGVyb1BpZCI6eyJzaW5nbGVWYWx1ZUF0dHJpYnV0ZSI6eyJrZXkiOiJoZXJvUGlkIiwiaW5mZXJlbmNlVHlwZSI6IlBJRCIsInZhbHVlIjoiTU9OR1lERlFFMkpKSE5GMyIsInZhbHVlVHlwZSI6IlNJTkdMRV9WQUxVRUQifX19fX0%3D&fm=neo%2Fmerchandising&iid=M_fb68f8f2-18d4-4bc3-b3ab-a985b0e83af1_1.BK9ZVR1JH3RT&ppt=browse&ppn=browse&ssid=6vumd7o63k0000001687194529162&otracker=dynamic_omu_infinite_Best%2Bof%2BElectronics_9_1.dealCard.OMU_INFINITE_BK9ZVR1JH3RT&cid=BK9ZVR1JH3RT',
      detail: 'DELL'
    },

    {
      image: logo08,
      name: 'Printers',
      price: 'From ₹10190',
      detail: 'Brother',
      link: 'https://www.flipkart.com/computers/computer-peripherals/printers-inks/printers/pr?sid=6bo%2Ctia%2Cffn%2Ct64&fm=neo%2Fmerchandising&iid=M_2731d14e-2583-4664-a065-6fc7ea504a6d_2_372UD5BXDFYS_MC.ES1XN5J8PT49&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_2_L2_view-all&cid=ES1XN5J8PT49&p%5B%5D=facets.fulfilled_by%255B%255D%3DFlipkart%2BAssured&p%5B%5D=facets.brand%255B%255D%3DBrother&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGcm9tIOKCuTEwMTkwIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fSwidGl0bGUiOnsibXVsdGlWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoidGl0bGUiLCJpbmZlcmVuY2VUeXBlIjoiVElUTEUiLCJ2YWx1ZXMiOlsiUHJpbnRlcnMiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19&fm=neo%2Fmerchandising&iid=12205787-86ef-4ae7-9f05-8d0e1bb3f02a.X7W2R1VUIXBP&ppt=dynamic&ppn=dynamic&ssid=qkrjgu825c0000001687194542286&otracker=dynamic_omu_Best%252Bof%252BElectronics_9_From%2B%25E2%2582%25B910190_X7W2R1VUIXBP&cid=X7W2R1VUIXBP'
    }

  ];


  

  const handleNextProduct = () => {
    setCurrentProduct(currentProduct === products.length - 1 ? 0 : currentProduct + 4);
  };
  
  const handlePreviousProduct = () => {
    setCurrentProduct(currentProduct === 0 ? products.length - 1 : currentProduct - 4);
  };  

  const visibleProducts = products.slice(currentProduct , currentProduct + 4);





  return (
    <div className='electronic-part'>
      
      <div className='left-container'>
        <div className='left-part'>
          <div className='leftpart-top'>
            <div className='leftpart-top-content'>
              <h2 className='left-title'> <span className='move-right'>Best of</span> <br/><span className='word-break'>Electronics</span></h2>
              </div>
              <a className='view-all' href='https://www.flipkart.com/offers-list/content?screen=dynamic&pk=themeViews%3DDT-OMU-1%3ADealcard~widgetType%3DdealCard~contentType%3Dneo&wid=2.dealCard.OMU&wid=3.dealCard.OMU_3&otracker=hp_omu_Best%2Bof%2BElectronics_3&otracker1=hp_omu_PINNED_neo%2Fmerchandising_Best%2Bof%2BElectronics_NA_wc_view-all_3'>VIEW ALL</a>
              <div>
                <img src={logo} alt='' />
              </div>
          </div>
          <div className='leftpart-card-container'>
            {visibleProducts.map ((product, index) => ( 
            <div className={`card-product ${index === currentProduct ? 'active' : ''}`} key={index} >
              <a className='card-product-link' href={product.link}>
                <div className='img-card'>
                  <img className='card-product-image' src={product.image} alt={product.name} />
                </div>
                <div className='card-product-name'>{product.name}</div>
                <div className='card-product-price'>{product.price}</div>
                <div className='card-product-detail'>{product.detail}</div>
              </a>
            </div>
            ))} 
            <div className={`container_left left_btn ${currentProduct === 0  ? 'hidden' : ''}`}>
              <div className='btn_icon' onClick={handlePreviousProduct}>
                <ArrowBackIosIcon />
              </div>
            </div>
            <div className={`container_left right_btn ${currentProduct   === products.length - 4 ? 'hidden' : ''}`}>
              <div className='btn_icon' onClick={handleNextProduct}>
                <ArrowForwardIosIcon />
              </div>
            </div>  
        </div>
      </div>
    </div> 
         <div className='right-part'>
          <div className='img-part'>
            <a className='img-link' href='https://www.flipkart.com/travel/flights?param=FKHTTravel_DT-RHS_AW_INTL-4999&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiSUFEIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fX19fQ%3D%3D&nnc=J8EYJ1MTUNZR_IAD&otracker=hp_rhs_announcement_1_4.rhsAnnouncement.RHS_ANNOUNCEMENT_J8EYJ1MTUNZR'>
              <div className='right-img'>
                <img className='elec-img' src={logoelec} alt='' />
              </div>
            </a>
          </div>
        </div>
      </div>
  )
}

export default Electronics;