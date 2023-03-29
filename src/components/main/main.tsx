import style from "./main.module.scss"
import car from "../../assest/icon/car.svg"
import cart from "../../assest/icon/cart.svg"
import search from "../../assest/icon/search.svg"

export const Main = () =>{
    const iconStyle = (logo: string) => ({
        backgroundImage: 'url(' + logo + ')',
    });


    return (
        <div className={style.main}>
            <section className={style.imgSection}>
                <a style={iconStyle(car)} className={style.carIcon}/>
            </section>
            <section className={style.mainSection}>
                <h4>Главная</h4>
                <h4>Магазин</h4>
                <h4>Блог</h4>
                <h4>Покупателям</h4>
                <h4>Контакты</h4>
            </section>
            <section className={style.iconSection}>
                <a style={iconStyle(search)} className={style.searchIcon}/>
                <a style={iconStyle(cart)} className={style.cartIcon}/>
            </section>

        </div>
    )
}