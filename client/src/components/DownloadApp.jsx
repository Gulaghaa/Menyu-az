import React from 'react';
import { FaGooglePlay, FaApple } from 'react-icons/fa';
import '../css/DownloadApp.css'
import { Iphone, QR, app_store, google_play } from "../assets";


const DownloadApp = () => {
    return (
        <div className="download-container">
            <img className='iphone' src={Iphone} alt='description' />
            <div className='app_right'>
                <span>Mobil Tədbiqimizi Yükləyin</span>
                <span>Mobil tədbiqlə Menyu.az-a partnyor olan restoranlarda QR kodu oxudun və rahatlıqla menyuya keçin edin. Bol çeşidlərdən seçiminizi edin və sifarişinizi təsdiqləyin. Bu tədbiqi istifadə etməklə istənilən vaxt istədiyiniz restoranda yer reserv edə bilərsiniz.</span>
                <div className="link-container">
                    <div>
                        <a href="https://play.google.com/store/apps/details?id=com.menyuaz" className="download-link">
                            <img src={google_play} alt="description" />
                        </a>
                        <a href="https://apps.apple.com/az/app/menyu-az-qr/id6458441683" className="download-link">
                            <img src={app_store} alt="description" />
                        </a>
                    </div>
                    <img src={QR} alt="description" className='qr'/>
                </div>


            </div>
        </div>
    );
};

export default DownloadApp;
