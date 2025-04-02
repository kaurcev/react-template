import React, { useEffect } from "react";
import Header from "../../components/header/comp";
import Footer from "../../components/footer/comp";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../Application";


export default function E404View(){
    const navigate = useNavigate();
    const { title, Ico } = useAppContext();
    document.title = `Страница не найдена | ${title}`;
        useEffect(()=>{
            window.scrollTo(0,0);
    }, [])    

    return (
        <>
        <Header />
            <main>
                <div className="center">
                    <h1>404</h1>
                    <p>Страница не найдена</p>
                    <button onClick={()=> navigate("/")}> 
                        <Ico name="fa-cog" />
                        <span>На главную</span>
                    </button>
                </div>
            </main>
        <Footer />
        </>
    )
}