import { CustomButton } from "../Button"
import style from "./style.module.css"

export const PlanCard = (props) => {
    return (
        <div className={style.card}>
            <div className={style.header}>
                {props.time && <span className={style.time}>{props.time} month free</span>}<br />
                <span className={style['one-time']}>One-time plans available</span>
                <h4 className={style.plan}>{props.plan}</h4>
                <p>{props.price}/month after offer period</p>
                <p>{props.accountNumber} account</p>
            </div>
            <div className={style.content}>
                <ul>
                    {
                        props.features && props.features.map((feature)=><li>
                            <p>{feature}</p>
                        </li>)
                    }
                </ul>
                <br />
                <CustomButton className={style.button} onClick={()=>{}}>View plans</CustomButton>
            </div>
            <div className={style.footer}>
                <a href="#">Terms and conditions apply.</a>
                 1 month free not available for users who have already tried Premium.</div>
        </div>
    )
}