import style from "./style.module.css"

export const CustomInput = (props) => {
    return (
        <>
        <input {...props} className={style['input-field']} />
        </>
    )
}