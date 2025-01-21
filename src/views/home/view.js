import React, { useEffect } from "react";
import Header from "../../components/header/comp";
import Footer from "../../components/footer/comp";
import { useAppContext } from "../../Application";

export default function HomeView(){
    const { title, appSite } = useAppContext();
    document.title = `Главная | ${title}`;
    useEffect(()=>{
        window.scrollTo(0,0);
    }, [])    

    return (
        <>
          <Header />
            <main className="full page">
              <h1>Главная страница {appSite}</h1>
              <p>Элементарно базовый набор интерфейса в проекте React'а</p>
            </main>
          <Footer />
        </>
    )
}
