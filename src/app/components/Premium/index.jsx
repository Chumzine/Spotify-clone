import { paymentPlans, paymentTypes } from "./data"
import { Discount } from "./Discount"
import { PlanCard } from "./PlanCard"
import style from "./style.module.css"

export const PremiumSection = () => {
    const renderPaymentType = (type) => {
        if (type.icon) return <type.icon />
        return null
    }
    return (
        <section className={style.section}>
            <h3 className={style.title}>Pick your Premium</h3>
            <p className={style.text}>Listen without limits on your phone, speaker, and other devices.</p>
            <div className={style.premium}>
                {
                    paymentTypes.map(renderPaymentType)
                } 
            </div>
            <br />
            <br />
            <div className={style.premium}>
                {
                    paymentPlans.map((plans)=>{
                        return <PlanCard {...plans} />
                    })
                }
            </div>
            <br />
            <br />
            <Discount />
        </section>
    )
}