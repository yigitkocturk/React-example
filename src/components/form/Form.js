import React from "react";
import './Form.css';
import PropTypes from 'prop-types';

const Form=({children})=>{
    return(
        <div className="custom-form">
            {children}
        </div>
    )
}

Form.propTypes={
   children:PropTypes.node
}
Form.defaultProps = {
   children:null
}

export default Form