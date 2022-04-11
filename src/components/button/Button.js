import React from "react";
import PropTypes from 'prop-types';
import './Button.css'

const Button=({onClick, text})=>{
    return(
        <button className="custom-button" onClick={onClick} > {text}</button>
    )
}

Button.propTypes={
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string
}
Button.defaultProps = {
    text: "Tıkla" 
}

export default Button