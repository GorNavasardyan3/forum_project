import React from "react"

function Button({text}) {
    return(
        <button className='inline-block whitespace-nowrap overflow-hidden text-center light-first-bg-color second_color w-full m-2 h-9 rounded-md my-3 font-semibold text-base	'>{text}</button>
    )
}

export default Button;