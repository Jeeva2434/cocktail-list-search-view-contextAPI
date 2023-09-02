import React, { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom'
import Loader from '../components/Loader';


const SingleCocktail = () => {

  const{id} = useParams();
  const[cocktail,setCocktail] = useState(null);
  const[loading,setIsLoading] = useState(false);

  useEffect(()=>{
    const getDetails = async() => {
      setIsLoading(true);
      try{
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await response.json();
  
        if(data.drinks[0]){
          const {
            strDrink : name,
            strGlass : glass,
            strDrinkThumb : image,
            strAlcoholic : info,
            strCategory : category,
            strInstructions : instructions,
            strIngredient1 : ingredients1,
            strIngredient2 : ingredients2,
            strIngredient3 : ingredients3
          } = data.drinks[0];
    
          const ingredients = [ingredients1,ingredients2,ingredients3];
    
          const newCocktail = {
            name,
            image,
            category,
            glass,
            info,
            instructions,
            ingredients
          }

          setCocktail(newCocktail);
        }else{
          setCocktail(null);
        }
      }
      catch(err){
        console.log(err);
      }
      setIsLoading(false);
    }
    getDetails();
  },[id]);


  if(loading){
    return <Loader/>
  }

  if(!cocktail){
    return;
  }
  else{
    const {name,image,category,glass,info,instructions,ingredients} = cocktail;

    return (
      <section className='singleCocktail container'>
        <Link to='/' className='btn_details'>Back home</Link>
        <div className='single_title'>{name}</div>
        <div className='details_view_area'>
          <div className='detail_img_container'>
            <img src={image} alt={name}/>
          </div>
          <ul className='detail_description'>
            <li><span className='sub_head'>Name:</span>{name}</li>
            <li><span className='sub_head'>Category:</span>{category}</li>
            <li><span className='sub_head'>Info:</span>{info}</li>
            <li><span className='sub_head'>Glass:</span>{glass}</li>
            <li><span className='sub_head'>Instructions:</span>{instructions}</li>
            <li><span className='sub_head'>Ingredients:</span>
               {ingredients.length > 0 && ingredients.map((item,index)=>{
                return (
                  <span key={index}>{item} </span>
                )
               }) }
            </li>
          </ul>
        </div>
      </section>
    )
  }
}

export default SingleCocktail