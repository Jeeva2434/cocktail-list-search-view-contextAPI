import React from 'react'
import { Link } from 'react-router-dom';
import Loader from './Loader';
import {UseGlobalContext} from '../ContextAPI'

const CocktailList = () => {
    const{cocktailList,isLoading} = UseGlobalContext();

    if(isLoading){
      return <Loader/>
    }

    if(!cocktailList){
        return(
            <div className='emptyList'>
                Oops! No items found...
            </div>
        )
    }

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