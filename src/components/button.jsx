import { useState } from "react"




const Button = ({text,...props}) => {
    return(
        <>
            <button {...props}>
                {text??'default'}
            </button>
        </>
    )
}
export default Button