import React, { createContext, useContext } from 'react';
import Ico from './tools/Ico';
import packageJson from '../package.json';
import YandexMetrica from './tools/YandexMetrica';
import CookieConsent from './components/cookies/comp';
import analytics from './tools/Firebase';

const AppContext = createContext();

export const AppProvider = ({ children }) =>{
    const appSite           = process.env.REACT_APP_SITE
    const appName           = process.env.REACT_APP_NAME
    const appDescription    = process.env.REACT_APP_DESC
    const appAuthor         = process.env.REACT_APP_AUTHOR
    const appAuthorMail     = process.env.REACT_APP_AUTHOR_MAIL
    const title             = process.env.REACT_APP_BASE_TITLE

    /* React-template version */
    const RTVersion = `react-template v${packageJson.version}`;

    document.title = title;
  
  return (
    <AppContext.Provider value={{appName, appDescription, appAuthor, appAuthorMail, RTVersion, analytics, title, appSite, Ico
    }}>
      {children}
      <CookieConsent/>
      {process.env.REACT_APP_YANDEXMETRIKA === 0 ?(<YandexMetrica />): null}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
