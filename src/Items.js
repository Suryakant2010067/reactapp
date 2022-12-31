import React from 'react'
import { menuData } from './menuData'
import Category from './Category';
import { useState } from 'react';
import Item from './Item';
const Items = () => {
    const [items,setItems]=useState(menuData);
    const catagories=[];
    menuData.forEach((menu)=>
    {
        if(!catagories.includes(menu.category)) 
        catagories.push(menu.category);
        
    });
    const showMenu=(category)=>
    {
        category=category.charAt(0).toLowerCase() + category.slice(1);
        console.log(category)
      if(category==='all')
      {
     
          setItems(menuData)
      }
      else
      {
         const newItems=menuData.filter((menu)=>menu.category===category);
   
         setItems(newItems);
      }
    }
    console.log(items)

    return (
        <div className="menu">
        <div className="menu_category">
         <ul>
        <li><button onClick={(e)=>showMenu(e.target.innerText)}>All</button></li>
       
        {catagories.map((catergory,index)=>
        {
            return <li key={index}><Category showMenu={showMenu} catergory={catergory}/></li>
        })}
        </ul>
        </div>
        <div className="menu_items row">
         {
             items.map((item)=>
             {
                return <Item  key={item.id} item={item}/>
             })
         }
        </div>
        </div>
    )
}

export default Items