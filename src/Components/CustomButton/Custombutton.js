import React from 'react'
import './CustomButton.css'

function CustomButton({children,...otherProps}) {
    return (
        <div>
            <button class='custom-button' {...otherProps}>{children}</button>        
        </div>
    )
}

export default CustomButton
