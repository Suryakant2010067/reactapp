import React from 'react'

const Item = ({item}) => {
    const {title,price,img,desc}=item;
    const words = title.split(" ");
    console.log(words);
    let newTitle="";
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
        if(i!==words.length-1)
        newTitle=newTitle+words[i]+" ";
        else newTitle=newTitle+words[i];
    }
    return (
        <div className="singleitem col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <img src={img} alt={title} />
            <div className="item_details">
            <div className="item_details_top">
               <p>{newTitle}</p>
               <span className="price">${price}</span>
              
            </div>
            <div className="hr_line"></div>
            <div className="item_details_bottom">
               <p>{desc}</p>
            </div>
            </div>
        </div>
    )
}

export default Item