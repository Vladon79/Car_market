import style from "./main.module.scss"

export const Main = () =>{
    return (
        <div className={style.main}>
            <section className={style.imgSection}>
            </section>
            <section className={style.mainSection}>
                <h4>Главная</h4>
                <h4>Магазин</h4>
                <h4>Блог</h4>
                <h4>Покупателям</h4>
                <h4>Контакты</h4>
            </section>
            <section className={style.iconSection}></section>

        </div>
    )
}