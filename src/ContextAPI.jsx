import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'


const TheCocktailDB = createContext();

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const ContextAPI = ({children}) => {
     
    const[isLoading,setIsLoading] = useState(false);
    const[searchTerm,setSearchTerm] = useState('d');
    const[cocktailList,setCocktailList] = useState([]);

    const fetchCockTail = useCallback(async() => {
        setIsLoading(true);
        try{
             const response = await fetch(`${URL}${searchTerm}`);
             const data = await response.json();
             
             if(data.drinks){
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
             }else{
                 setCocktailList(null);
             }
        }catch(error){
         console.log(error);
        }
        setIsLoading(false);
     },[searchTerm]);
 
     useEffect(()=>{
       fetchCockTail();
     },[searchTerm,fetchCockTail]);
 
    return (
       <TheCocktailDB.Provider
        value={{
            isLoading,
            setIsLoading,
            searchTerm,
            setSearchTerm,
            cocktailList,
            setCocktailList
        }}
       >
        {children}
       </TheCocktailDB.Provider>
    )
}

export const UseGlobalContext = () => {
    return useContext(TheCocktailDB);
}

export default ContextAPI