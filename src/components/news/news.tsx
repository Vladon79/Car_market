import style from "./news.module.scss"
import {Button} from "../../common/button/button";

export const News = () =>{
    return <div className={style.news}>
        <section className={style.infoSection}>
            <section className={style.buttonSection}>
                <Button onClick={()=>{console.log("jhdbfew")}} className={style.catalogButton} title={"Котолог"}/>
                <Button onClick={()=>{console.log("jhdbfew")}} title={"Контакты"}/>
            </section>
        </section>

    </div>
}