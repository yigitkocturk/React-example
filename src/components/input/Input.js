import React from "react";
import './Input.css';
import {PropTypes} from 'prop-types';

const Input =({type, placeholder, value, onChange}) =>{
    return(
       <input className="custom-input" type={type} placeholder={placeholder} value={value} onChange={onChange} ></input>
    )
}

Input.propTypes={
    value:PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func.isRequired
}
Input.defaultProps={
    value: "Bir değer giriniz...",
    type: "text"
}

export default Input