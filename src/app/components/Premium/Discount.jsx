import { CustomButton } from "../Button"
import style from  './style.module.css'


export const Discount = () => {
    return (
        <div className={style.discount}>
            <p>
                Special discount for eligible students in university 
            </p>
            <CustomButton type="outline" onClick={()=>{}} className="btn-inverted">Learn more</CustomButton>
        </div>
    )
}