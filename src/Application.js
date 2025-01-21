import React, { createContext, useContext } from 'react';
import analytics from './tools/Firebase';
import packageJson from '../package.json';
import YandexMetrica from './tools/YandexMetrica';
import CookieConsent from './components/cookies/comp';

const AppContext = createContext();

export const AppProvider = ({ children }) =>{
    // Веб-приложение
    const appSite = packageJson.site;
    const appName = packageJson.name;
    const appDomain = packageJson.domain;
    const appDescription = packageJson.description;
    const appAuthor = packageJson.author.name;
    const appAuthorMail = packageJson.author.email;
    const appAuthorLicense = packageJson.license;
    const appVersion = packageJson.version;
    const title = packageJson.title;

    document.title = title;
  
  return (
    <AppContext.Provider value={{appName, appDescription, appAuthor, appAuthorMail, appVersion, appAuthorLicense, analytics, title, appSite,
      appDomain
    }}>
      {children}
      <CookieConsent/>
      {packageJson.metrik.yandex === 0 ?(<YandexMetrica />): null}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
