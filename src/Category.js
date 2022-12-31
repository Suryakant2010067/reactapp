import React from 'react'

const Category = ({catergory,showMenu}) => {
    return (
        <div>
            <button onClick={(e)=>{e.preventDefault();showMenu(e.target.innerText)}}>{catergory}</button>
        </div>
    )
}

export default Category