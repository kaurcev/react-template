import React, { useState, useEffect } from 'react';
import './style.css';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);
  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  }

  const onOpenInfo = () => {
    window.open('https://xn--h1ajim.xn--p1ai/Cookie','_blank', 'rel=noopener noreferrer')     
}

  if (!isVisible) {
    return null;
  }
 
  return (
    <div className='CookieConsent'>
        <div className='content'>
           <div className='clm'>
                <span>Мы используем куки для улучшения работы нашего сайта. Принять куки?</span>
                <span className='mini'>Можете узнать для чего нам <a href="/cookies">cookies</a> и как мы их используем</span>
           </div>
           <div className='row'>
           <button onClick={handleAccept}>
                Принять
            </button>
            <button onClick={onOpenInfo}>
                Подробнее
            </button>
           </div>
        </div>
    </div>
  );
}

  export default CookieConsent;