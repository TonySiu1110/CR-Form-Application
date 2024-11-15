import React from 'react'

const MinistryPartner = () => {
    
    const handleClick = () => {
        console.log("Hello World")
    }

    return (
        <button className='Button-Ministry-Partner' onClick={handleClick}>Ministry Partner</button>
    )
}

export default MinistryPartner
