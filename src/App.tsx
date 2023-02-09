import React from 'react';
import style from './App.module.css';
import {Header} from "./components/header/header";
import {Main} from "./components/main/main";
import {News} from "./components/news/news";
import {Categories} from "./components/categories/categories";
import {LeadersOfSells} from "./components/leadersOfSells/leadersOfSells";
import {Footer} from "./components/footer/footer";

function App() {
  return (
    <div className={style.App}>
        <Header />
        <section className={style.mainSection}>
            <Main/>
        </section>
        <News/>
        <Categories/>
        <LeadersOfSells/>
        <Footer/>
    </div>
  );
}

export default App;
