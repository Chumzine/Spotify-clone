import style from './Hero.module.css'
import { SectionHeader } from "./SectionTexts"
import { SectionTexts } from "./SectionTexts"
import Button from "./HeroButton"



export const Hero = () => {
    return (
        <section className={style["top-section"]}>
            <div className={style.container}>
                <SectionHeader className={style["top-section-header"]} />
                <SectionTexts className={style.para}>Just ₹119/month after. Debit and credit cards accepted. Cancel anytime.</SectionTexts>
                <div className={style["button-group"]}>
                    <Button className={style["start-btn"]}>GET STARTED</Button>
                    <Button className={style["other-plans-btn"]}>SEE OTHER PLANS</Button>
                </div>
                <SectionTexts className={style.terms}><a href="#/terms">Terms and conditions apply</a>. 1 month free not available for users who have already tried Premium.</SectionTexts>
            </div>
        </section>
    )
}