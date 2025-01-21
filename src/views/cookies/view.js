import React, { useEffect } from "react";
import Header from "../../components/header/comp";
import Footer from "../../components/footer/comp";
import { useAppContext } from "../../Application";


export default function CookiesView(){
    const { title, appSite, appAuthorMail } = useAppContext();
    document.title = `Политика использования файлов Cookie | ${title}`;
    useEffect(()=>{
        window.scrollTo(0,0);
    }, []);

    const mailtogen = (email) =>{
        return `mailto:${email}`;
    }

    return(
        <>
        <Header />
            <main>
            <h1>Политика использования файлов Cookie</h1>

            <h2>Что такое файлы Cookie?</h2>
            <p>Файлы Cookie — это небольшие текстовые файлы, которые сохраняются в вашем браузере при посещении сайта. Они помогают сайтам распознавать вас при последующих посещениях и улучшают функциональность сайта.</p>

            <h2>Какие файлы Cookie мы используем?</h2>
            <p>Мы используем два типа файлов Cookie: сессионные и постоянные.</p>
            <ul>
                <li><strong>Сессионные файлы Cookie</strong>: существуют только во время текущего сеанса и удаляются после закрытия браузера.</li>
                <li><strong>Постоянные файлы Cookie</strong>: сохраняются на устройстве и используются для отслеживания ваших предпочтений в течение длительного времени.</li>
            </ul>

            <h2>Цель использования файлов Cookie</h2>
            <p>Файлы Cookie помогают нам:</p>
            <ul>
                <li>Оптимизировать и улучшать функциональность сайта.</li>
                <li>Анализировать поведение пользователей для улучшения контента.</li>
                <li>Предоставлять персонализированные услуги.</li>
                <li>Обеспечивать безопасность.</li>
            </ul>

            <h2>Управление файлами Cookie</h2>
            <p>Вы можете управлять настройками файлов Cookie в вашем браузере. Вот как это сделать в некоторых популярных браузерах:</p>
            <ul>
                <li><strong>Google Chrome</strong>: Настройки - Конфиденциальность и безопасность - Файлы Cookie и данные сайтов.</li>
                <li><strong>Mozilla Firefox</strong>: Настройки - Приватность и защита - Файлы Cookie.</li>
                <li><strong>Safari</strong>: Настройки - Конфиденциальность - Файлы Cookie.</li>
                <li><strong>Microsoft Edge</strong>: Настройки - Конфиденциальность, поиск и помощь - Файлы Cookie.</li>
            </ul>

            <p>Если у вас возникнут вопросы относительно использования файлов Cookie, пожалуйста, свяжитесь с нами по электронной почте <a href={mailtogen(appAuthorMail)}>{appAuthorMail}</a>.</p>

            <p>С уважением,</p>
            <p>{appSite}</p>
            </main>
        <Footer />
        </>
    )
}