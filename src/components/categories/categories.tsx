import style from "./categories.module.css"

export const Categories = () =>{
    return <div className={style.categories}>
        <section className={style.categoriesSection}>
            <h2 className={style.h2}>Категории магазина</h2>
            <section className={style.categorySection}>
                <div className={style.category}></div>
                <div className={style.category}></div>
                <div className={style.category}></div>
                <div className={style.category}></div>
                <div className={style.category}></div>
                <div className={style.category}></div>


            </section>
        </section>

    </div>
}