import React from 'react'

export const ButtonComponent = (props) => {
    return (
        <div>
            <button  type={props.type} className="btn">{props.text}</button>
        </div>
    )
}

export default ButtonComponent