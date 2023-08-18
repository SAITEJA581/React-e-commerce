import React, { useState } from 'react';

import fashionimg from './Images/fashion left.webp';
import logo1 from './Images/fd1.webp';
import logo2 from './Images/fd2.webp';
import logo3 from './Images/fd3.webp';
import logo4 from './Images/fd4.webp';
import logo5 from './Images/fd5.webp';
import logo6 from './Images/fd6.webp';
import logo7 from './Images/fd7.webp';
import logo8 from './Images/fd8.webp';

import  ArrowBackIosIcon  from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon  from '@mui/icons-material/ArrowForwardIos';
import './FashDeal.css';

const FashDeal = () => {



    const [fashionProduct , setFashionProduct] =useState(0);

    const items = [
        {
            image: logo1,
            name: 'Nike, New Balance & more',
            price: 'Min 50% Off',
            detail: "Men's Shoes & more",
            link: 'https://www.flipkart.com/mens-footwear/pr?sid=osp%2Ccil&p%5B%5D=facets.discount_range_v1%255B%255D%3D50%2525%2Bor%2Bmore&p%5B%5D=facets.brand%255B%255D%3DYONEX&p%5B%5D=facets.brand%255B%255D%3DSkechers&p%5B%5D=facets.brand%255B%255D%3DNew%2BBalance&p%5B%5D=facets.brand%255B%255D%3DBROOKS&p%5B%5D=facets.brand%255B%255D%3DXtep&p%5B%5D=facets.brand%255B%255D%3DSAUCONY&p%5B%5D=facets.brand%255B%255D%3DALTRA&p%5B%5D=facets.brand%255B%255D%3DANTA&p%5B%5D=facets.brand%255B%255D%3DUNDER%2BARMOUR&p%5B%5D=facets.brand%255B%255D%3DREEBOK%2BCLASSICS&p%5B%5D=facets.brand%255B%255D%3DAsics&p%5B%5D=facets.brand%255B%255D%3DNIKE&p%5B%5D=facets.brand%255B%255D%3DSALOMON&p%5B%5D=facets.brand%255B%255D%3DADIDAS%2BORIGINALS&hpid=bYFfXUs-yiVAyemgVOpKsKp7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJNaW4gNTAlIE9mZiJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX0sImhlcm9QaWQiOnsic2luZ2xlVmFsdWVBdHRyaWJ1dGUiOnsia2V5IjoiaGVyb1BpZCIsImluZmVyZW5jZVR5cGUiOiJQSUQiLCJ2YWx1ZSI6IlNIT0dFSDNaTVVQSERIWU0iLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJOaWtlLCBOZXcgQmFsYW5jZSAmIG1vcmUiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19&fm=neo%2Fmerchandising&iid=M_7b647b41-56ca-4677-83c8-aaebb97817b1_7.86SIKN84UX90&ppt=None&ppn=None&ssid=yza2yxk9fk0000001687534938432&otracker=hp_omu_Today%2527s%2BFashion%2BDeals_1_7.dealCard.OMU_86SIKN84UX90_5&otracker1=hp_omu_PINNED_neo%2Fmerchandising_Today%2527s%2BFashion%2BDeals_NA_dealCard_cc_1_NA_view-all_5&cid=86SIKN84UX90'
        },

        {
            image: logo2,
            name: 'PUMA ADIDAS & More ',
            price: 'Min 50% Off',
            detail: "Men's Shoes, Snekers...",
            link: 'https://www.flipkart.com/footwear/mens-footwear/~cs-tl3t1za0l6/pr?sid=osp%2Ccil&p%5B%5D=facets.discount_range_v1%255B%255D%3D50%2525%2Bor%2Bmore&hpid=QED9ZiKPA6hfet4q_rRUuqp7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJNaW4gNTAlIE9mZiJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX0sImhlcm9QaWQiOnsic2luZ2xlVmFsdWVBdHRyaWJ1dGUiOnsia2V5IjoiaGVyb1BpZCIsImluZmVyZW5jZVR5cGUiOiJQSUQiLCJ2YWx1ZSI6IlNIT0c0SkVZU0ROSE1URksiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJQVU1BLCBBRElEQVMgJiBNb3JlIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&fm=neo%2Fmerchandising&iid=M_caa4389a-4f27-413e-bb9c-9c1a767e5be4_1.9JLMD05SSY4I&ppt=hp&ppn=homepage&ssid=98nd7o28wg0000001687535616058&otracker=dynamic_omu_infinite_Today%2527s%2BFashion%2BDeals_2_1.dealCard.OMU_INFINITE_9JLMD05SSY4I&cid=9JLMD05SSY4I'
        },

        {
            image: logo3,
            name: 'ADIDAS, PUMA & more',
            price: 'Under ₹799',
            detail: 'Sandals, Slides...',
            link: 'https://www.flipkart.com/mens-footwear/~sandals-and-slippers/pr?sid=osp%2Ccil&p%5B%5D=facets.brand%255B%255D%3DWROGN%2BACTIVE&p%5B%5D=facets.brand%255B%255D%3DHRX%2Bby%2BHrithik%2BRoshan&p%5B%5D=facets.brand%255B%255D%3DYONEX&p%5B%5D=facets.brand%255B%255D%3DPOWER&p%5B%5D=facets.brand%255B%255D%3Dasics&p%5B%5D=facets.brand%255B%255D%3DSLAZENGER&p%5B%5D=facets.brand%255B%255D%3DSkechers&p%5B%5D=facets.brand%255B%255D%3DNIVIA&p%5B%5D=facets.brand%255B%255D%3DLOTTO&p%5B%5D=facets.brand%255B%255D%3DBROOKS&p%5B%5D=facets.brand%255B%255D%3DXtep&p%5B%5D=facets.brand%255B%255D%3DFILA&p%5B%5D=facets.brand%255B%255D%3DSALOMON&p%5B%5D=facets.brand%255B%255D%3DSAUCONY&p%5B%5D=facets.brand%255B%255D%3DALTRA&p%5B%5D=facets.brand%255B%255D%3DCAMPUS&p%5B%5D=facets.brand%255B%255D%3DANTA&p%5B%5D=facets.brand%255B%255D%3DPuma&p%5B%5D=facets.brand%255B%255D%3Dadidas&p%5B%5D=facets.brand%255B%255D%3DNike&p%5B%5D=facets.brand%255B%255D%3DReebok&p%5B%5D=facets.brand%255B%255D%3DUNDER%2BARMOUR&p%5B%5D=facets.brand%255B%255D%3Dnew%2Bbalance&p%5B%5D=facets.price_range.from%3DMin&p%5B%5D=facets.price_range.to%3D799&hpid=8NgI_YXqWa3H1TzX4XSoBqp7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJVbmRlciDigrk3OTkiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJoZXJvUGlkIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWUiOiJTRkZGQlpRWldHSERSRzlEIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fSwidGl0bGUiOnsibXVsdGlWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoidGl0bGUiLCJpbmZlcmVuY2VUeXBlIjoiVElUTEUiLCJ2YWx1ZXMiOlsiQURJREFTLCBQVU1BICYgbW9yZSJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&fm=neo%2Fmerchandising&iid=M_34d97519-02b9-4e61-9fc6-6b634ea5308b_1.79HLBFHF8OF7&ppt=hp&ppn=homepage&ssid=s8k9rgzuio0000001687536126874&otracker=dynamic_omu_infinite_Today%2527s%2BFashion%2BDeals_7_1.dealCard.OMU_INFINITE_79HLBFHF8OF7&cid=79HLBFHF8OF7'
        },

        {
            image: logo4,
            name: 'Earings',
            price: 'From ₹199',
            detail: 'Sukkhi, Shining Diva...',
            link: 'https://www.flipkart.com/earrings/pr?sid=mcr%2C96v%2Ck9d&p%5B%5D=facets.price_range.from%3D199&p%5B%5D=facets.price_range.to%3DMax&param=7&sort=price_asc&param=4567&hpid=B-iXNSggui3GajkAeUs1oKp7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGcm9tIOKCuTE5OSJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX0sImhlcm9QaWQiOnsibXVsdGlWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoiaGVyb1BpZCIsImluZmVyZW5jZVR5cGUiOiJQSUQiLCJ2YWx1ZXMiOlsiRVJHRzdKNDhERU5VWEs5UiJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX0sInRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkVhcnJpbmdzIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&fm=neo%2Fmerchandising&iid=b20ec16d-0335-4509-96fa-35bc18f717d5.F7UVN2SUL1AE&ppt=dynamic&ppn=dynamic&ssid=xxk14hjhow0000001687536299463&otracker=dynamic_omu_Today%252527s%252BFashion%252BDeals_15_From%2B%25E2%2582%25B9199_F7UVN2SUL1AE&cid=F7UVN2SUL1AE'
        },

        {
            image: logo5,
            name: 'Trendy Sarees',
            price: 'Under ₹299',
            detail: 'Massive Price Drop!!!',
            link: 'https://www.flipkart.com/womens-sarees/~cs-360n8lbah4/pr?sid=clo%2C8on%2Czpd%2C9og&p%5B%5D=facets.price_range.from%3DMin&p%5B%5D=facets.price_range.to%3D299&p%5B%5D=facets.brand%255B%255D%3DVaranga&p%5B%5D=facets.brand%255B%255D%3DLIBAS&p%5B%5D=facets.brand%255B%255D%3DKsut&p%5B%5D=facets.brand%255B%255D%3DAks&p%5B%5D=facets.brand%255B%255D%3DVbuyz&p%5B%5D=facets.brand%255B%255D%3DJuniper&p%5B%5D=facets.brand%255B%255D%3DPisara&p%5B%5D=facets.brand%255B%255D%3DFabwomen&p%5B%5D=facets.brand%255B%255D%3DBeing%2BBanarasi&p%5B%5D=facets.brand%255B%255D%3DEthnic%2BJunction&p%5B%5D=facets.brand%255B%255D%3DOomph%2521&p%5B%5D=facets.brand%255B%255D%3DTrendz%2BStyle&p%5B%5D=facets.brand%255B%255D%3DDivastri&p%5B%5D=facets.brand%255B%255D%3DVILLAGIUS&p%5B%5D=facets.brand%255B%255D%3DLeelavati&p%5B%5D=facets.brand%255B%255D%3Dyashika&p%5B%5D=facets.brand%255B%255D%3DShoppershopee&p%5B%5D=facets.brand%255B%255D%3DSariya&p%5B%5D=facets.brand%255B%255D%3DMirchi%2BFashion&p%5B%5D=facets.brand%255B%255D%3DSAARA&p%5B%5D=facets.brand%255B%255D%3DKehara&p%5B%5D=facets.brand%255B%255D%3DMANIKARNIKA&p%5B%5D=facets.brand%255B%255D%3DINDI%2BAVTAAR&p%5B%5D=facets.brand%255B%255D%3DSiril&p%5B%5D=facets.brand%255B%255D%3DSamah&p%5B%5D=facets.brand%255B%255D%3DMagmina&hpid=S6CGC4jboLc-QiNnpnAdLqp7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJVbmRlciDigrkyOTkiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJoZXJvUGlkIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWVzIjpbIlNBUkZTODRRVkg3SDU5TkMiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJUcmVuZHkgU2FyZWVzIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&fm=neo%2Fmerchandising&iid=c85c0e0d-b7b5-4afe-bd19-4cfceec62a95.8CLACK8CHPDM&ppt=dynamic&ppn=dynamic&ssid=hlhro6qrpc0000001687536474218&otracker=dynamic_omu_Today%252527s%252BFashion%252BDeals_25_Under%2B%25E2%2582%25B9299_8CLACK8CHPDM&cid=8CLACK8CHPDM'
        },

        {
            image: logo6,
            name: 'Vero Moda, Harpa, Rare...',
            price: '60-80% Off',
            detail: 'Tops, Trousers, Nightsuits...',
            link: 'https://www.flipkart.com/clothing-and-accessories/~cs-m87auxgec8/pr?sid=clo&collection-tab-name=Tops+Bottom+and+Sleepwear&p%5B%5D=facets.discount_range_v1%255B%255D%3D60%2525%2Bor%2Bmore&offer=vl%3A0681da6a28&hpid=unqERst2CCu_5jv0syDgrap7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyI2MC04MCUgT2ZmIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fSwiaGVyb1BpZCI6eyJzaW5nbGVWYWx1ZUF0dHJpYnV0ZSI6eyJrZXkiOiJoZXJvUGlkIiwiaW5mZXJlbmNlVHlwZSI6IlBJRCIsInZhbHVlIjoiVE9QR0VTNzNFUUZZSEdWSyIsInZhbHVlVHlwZSI6IlNJTkdMRV9WQUxVRUQifX0sInRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIlZlcm8gTW9kYSwgSGFycGEsIFJhcmUuLi4iXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19&fm=neo%2Fmerchandising&iid=M_37ed50ef-f064-471a-809e-0a80f84e429e_1.31LBUHJZ28U9&ppt=browse&ppn=browse&ssid=54qb6dqgw00000001687536685827&otracker=dynamic_omu_infinite_Today%2527s%2BFashion%2BDeals_10_1.dealCard.OMU_INFINITE_31LBUHJZ28U9&cid=31LBUHJZ28U9'
        },

        {
            image: logo7,
            name: 'Tops, Trousers, Nightsuits...',
            price: 'Under ₹699',
            detail: 'ONLY, Van Heusen, Chemistry...',
            link: 'https://www.flipkart.com/clothing-and-accessories/~cs-2klx21fzst/pr?sid=clo&collection-tab-name=Western+Collection&p%5B%5D=facets.price_range.from%3DMin&p%5B%5D=facets.price_range.to%3D699&p%5B%5D=facets.ideal_for%255B%255D%3DWomen&hpid=uALR_50jip-m2yK6J8nLgap7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJVbmRlciDigrk2OTkiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJoZXJvUGlkIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWVzIjpbIlRPUEdNN1Q3SERHVFZBVTkiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJUb3BzLCBUcm91c2VycywgTmlnaHRzdWl0cy4uLiJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&fm=neo%2Fmerchandising&iid=75064038-ece1-495c-8517-6a9637a179ba.WXTN1ZOJS07F&ppt=dynamic&ppn=dynamic&ssid=v716xcqy2o0000001687536833467&otracker=dynamic_omu_Today%252527s%252BFashion%252BDeals_31_Under%2B%25E2%2582%25B9699_WXTN1ZOJS07F&cid=WXTN1ZOJS07F'
        },

        {
            image: logo8,
            name: 'Skybags, Nasher Miles & more...',
            price: 'Min 60% Off',
            detail: 'Bestselling Branded Trolley Bags',
            link: 'https://www.flipkart.com/bags-wallets-belts/luggage-travel/suitcases/pr?sid=reh%2Cplk%2Ctvv&p%5B%5D=facets.discount_range_v1%255B%255D%3D60%2525%2Bor%2Bmore&param=88&hpid=m8xL6ZdD75tWnjrC4Rq7Cap7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJNaW4gNjAlIE9mZiJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX0sImhlcm9QaWQiOnsibXVsdGlWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoiaGVyb1BpZCIsImluZmVyZW5jZVR5cGUiOiJQSUQiLCJ2YWx1ZXMiOlsiU1RDRzlaWFFVR0tNWU5UUCJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX0sInRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIlNreWJhZ3MsIE5hc2hlciBNaWxlcyAmIG1vcmUuLiJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&fm=neo%2Fmerchandising&iid=725d131f-032e-4d4c-918f-071978b19470.AFEQ90ASEGCG&ppt=dynamic&ppn=dynamic&ssid=rgffxwnmpc0000001687537060425&otracker=dynamic_omu_Today%252527s%252BFashion%252BDeals_34_Min%2B60%2525%2BOff_AFEQ90ASEGCG&cid=AFEQ90ASEGCG'
        }
    ];

    const handleNextProduct = () => {
      const nextIndex = (fashionProduct + 5) % items.length;
      setFashionProduct(nextIndex);
    };
    
    const handlePreviousProduct = () => {
      const previousIndex = (fashionProduct - 5 + items.length) % items.length;
      setFashionProduct(previousIndex);
    };
    
    
      const visibleItems = items.slice(fashionProduct, fashionProduct + 5 );
    

  return (
    <div className='fashion_container'>
      <div className='left-containers'>
        <div className='left-parts'>
          <div className='leftpart-top'>
            <div className='leftpart-top-contents'>
              <h2 className='left-title'> <span className='move-title'>Today's Fashion</span> <br /> <span className='break'>Deals</span></h2>
              <a className='view-all' href='https://www.flipkart.com/offers-list/todays-fashion-deals?screen=dynamic&pk=themeViews%3DLS-Big-Bachat-Topdeals%3ADD-HP~widgetType%3DdealCard~contentType%3Dneo&wid=7.dealCard.OMU_5&otracker=hp_omu_Today%2527s%2BFashion%2BDeals_5&otracker1=hp_omu_PINNED_neo%2Fmerchandising_Today%2527s%2BFashion%2BDeals_NA_wc_view-all_5'>VIEW ALL</a>
              <div>
                <img className='leftside-image' src={fashionimg} alt='' />
              </div>
            </div>
          </div>
          <div className='leftpart-cards-containers'>
            {visibleItems.map ((product, index) => (
            <div className={`card-products ${index === fashionProduct ? 'active' : ''}`} key={index} >
              <a className='card-product-link' href={product.link}>
                <div className='img-card'>
                  <img className='card-product-image' src={product.image} alt='' />
                </div>
                <div className='card-product-name'>{product.name}</div>
                <div className='card-product-price'>{product.price}</div>
                <div className='card-product-detail'>{product.detail}</div>
              </a>
            </div>
            ))}
            <div className={`container_left left_btns ${fashionProduct === 0  ? 'hidden' : ''}`}>
              <div className='btn_icon' onClick={handleNextProduct}>
                <ArrowBackIosIcon />
              </div>
            </div>
            <div className={`container_left right_btns ${fashionProduct   === items.length - 5 ? 'hidden' : ''}`}>
              <div className='btn_icon' onClick={handlePreviousProduct}>
                <ArrowForwardIosIcon />
              </div>
            </div>   
          </div>
        </div>
      </div>   
    </div>
  )
}

export default FashDeal;