import React, { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const CocktailList = ({searchTerm,setSearchTerm}) => {

    const[cocktailList,setCocktailList] = useState([]);


    const fetchCockTail = useCallback(async() => {
       try{
          const response = await fetch(`${URL}${searchTerm}`);
          const data = await response.json();
          console.log(data);
           
          const cocktailData = data.drinks.map((item,index)=>{
            const {
                idDrink : id,
                strDrinkThumb : image,
                strDrink : name,
                strAlcoholic : alcohol,
                strGlass : glass
            } = item;

            return {
                id,
                image,
                name,
                alcohol,
                glass
            }
          })
          
          setCocktailList(cocktailData);
           
       }catch(error){
        console.log(error);
       }
    },[searchTerm]);

    useEffect(()=>{
      fetchCockTail();
    },[searchTerm,fetchCockTail]);


    return (
        <section className='cocktailList'>
            <div className='list_item'>
                {cocktailList && cocktailList.map((item,index)=>{
                    const{id,image,name,glass,alcohol} = item; 
                    return(
                        <div className='cocktail_item' key={id}>
                            <div className='itemCard_img_container'>
                                <img src={image} alt={name}/>  
                            </div>
                            <div className='itemCard_description'>
                                <div className='itemCard_name'>{name}</div>
                                <div className='itemCard_glass'>{glass}</div>
                                <div className='itemCard_alcohol'>{alcohol}</div>
                                <Link to = {`/cocktail/${id}`} className='btn_details'>
                                    Details</Link>
                            </div> 
                        </div>
                    )
                })

                }
            </div>
        </section>
    )
}

export default CocktailList