import React from 'react'

export const InputCompnent = (props) => {
    return (
        <div className='form__group'>
            <label style={{color:'#A4A4A4'}} htmlFor={props.id}>{props.label}</label>
            <input type={props.type ||'text'} name={props.name} id={props.id} autoComplete="off"
             value={props.value}
             onChange={props.onChange}
             style={{backgroundColor:'#fff2e5', border:'1px solid orange'}}
             placeholder={props.placeholder}
             className={props.error ? 'error' :''}
             />
             {props.error && <div className="form__error">{props.error}</div>}
        </div>
    )
}

export default InputCompnent