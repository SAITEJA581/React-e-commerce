import React, { useState } from 'react';


import toys from './Images/flip1img1.webp';
import toys2 from './Images/flip1img2.webp';
import toys3 from './Images/flip1img3.webp';
import toys4 from './Images/flip1img4.webp';
import toys5 from './Images/flip1img5.webp';
import toys6 from './Images/flip1img6.webp';
import toys7 from './Images/flip1img7.webp';
import toys8 from './Images/flip1img8.webp';

import  ArrowBackIosIcon  from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon  from '@mui/icons-material/ArrowForwardIos';


import './Flip1.css';

const Flip1 = () => {


    const [totalProducts, setTotalProducts] = useState(0);

    const flipkartProducts = [
        {
            image: toys,
            name: 'Tricycles & Rideons',
            price: 'Up to 70% Off',
            detail: 'Figurines, Battle Toys & More',
            link: 'https://www.flipkart.com/toys/action-toys/pr?sid=tng%2Csv3&p%5B%5D=facets.rating%255B%255D%3D4%25E2%2598%2585%2B%2526%2Babove&hpid=rTHd3P8c2Eh-2fwrqbmKvqp7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJVcCB0byA3MCUgT2ZmIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fSwiaGVyb1BpZCI6eyJzaW5nbGVWYWx1ZUF0dHJpYnV0ZSI6eyJrZXkiOiJoZXJvUGlkIiwiaW5mZXJlbmNlVHlwZSI6IlBJRCIsInZhbHVlIjoiR1RPR0NZRUpEWk5HTk1FVyIsInZhbHVlVHlwZSI6IlNJTkdMRV9WQUxVRUQifX0sInRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIlRyaWN5Y2xlcyAmIFJpZGVvbnMiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19&fm=neo%2Fmerchandising&iid=M_16788436-f49c-4872-8df6-567cead1f01b_7.E6ABSCK1PFW6&ppt=None&ppn=None&ssid=j5jmc6694g0000001688553675529&otracker=hp_omu_Beauty%252C%2BFood%252C%2BToys%2B%2526%2Bmore_1_7.dealCard.OMU_E6ABSCK1PFW6_5&otracker1=hp_omu_PINNED_neo%2Fmerchandising_Beauty%252C%2BFood%252C%2BToys%2B%2526%2Bmore_NA_dealCard_cc_1_NA_view-all_5&cid=E6ABSCK1PFW6'
        },

        {
            image: toys2,
            name: 'Electric Cycle',
            price: 'Up to 40% Off',
            detail: 'Nuze,Motovolt & more',
            link: 'https://www.flipkart.com/sports/cycling/electric-cycle/pr?sid=abc%2Culv%2Ctwp&hpid=IN6WQymhhksnM1l95t0Z6Kp7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJVcCB0byA0MCUgT2ZmIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fSwiaGVyb1BpZCI6eyJzaW5nbGVWYWx1ZUF0dHJpYnV0ZSI6eyJrZXkiOiJoZXJvUGlkIiwiaW5mZXJlbmNlVHlwZSI6IlBJRCIsInZhbHVlIjoiRUNZRzZHNkdVRkJIR01YNiIsInZhbHVlVHlwZSI6IlNJTkdMRV9WQUxVRUQifX0sInRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkVsZWN0cmljIEN5Y2xlIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&fm=neo%2Fmerchandising&iid=M_c56ac701-db8a-4540-b46f-7726a595cefe_1.WEWB23EJNGV0&ppt=hp&ppn=homepage&ssid=j3agri6yr40000001688559810685&otracker=dynamic_omu_infinite_Beauty%252C%2BFood%252C%2BToys%2B%2526%2Bmore_3_1.dealCard.OMU_INFINITE_WEWB23EJNGV0&cid=WEWB23EJNGV0'
        },

        {
            image: toys3,
            name: 'Rider Helmets',
            price: 'From ₹699',
            detail: 'Vega, Steelbird, HRX and More',
            link: 'https://www.flipkart.com/automotive-accessories/helmets-and-riding-gear/helmet-and-accessories/biker-helmets/pr?sid=1mt%2Cztf%2Civ8%2Ctih&marketplace=FLIPKART&hpid=8c7ftGcyG0cjQM1vrbGcgap7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGcm9tIDY5OSJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX0sImhlcm9QaWQiOnsic2luZ2xlVmFsdWVBdHRyaWJ1dGUiOnsia2V5IjoiaGVyb1BpZCIsImluZmVyZW5jZVR5cGUiOiJQSUQiLCJ2YWx1ZSI6IkhMTUdIUFk0QUdCTUFZQVAiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJSaWRlciBIZWxtZXRzIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&fm=neo%2Fmerchandising&iid=M_3bcbf0d9-8feb-4925-818d-0bb3abd3a11d_1.V5VSIKF9EZSQ&ppt=browse&ppn=browse&ssid=nuzjtm0qk00000001688560244402&otracker=dynamic_omu_infinite_Beauty%252C%2BFood%252C%2BToys%2B%2526%2Bmore_3_1.dealCard.OMU_INFINITE_V5VSIKF9EZSQ&cid=V5VSIKF9EZSQ'
        },

        {
            image: toys4,
            name: 'Tyres',
            price: 'From ₹799',
            detail: 'Apollo,Bridgestone,Ceat',
            link: 'https://www.flipkart.com/automotive-accessories/tyre-and-wheel/tyres/pr?sid=1mt%2Cw8q%2Cfos&marketplace=FLIPKART&hpid=-CSFSwmdIfW7QbIwFPGUDqp7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGcm9tIDc5OSJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX0sImhlcm9QaWQiOnsic2luZ2xlVmFsdWVBdHRyaWJ1dGUiOnsia2V5IjoiaGVyb1BpZCIsImluZmVyZW5jZVR5cGUiOiJQSUQiLCJ2YWx1ZSI6IlZURUZaSkVUR1NNSlc0QlIiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJUeXJlcyJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&fm=neo%2Fmerchandising&iid=M_1bb77a7c-1d98-441d-9ded-26f35dc92c95_1.P95NTY8S8S8J&ppt=None&ppn=None&ssid=eiynrl1xv40000001688561209468&otracker=dynamic_omu_infinite_Beauty%252C%2BFood%252C%2BToys%2B%2526%2Bmore_8_1.dealCard.OMU_INFINITE_P95NTY8S8S8J&cid=P95NTY8S8S8J'
        },

        {
            image: toys5,
            name: 'Yoga Mat',
            price: 'From ₹159',
            detail: 'beatXP,HRX & Adrenex',
            link: 'https://www.flipkart.com/exercise-fitness/yoga/yoga-mats/pr?sid=qoc%2Cs1h%2Cfco&p%5B%5D=facets.fulfilled_by%255B%255D%3DPlus%2B%2528FAssured%2529&hpid=yhUfv55ktNCMdAA1j582l6p7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGcm9tIOKCuSAxNTkiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJoZXJvUGlkIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWVzIjpbIlNNVEdGWkdYWTQyUzIySFYiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJZb2dhIE1hdCJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&fm=neo%2Fmerchandising&iid=7fd23856-4f10-4b5f-859d-fb466c855b89.58HJEJX0S76R&ppt=dynamic&ppn=dynamic&ssid=w4oo6kztog0000001688561225309&otracker=dynamic_omu_Beauty%25252C%252BFood%25252C%252BToys%252B%252526%252Bmore_13_From%2B%25E2%2582%25B9%2B159_58HJEJX0S76R&cid=58HJEJX0S76R'
        },

        {
            image: toys6,
            name: 'Musical Keyboards',
            price: 'Up to 70% Off',
            detail: 'Beston,Redbox & more',
            link: 'https://www.flipkart.com/musical-instruments/keys-synthesizers/musical-keyboards/pr?sid=ypu%2Cnvg%2Cxqg&p%5B%5D=facets.discount_range_v1%255B%255D%3D30%2525%2Bor%2Bmore&p%5B%5D=facets.discount_range_v1%255B%255D%3D40%2525%2Bor%2Bmore&p%5B%5D=facets.discount_range_v1%255B%255D%3D20%2525%2Bor%2Bmore&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJ1cCB0byA3MCUgb2ZmIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fSwidGl0bGUiOnsibXVsdGlWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoidGl0bGUiLCJpbmZlcmVuY2VUeXBlIjoiVElUTEUiLCJ2YWx1ZXMiOlsiTXVzaWNhbCBLZXlib2FyZHMiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19&fm=neo%2Fmerchandising&iid=576124cc-1152-4add-b45b-dc5f77f8d194.U9SEHROSNPLH&ppt=dynamic&ppn=dynamic&ssid=kp88notm0g0000001688561325365&otracker=dynamic_omu_Beauty%25252C%252BFood%25252C%252BToys%252B%252526%252Bmore_14_up%2Bto%2B70%2525%2Boff_U9SEHROSNPLH&cid=U9SEHROSNPLH'
        },

        {
            image: toys7,
            name: 'Geared Cycles',
            price: 'From ₹3999',
            detail: 'Leader,Cradic & more',
            link: 'https://www.flipkart.com/sports/cycling/cycles/pr?sid=abc%2Culv%2Cixt&p%5B%5D=facets.tyre_size%255B%255D%3D27.5%2Binches&p%5B%5D=facets.tyre_size%255B%255D%3D28%2Binches&p%5B%5D=facets.tyre_size%255B%255D%3D29%2Binches&p%5B%5D=facets.brand%255B%255D%3DHERCULES&p%5B%5D=facets.brand%255B%255D%3DUrban%2BTerrain&p%5B%5D=facets.brand%255B%255D%3DHRX&p%5B%5D=facets.brand%255B%255D%3DLEADER&p%5B%5D=facets.brand%255B%255D%3DHERO&p%5B%5D=facets.brand%255B%255D%3DCRADIAC&p%5B%5D=facets.brand%255B%255D%3DAdrenex%2Bby%2BFlipkart&p%5B%5D=facets.brand%255B%255D%3DWALTX&p%5B%5D=facets.brand%255B%255D%3DVector%2B91&p%5B%5D=facets.brand%255B%255D%3DMontra&p%5B%5D=facets.brand%255B%255D%3DFIREFOX%2BBIKES&p%5B%5D=facets.fulfilled_by%255B%255D%3DPlus%2B%2528FAssured%2529&hpid=Lk-wso-VDfqk58fy3bl2IKp7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGcm9tIOKCuSAzOTk5Il0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fSwiaGVyb1BpZCI6eyJzaW5nbGVWYWx1ZUF0dHJpYnV0ZSI6eyJrZXkiOiJoZXJvUGlkIiwiaW5mZXJlbmNlVHlwZSI6IlBJRCIsInZhbHVlIjoiQ0NFR00zSzhLSDVZWkhBVSIsInZhbHVlVHlwZSI6IlNJTkdMRV9WQUxVRUQifX0sInRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkdlYXJlZCBDeWNsZXMiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19&fm=neo%2Fmerchandising&iid=M_e3b6a7ae-60dd-4a11-a8e5-e2fd312532db_1.D44KL0ET2AE5&ppt=browse&ppn=browse&ssid=2j4uw5lg0g0000001688824368197&otracker=dynamic_omu_infinite_Beauty%252C%2BFood%252C%2BToys%2B%2526%2Bmore_2_1.dealCard.OMU_INFINITE_D44KL0ET2AE5&cid=D44KL0ET2AE5'
        },

        {
            image: toys8,
            name: 'Food Spreads',
            price: 'Up to 75% Off',
            detail: 'Myfitness,Alpino & More',
            link: 'https://www.flipkart.com/food-products/food-spreads/pr?sid=eat%2Cxhv&p%5B%5D=facets.fulfilled_by%255B%255D%3DPlus%2B%2528FAssured%2529&param=3787&hpid=9V0SxtV29n-BM8--0trrxKp7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJVcHRvIDc1JSBPZmYiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJoZXJvUGlkIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWVzIjpbIkpBU0dZVzNNSENYN0g1UDQiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJGb29kIFNwcmVhZHMiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19&fm=neo%2Fmerchandising&iid=bc5b8a6a-7e3c-47bd-87ee-88dce75fefb6.HNDZ50TFE3Z9&ppt=dynamic&ppn=dynamic&ssid=8o7wu6vq7k0000001688561598048&otracker=dynamic_omu_Beauty%25252C%252BFood%25252C%252BToys%252B%252526%252Bmore_11_Upto%2B75%2525%2BOff_HNDZ50TFE3Z9&cid=HNDZ50TFE3Z9'
        }
    ];

    const handleNext = () => {
        setTotalProducts ((prevId) => prevId + 3);
    };

    const handlePrev = () => {
        setTotalProducts ((prevId) => prevId - 3);
    };

      

    const visibleProducts = flipkartProducts.slice(totalProducts , totalProducts +  flipkartProducts.length );




  return (
    <div className='total-container'>
        <div className='first-left'>
            <div className='back-image' style={{backgroundImage: ('url("https://rukminim1.flixcart.com/fk-p-flap/278/278/image/b84f1c22cce1a6a3.jpg?q=90")')}} >
                <div className='firstleft-text'>
                    <h2 className='leftside-text'>Beauty, Food, Toys & more</h2>
                    <div className='link-text'>
                        <a className='left-btnlink' href='https://www.flipkart.com/offers-list/beauty-food-toys-more?screen=dynamic&pk=themeViews%3DDT-OMU-2%3ADeal-DT~widgetType%3DdealCard~contentType%3Dneo&wid=7.dealCard.OMU_5&otracker=hp_omu_Beauty%252C%2BFood%252C%2BToys%2B%2526%2Bmore_5&otracker1=hp_omu_PINNED_neo%2Fmerchandising_Beauty%252C%2BFood%252C%2BToys%2B%2526%2Bmore_NA_wc_view-all_5'>
                            VIEW ALL
                        </a>
                    </div>
                </div>
            </div>
            <div className='container-right'>
                <div className='right-total'>
                    <div className='total-right'>
                        <div className='rightside-products'>
                            <div className='rightside-items'>
                                <div className='rightpart-container'>
                                    {visibleProducts.map((product,index) => (
                                    <div className={`rightitem-part ${index === totalProducts ? 'active' : ''}`} key={index}>
                                        <a className='left-itemlink' href= {product.link}>
                                            <div className='rightimg-container'>
                                                <div className='rightimg-part'>
                                                    <img className='img-container' src={product.image} alt='' />
                                                </div>
                                            </div>
                                            <div className='imgitem-name'>{product.name}</div>
                                            <div className='imgitem-price'>{product.price}</div>
                                            <div className='imgitem-details'>{product.detail}</div>
                                        </a>
                                    </div>
                                    ))}
                                </div>
                            </div>
                        </div> 
                    </div>
                    <div className={`btnicon left-partbtn ${totalProducts === 0 ? 'hidden' : ''}`}>
                        <div className='leftui ui-icon' onClick={handlePrev}>
                            <ArrowBackIosIcon />
                        </div>
                    </div>
                    <div className={`btnicon right-partbtn ${totalProducts === - 5 +  flipkartProducts.length ? 'hidden' : '' }`}>
                        <div className='rightui ui-icon' onClick={handleNext}>
                            <ArrowForwardIosIcon />
                        </div>
                    </div>
                </div>
            </div>      
        </div>
    </div>
  )
}

export default Flip1;